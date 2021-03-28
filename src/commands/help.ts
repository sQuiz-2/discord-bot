import { DISCORD_LOGO_URL } from '../config/Discord';
import { Message, MessageEmbed } from 'discord.js';

function run(message: Message) {
  const embedMessage = new MessageEmbed()
    .setTitle('Help')
    .setDescription('Voici la liste des commandes éxecutables par sQuizBot')
    .setColor('#0099ff')
    .setAuthor('sQuizBot', DISCORD_LOGO_URL)
    .addFields(
      { name: '?about', value: `Les informations concernant mon créateur et moi-même` },
      { name: '?help', value: `Affiche mes fonctionnalités` }
    );
  message.channel.send(embedMessage);
  message.delete({ timeout: 1000 });
}

const help = {
  name: 'help',
  aliases: ['help'],
  category: 'message',
  description: 'Écrit un message listant les fonctionnalités du Bot',
  cooldown: 20,
  usage: '',
  permissions: true,
  isUserAdmin: true,
  args: false,
};

export default { run, help };
