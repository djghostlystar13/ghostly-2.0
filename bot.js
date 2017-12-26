const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$";

client.on(  +'ready', () => {
    console.log('I am ready!');
});
    
client.on('message', message => {
    if (message.content === prefix +'help') {
    	message.reply('Hello im Ghostly-2.0, my commands are the following with out quotation marks , bot commands about the menu ! , " $status " , " $s " , " Download " , " $features " , " $gta5-key " ,  Other bot commands! " $help " , " $ping " , " $bing " , " no " , " yes " ," hi " , " hello " , " hi " ," Bye " , " Goodbye " , " Goodnight " , " night ". ');
  	}
});
//menu stuff 
client.on('message', message => {
    if (message.content === 'download') {
    	message.reply('the cheat is currently not available, please be patient as there is only one developer.');
  	}
          if (message.content === 'Download') {
            message.reply('the cheat is currently not available, please be patient as there is only one developer.');
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
/*
    client.on('message', message => {
    if (message.content === prefix +'gta5-key') {
    	 message.channel.send("Please check your **DM**s");
        message.author.send('');
  	}
});
   */
client.on('message', message => {
    if (message.content === prefix +'features') {
    	message.reply('List of features in the menu! Godmode , DemiGod , *Teleport , No Reload , Infinite Ammo , Bullet Damage , RP increase , Never wanted , Super jump , Fast run ,Vehicle god , No recoil , Set time . *means this feature is buggy and sometimes crashes game . ');
  	}
});

//fun featues of bot
client.on('message', message => {
    if (message.content === 'No') {
    	message.reply('Yes!');
  	}
            if (message.content === 'no') {
    	        message.reply('Yes!');
  	       }
     if (message.content === 'Yes') {
    	message.reply('No!');
  	}
            if (message.content === 'yes') {
    	        message.reply('No!');
  	      }
});

client.on('message', message => {
     if (message.content === 'hi') {
    	message.reply('Bye!');
  	}
            if (message.content === 'Hi') {
    	        message.reply('Bye!');
  	        }
    if (message.content === 'hello') {
    	message.reply('Goodbye!');
  	}
            if (message.content === 'Hello') {
    	        message.reply('Goodbye!');
  	        }
     if (message.content === 'bye') {
    	message.reply('Hello!');
  	}
    if (message.content === 'goodbye') {
    	message.reply('Hello!');
  	}
            if (message.content === 'Goodbye') {
    	          message.reply('Hello!');
  	        }
});

client.on('message', message => {
    if (message.content === prefix +'ping') {
    	message.channel.send('PONG!');
  	}
       if (message.content === prefix +'bing') {
    	message.reply('BONG!');
  	}
});

   client.on('message', message => {
    if (message.content === 'goodnight') {
    	message.reply('Goodnight, sleep well, talk to you again soon');
  	}
           if (message.content === 'Goodnight') {
            message.reply('Goodnight, sleep well, talk to you again soon');
            }
                 if (message.content === 'night') {
                    message.reply('Goodnight, sleep well, talk to you again soon');
                    }
                        if (message.content === 'Night') {
                    message.reply('Goodnight, sleep well, talk to you again soon');
                    }
    });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
