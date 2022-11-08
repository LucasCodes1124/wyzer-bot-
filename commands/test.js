const { SlashCommandBuilder,EmbedBuilder,Embed} = require('discord.js')
const ms = require("ms")
module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('test.js'),

  async execute(interaction, client) {
   



await interaction.reply("Fuck you never use this command!")
   
await interaction.editReply("YOU WILL NEVER CHANGE IDIOT!")
  },
		
};
