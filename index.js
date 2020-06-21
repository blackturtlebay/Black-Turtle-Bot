require('dotenv').config({ path: require('find-config')('.env') })
//Discord Bot
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DiscordBotSec;
//const keep_alive = require('./keep_alive.js');
const prefix = "/";
client.login(token);
//-------------------------------------------//
//Database Connection
const mongoose = require('mongoose');
const uri = process.env.URI;
console.log(uri);
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected…")
})
.catch(err => console.log(err));


//-------------------------------------------//
//Declare Variables
var message = '';
var messagecheck = '';
var messageformat = '';
var playerids = [];
var confirmcommand = '';
var channelid = '';
var i = 0;

LogPlayerIDs();
//Custom Commands
function LogPlayerIDs() {
  client.on('message', message => {
    if (message.author === client.user) return;
    message = message.content;
    confirmcommand = "/log";
    messagecheck = message.substring(0, 4);
    if (messagecheck == confirmcommand) {
      messageformat = message.replace(/[^0-9]/g, "");
      messageformat = messageformat.replace(/.{18}/g, '$&,');
      playerids = messageformat.split(",");  //add all player ids to an array 
      for (i = 0; i < playerids.length; i++) {
        playerid = playerids[i];
        //db.collection.insertOne({ playerid: "${playerid}" })
      }
    }
  }


  )
};

