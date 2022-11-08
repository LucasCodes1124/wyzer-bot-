//Module work
const { Client,GatewayIntentBits,ActivityType,Collection,Events} = require('discord.js')
const fs = require('fs') 
const path = require('node:path')
require('./deploy-command.js')
//Module work ends

//Client
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildPresences, 
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent
	], 

});

client.on("ready",() => {

 client.user.setPresence({
  activities: [{ name: `wyzer.gg`, url:'https://twitch.tv/monstercat', type: ActivityType.Streaming }],
  
});   
  console.log('i am ready')
})

client.on(Events.InteractionCreate, interaction => {
  if (!interaction.isChatInputCommand()) return;

	console.log(interaction);
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});
//client ends

//Command handler
client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);

	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}


//command handler ends





client.login('MTAzMTgyNjI4MjM1NjQyODg0MA.G8z0c5._pX7l1qhV0iWi_TWJ2TZObwHh3hM_81CosnyrY')