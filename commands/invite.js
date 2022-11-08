const { SlashCommandBuilder , Embed, EmbedBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('invite')
  .setDescription('Invite the bot!'),

  async execute(interaction) {

    const embed = new EmbedBuilder()

    .setTitle(' Wyzer')
    .setDescription('Bot prefix - `/`')
      .setColor('#5ecffe')
		.setThumbnail( 'https://cdn.discordapp.com/avatars/1031826282356428840/f8d143cf2fed7c2fc9260ddda27cd11f.webp')
    .addFields({name: 'Invite the bot!', value: 'https://dsc.gg/wyzer-bot'})

    interaction.reply({embeds: [embed]})          
  },
};