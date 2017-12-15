const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "*";

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
client.on('message', message => {
    if (message.content === prefix +'help') {
    	message.reply('Hello im Ghostly-2.0, my commands are the following with out quotation marks , " *help", " *ping" , " *bing" , "Download"  ');
  	}
});


/*client.on('message', message => {
    if (message.content === +'no') {
    	message.reply('Yes!');
  	}
});
client.on('message', message => {
    if (message.content === +'yes') {
    	message.channel.send('No!');
  	}
        if (message.content === +'no') {
    	message.channel.send('yes!');
  	}
});
*/
client.on('message', message => {
    if (message.content === 'download') {
    	message.reply('the cheat is currently not available, please be patient as there is only one developer');
  	}
});
/*client.on('message', message => {
    if (message.content === 'bye') {
    	message.reply('Hello!');
  	}
});

client.on('message', message => {
    if (message.content === 'hi') {
    	message.reply('Bye!');
  	}
});

client.on('message', message => {
    if (message.content === 'hello') {
    	message.reply('Goodbye!');
  	}
});
client.on('message', message => {
    if (message.content === prefix +'gta') {
    	message.reply('error!');
  	}
});


*/
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
