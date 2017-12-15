const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = *;

client.on(  +'ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === prefix +'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === prefix +'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
