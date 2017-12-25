const config = require('./config.json')
const Discord = require('discord.js');
const fs = require('fs');
const http = require('http');
const AdmZip = require('adm-zip');
const rimraf = require('rimraf');

const client = new Discord.Client();

const token = config.token;
var congaparrot = client.emojis.get("394829152005521411");
var confusedparrot = client.emojis.get("394835129031458826");
var ultrafastparrot = client.emojis.get("394835185977262080");
var thumbsupparrot = client.emojis.get("394835153966333952");

function error(message){
  console.log(message)
}

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
});


client.on('message', message => {
  if (message.content === 'start') {
    if (message.channel.type === 'text') {
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
  } else if (message.content === 'clear') {
    if (message.channel.type === 'dm') {
      
    }
  }
});

if (fs.existsSync(__dirname + '/parrots/')) {
  rimraf.sync(__dirname + '/parrots/')
  download()
  client.login(token);
} else {
  download()
  client.login(token);
}
