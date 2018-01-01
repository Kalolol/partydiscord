const config = require('./config.json')
const Discord = require('discord.js');
const fs = require('fs');
const http = require('http');
const AdmZip = require('adm-zip');
const rimraf = require('rimraf');
const moment = require('moment');

const client = new Discord.Client();

const token = config.token;

function error(message){
  console.log(message)
}

const helpEmbed = {
  "title": "About & Commands",
  "description": "Created by [Kizzaris](http://www.skyenet.ga) to ease upload of the [Cult of the Party Parrot](http://cultofthepartyparrot.com/) emojis.",
  "color": 2456945,
  "timestamp": moment().format(),
  "footer": {
    "icon_url": "http://cultofthepartyparrot.com/parrots/parrot.gif",
    "text": "Mr.Parrot (partydiscord)"
  },
  "thumbnail": {
    "url": "http://cultofthepartyparrot.com/parrots/parrot.gif"
  },
  "author": {
    "name": "Mr.Parrot",
    "url": "https://kizzaris.github.io/partydiscord/",
    "icon_url": "http://cultofthepartyparrot.com/parrots/parrot.gif"
  },
  "fields": [
    {
      "name": "Source Code",
      "value": "You can find it on the [Github](https://github.com/Kizzaris/partydiscord)."
    },
    {
      "name": "Discord Server",
      "value": "If you need support, join the [Discord Server](https://discord.gg/BG3AUfh)."
    },
    {
      "name": "start",
      "value": "Starts the upload. (Must have manage emojis).",
      "inline": true
    },
    {
      "name": "help",
      "value": "This command right here.",
      "inline": true
    },
    {
      "name": "leave",
      "value": "<a:gothparrot:394867688289206272>",
      "inline": true
    },
    {
      "name": "stats",
      "value": "Mr.Parrot's statistics.",
      "inline": true
    }
  ]
};

function unpack() {
  var zip = new AdmZip("./parrot.zip");
  zip.extractAllTo(__dirname, true);
  fs.unlink('parrot.zip')
}

function download() {
  var file = fs.createWriteStream('./parrot.zip');
  var request = http.get("http://cultofthepartyparrot.com/parrots-c56c7933c6.zip", function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(unpack);
    });
    file.on('error', function(err) { // Handle errors
      fs.unlink('parrot.zip'); // Delete the file async. (But we don't check the result) 
      return error(err.message);
    });
  });
}

client.on('ready', () => {
  console.log('I am ready!');
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setGame('Do +help for help!');
});

client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content === '+start') {
    if (message.channel.type === 'text') {
      if (message.member.hasPermission("MANAGE_EMOJIS")){
        uploadEmojis(message);
      }
    }
  } else if (message.content === '+help') {
    message.channel.send({ embed: helpEmbed });
  } else if (message.content === '+leave') {
    leaveServer(message);
  } else if (message.content === '+stats') {
    message.channel.send(`${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
  }
});


function leaveServer(message) {
  message.channel.send('<a:gothparrot:394867688289206272>')
  message.channel.guild.leave()
}

function uploadEmojis(message) {
  message.channel.send(`<a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952>`)
  message.channel.send(`<a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952> Let's get this started!!!! <a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952>`)
  message.channel.send(`<a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952>`)
  message.channel.send(`<a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952>`)
  message.channel.send(`<a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952> Uploading Emojis!!!!!!!!!! <a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952>`)
  message.channel.send(`<a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952>`)
  message.channel.guild.createEmoji('./parrots/hd/parrot.gif', 'partyparrot')
  message.channel.send('partyparrot');
  message.channel.guild.createEmoji('./parrots/hd/middleparrot.gif', 'middleparrot')
  message.channel.send('middleparrot');
  message.channel.guild.createEmoji('./parrots/hd/rightparrot.gif', 'rightyparrot')
  message.channel.send('rightyparrot');
  message.channel.guild.createEmoji('./parrots/hd/congaparrot.gif', 'congaparrot')
  message.channel.send('congaparrot');
  message.channel.guild.createEmoji('./parrots/hd/shuffleparrot.gif', 'shuffleparrot')
  message.channel.send('shuffleparrot');
  message.channel.guild.createEmoji('./parrots/fastparrot.gif', 'fastparrot')
  message.channel.send('fastparrot');
  message.channel.guild.createEmoji('./parrots/ultrafastparrot.gif', 'ultrafastparrot')
  message.channel.send('ultrafastparrot');
  message.channel.guild.createEmoji('./parrots/christmasparrot.gif', 'christmasparrot')
  message.channel.send('christmasparrot');
  message.channel.guild.createEmoji('./parrots/parrotwave1.gif', 'parrotwave1')
  message.channel.send('parrotwave1');
  message.channel.guild.createEmoji('./parrots/parrotwave2.gif', 'parrotwave2')
  message.channel.send('parrotwave2');
  message.channel.guild.createEmoji('./parrots/parrotwave3.gif', 'parrotwave3')
  message.channel.send('parrotwave3');
  message.channel.guild.createEmoji('./parrots/parrotwave4.gif', 'parrotwave4')
  message.channel.send('parrotwave4');
  message.channel.guild.createEmoji('./parrots/parrotwave5.gif', 'parrotwave5')
  message.channel.send('parrotwave5');
  message.channel.guild.createEmoji('./parrots/parrotwave6.gif', 'parrotwave6')
  message.channel.send('parrotwave6');
  message.channel.guild.createEmoji('./parrots/parrotwave7.gif', 'parrotwave7')
  message.channel.send('parrotwave7');
  message.channel.guild.createEmoji('./parrots/confusedparrot.gif', 'confusedparrot')
  message.channel.send('confusedparrot');
  message.channel.guild.createEmoji('./parrots/dealwithitparrot.gif', 'dealwithitparrot')
  message.channel.send('dealwithitparrot');
  message.channel.guild.createEmoji('./parrots/gothparrot.gif', 'gothparrot')
  message.channel.send('gothparrot');
  message.channel.guild.createEmoji('./parrots/loveparrot.gif', 'loveparrot')
  message.channel.send('loveparrot');
  message.channel.guild.createEmoji('./parrots/parrotcop.gif', 'parrotcop')
  message.channel.send('parrotcop');
  message.channel.guild.createEmoji('./parrots/explodyparrot.gif', 'explodyparrot')
  message.channel.send('explodyparrot');
  message.channel.guild.createEmoji('./parrots/thumbsupparrot.gif', 'thumbsupparrot')
  message.channel.send('thumbsupparrot');
  message.channel.send(`<a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952>`)
  message.channel.send(`<a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952> It's finshed! Enjoy!!!!!!! <a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952>`)
  message.channel.send(`<a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952><a:ultrafastparrot:394835153966333952>`)
}

if (fs.existsSync(__dirname + '/parrots/')) {
  rimraf.sync(__dirname + '/parrots/')
  download()
  client.login(token);
} else {
  download()
  client.login(token);
}
