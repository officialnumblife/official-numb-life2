const Discord = require("discord.js")
const PREFIX = "p!";

var bot = new Discord.Client();

// Events
bot.on("ready", function() {
  bot.user.setActivity("Hi, Ini Bot Ya Gan!");
  console.log(`${bot.user.tag} Sudah Dihidupkan!`);
});

bot.on("message", function(message) {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;
  
  var args = message.content.substring(PREFIX.length).split(" ");
  var command = args[0].toLowerCase();
  
// Commands
  if (command == "ping") {
      message.channel.send(":ping_pong: PONG!");
  };
});

bot.login(NTczNDE0MjA4NTQxMTYzNTQw.XM5k9A.VleBoZmzNRO14trJ2A0RkLccP5Y);
