const { SlashCommandBuilder , Embed, EmbedBuilder } = require('discord.js')



module.exports = {
  data: new SlashCommandBuilder()
  .setName('gay')
  .setDescription('findout the gayness of the user ')
  .addUserOption(option => option.setName('target').setDescription('The target')),



  async execute(interaction) {

    const embed = new EmbedBuilder()

    .setTitle('Gayness of the user')
    
      .setColor('#6cffe2')
.setImage('https://images.unsplash.com/photo-1516119555254-e3b36f4b6769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=883&q=80')
.addFields({name: 'Gayness of the user' , value : `${Math.floor(Math.random()*100)}%`})


    interaction.reply({embeds: [embed]})          
  },
};