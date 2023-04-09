import { Client, MessageEmbed, TextChannel } from 'discord.js';

import { DISCORD_CHANNEL_IDS, DISCORD_TOKEN } from '../config/Discord';

class Discord {
  client = new Client();

  async login() {
    try {
      await this.client.login(DISCORD_TOKEN);
    } catch (error) {
      console.error(error);
    }
  }

  async sendMessage(message: MessageEmbed) {
    DISCORD_CHANNEL_IDS.forEach(async (channelId) => {
      const channel = (await this.client.channels.fetch(channelId)) as TextChannel;
      if (!channel) return;
      channel.send(message);
    });
  }
}

export default new Discord();
