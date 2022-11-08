const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
data: new SlashCommandBuilder()
	.setName('kick')
	.setDescription('Select a member and kick it like a football')
	.addUserOption(option =>
		option
			.setName('target')
			.setDescription('The member to be the football')
			.setRequired(true))
  .addStringOption(option =>
  option
  .setName('reason')      
  .setDescription("A reason")
  .setRequired(true))

  
.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),

async execute(interaction , args) {
        const author = interaction.member
      
        if (!author.permissions.has(KickMembers))
            return interaction.channel.send("You do not have permission to use /kick. Missing `KICK_MEMBERS`")



       interaction.kick(reason).then(() => {
            interaction.channel.send(`Kicked for ${reason}`)
        }).catch(err => {
            interaction.channel.send("I am not allowed to kick that person.")
            console.log(err)
        })
    }
}
