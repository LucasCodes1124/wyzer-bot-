const { SlashCommandBuilder,Embed,EmbedBuilder } = require("discord.js")


module.exports = {
  data: new SlashCommandBuilder()
  .setName('bigbrain')
  .setDescription('Bigbrain moment woaaaah'),
   
 

  async execute(interaction) {

    const embed = new EmbedBuilder()

    .setTitle('BigBrain')
    .setDescription('Bigbrain moment woahhhhh you are a genius')
      .setColor('#5cff2e')
.setImage('https://c.tenor.com/QaGZ50VlEPEAAAAM/think-about-it-use-your-brain.gif') 
.setTimestamp()
    .setFooter({text:'Wyzer'})
    interaction.reply({embeds: [embed]})    
   
  }

}

