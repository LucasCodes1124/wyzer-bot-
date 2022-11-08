const { SlashCommandBuilder,Embed,EmbedBuilder } = require("discord.js")


module.exports = {
  data: new SlashCommandBuilder()
  .setName('help')
  .setDescription('Opens the help menu'),

  async execute(interaction) {

    const embed = new EmbedBuilder()

    .setTitle('Help Menu - Wyzer')
    .setDescription('Bot prefix - `/`')
      .setColor('#5ecffe')
		.setThumbnail( 'https://cdn.discordapp.com/avatars/1031826282356428840/46a7c779713919983fc21fbae1a1df25.webp')
    .addFields({name: 'Info', value: '```developer,ping,invite```'})
    .addFields({name: 'Fun', value: '```slap, gay , bigbrain```'})
.setTimestamp()
    .setFooter({text:'Wyzer'})
    interaction.reply({embeds: [embed]})    
   
  }

}