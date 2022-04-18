import { Message, MessageEmbed } from 'discord.js';

import { DISCORD_LOGO_URL } from '../config/Discord';

function run(message: Message) {
  const embedMessage = new MessageEmbed()
    .setTitle('About us')
    .setDescription(
      'Je suis un Bot créé pour lister les streams actifs dans la catégorie "sQuiz" sur Twitch. J\'ai été développé en Typescript avec discord.js par Mananka#3736 et Maji#8901'
    )
    .setColor('#0099ff')
    .setURL('https://squiz.gg/')
    .setAuthor('sQuizBot', DISCORD_LOGO_URL)
    .setThumbnail(DISCORD_LOGO_URL)
    .addFields(
      {
        name: 'Le Jeu',
        value: `Quiz de culture générale connecté à Twitch
            Disponible sur :arrow_right: https://squiz.gg`,
      },
      {
        name: 'Twitter',
        value: `https://twitter.com/squizcc | Pour connaître nos dernières actus brûlantes`,
      },
      {
        name: 'Auteur',
        value: `Mananka#3736 | Je réponds à vos retours sur le bot ( bugs et/ou autre ) et à toutes vos demandes de projet en mp`,
      }
    )
    .setFooter('sQuizBot by Mananka for sQuizTeam', DISCORD_LOGO_URL);
  message.channel.send(embedMessage);
  message.delete({ timeout: 1000 });
}

const help = {
  name: 'about',
  aliases: ['about'],
  category: 'message',
  description: 'Donnes les informations sur le Bot',
  cooldown: 20,
  usage: '',
  permissions: true,
  isUserAdmin: true,
  args: false,
};

export default { run, help };
