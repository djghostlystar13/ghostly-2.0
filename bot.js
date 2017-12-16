const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$";

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
    if (message.content === prefix +'status') {
    	message.reply('BOT = online, menu = Offline/detected.');
  	}
    if (message.content === prefix +'s') {
    	message.reply('BOT = online, menu = Offline/detected.');
  	}
    
});
client.on('message', message => {
    if (message.content === prefix +'help') {
    	message.reply('Hello im Ghostly-2.0, my commands are the following with out quotation marks , " $help ", " $ping " , " $status ", " $bing " , " Download " , " $skgta5 " , " no " , " yes " ," hi " , " hello " , " hi " ," Bye " , " goodbye " . ');
  	}
});

client.on('message', message => {
    if (message.content === 'no') {
    	message.reply('Yes!');
  	}
});
client.on('message', message => {
    if (message.content === 'yes') {
    	message.reply('No!');
  	}
});

client.on('message', message => {
    if (message.content === 'No') {
    	message.reply('Yes!');
  	}
});
client.on('message', message => {
    if (message.content === 'Yes') {
    	message.reply('No!');
  	}
});

client.on('message', message => {
    if (message.content === 'download') {
    	message.reply('the cheat is currently not available, please be patient as there is only one developer.');
  	}
});
client.on('message', message => {
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
    if (message.content === prefix +'skgta5') {
    	message.reply('error!');
  	}
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
