const { SlashCommandBuilder , Embed, EmbedBuilder } = require('discord.js')
const gifs = [
  'https://images-ext-2.discordapp.net/external/icXeJHaYXwSfBmJLMSsMi6pJh64DIz7U4dLWcmo0_s8/https/cdn.weeb.sh/images/HyV5mJtDb.gif',
  'https://images-ext-2.discordapp.net/external/DBXvKKQzJKqBB0iqk1HmuGLDb4HKgNi0qVY2e30j0uM/https/cdn.weeb.sh/images/SkZTQkKPZ.gif',
  'https://images-ext-1.discordapp.net/external/6LbijnPllcNx9YUNhVTtCW6WB1GczwKg40ykCoP0LRQ/https/cdn.weeb.sh/images/rJvR71KPb.gif',
  'https://images-ext-2.discordapp.net/external/xCbsOv4EwEDzoRQp_lnwKQcDw45HI12_5x3yF0NCQhA/https/cdn.weeb.sh/images/S1ylxxc1M.gif',
];

const randomGif = gifs[Math.floor(Math.random()* gifs.length)]; //${Math.floor(Math.random()*100)}
module.exports = {
  data: new SlashCommandBuilder()
  .setName('slap')
  .setDescription('Slaps the user badly ')
  .addUserOption(option => option.setName('target').setDescription('The user')),



  async execute(interaction) {

    const embed = new EmbedBuilder()

    .setTitle('Take that Idiot!')
    
      .setColor('#5ecffe')
		.setThumbnail( 'https://cdn.discordapp.com/avatars/1031826282356428840/f8d143cf2fed7c2fc9260ddda27cd11f.webp')

   .setImage(randomGif)

    interaction.reply({embeds: [embed]})          
  },
};