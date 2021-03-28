import About from '../commands/about';
import Help from '../commands/help';
import { DISCORD_CHANNEL_ID, DISCORD_COMMAND_PREFIX, DISCORD_TOKEN } from '../config/Discord';
import { Client, Message, MessageEmbed, TextChannel } from 'discord.js';

enum Commands {
  Help = 'help',
  About = 'about',
}

class Discord {
  client = new Client();

  constructor() {
    this.client.on('message', this.onMessage.bind(this));
    this.client.login(DISCORD_TOKEN);
  }

  onMessage(message: Message) {
    if (message.channel.id !== DISCORD_CHANNEL_ID) return;
    if (!message.content.startsWith(DISCORD_COMMAND_PREFIX)) return;

    const args = message.content.slice(DISCORD_COMMAND_PREFIX.length).split(/ +/);
    const commandName = args?.shift()?.toLowerCase();
    if (!commandName) return;
    if (commandName === Commands.Help) {
      Help.run(message);
    } else if (commandName === Commands.About) {
      About.run(message);
    }
  }

  async sendMessage(message: MessageEmbed) {
    const channel = this.client.channels.cache.find(
      (channel) => channel.id === DISCORD_CHANNEL_ID
    ) as TextChannel;
    if (!channel) return;
    channel.send(message);
  }
}

export default new Discord();
