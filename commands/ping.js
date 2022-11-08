const { SlashCommandBuilder,EmbedBuilder,Embed} = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),

  async execute(interaction, client) {
    const message = await interaction.deferReply({ fetchReply: true });

    const newMessage = new EmbedBuilder()
      .setColor("#FFFFF")
      .setTitle(`Pong!`)
      .setTimestamp()
	
      .setFooter({ text: "Wyzer Development"})
       .addFields(
        {
          name: `Latency`,
          value: `**\`${client.ws.ping}\`**`,
          inline: true,
        },        
        )
       
    await interaction.editReply({ embeds: [newMessage] });
  },
		
};
