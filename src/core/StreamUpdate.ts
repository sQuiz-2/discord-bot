import { MessageEmbed } from 'discord.js';

import { DISCORD_LOGO_URL } from '../config/Discord';
import Discord from '../services/Discord';
import Redis from '../services/Redis';

export type Streams = {
  userName: string;
  viewerCount: number;
};

export default class StreamBroadcaster {
  oldStreams: Streams[] = [];

  redisSubscribe() {
    Redis.subscribe('squizStreams', this.onSubComplete);
    Redis.on('message', this.onStreamUpdate.bind(this));
  }

  onSubComplete(err: Error | null): void {
    if (err) {
      console.error('Failed to subscribe: %s', err.message);
    } else {
      console.log('Subscribed successfully! This client is currently subscribed to squizStreams.');
    }
  }

  onStreamUpdate(_channel: string, newStreams: string): void {
    const newStreamsParsed: Streams[] | null = JSON.parse(newStreams);
    const streamsToBroadcast: Streams[] = [];
    if (!newStreamsParsed) return;

    newStreamsParsed.forEach((streamer) => {
      if (!this.oldStreams.find(({ userName }) => userName === streamer.userName)) {
        streamsToBroadcast.push(streamer);
      }
    });
    this.oldStreams = newStreamsParsed;
    this.broadcastNewStreams(streamsToBroadcast);
  }

  broadcastNewStreams(newStream: Streams[]) {
    newStream.forEach(({ userName }) => {
      const streamerLowerCase = userName.toLowerCase();
      const thumbnailUrl = `https://static-cdn.jtvnw.net/previews-ttv/live_user_${streamerLowerCase}-1080x720.jpg`;
      const embedMessage = new MessageEmbed()
        .setTitle(userName)
        .setDescription(userName + ' joue à sQuiz !')
        .setColor('#0099ff')
        .setURL('https://www.twitch.tv/' + streamerLowerCase)
        .setAuthor('sQuizBot', DISCORD_LOGO_URL)
        .setImage(thumbnailUrl);
      Discord.sendMessage(embedMessage);
    });
  }
}
