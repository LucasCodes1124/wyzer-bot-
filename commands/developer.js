const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("developer")
    .setDescription("The developers of the bot"),
  async execute(interaction) {


    const newMessage = new EmbedBuilder()
      .setColor("#4cc3e")
      .setTitle(`Developers`)
   
      .setTimestamp() 
		.setThumbnail( 'https://cdn.discordapp.com/avatars/1031826282356428840/f8d143cf2fed7c2fc9260ddda27cd11f.webp')
      
	
      .setFooter({ text: "Wyzer Development"})
       .addFields(
        {
          name: `Who made the bot?`,value: "<@991711412458115084>. And One of the best error solver here is <@783661052738011176> (He is like a god.like OMG)."},        )
       
    
    interaction.reply({ embeds: [newMessage] });
  },
};