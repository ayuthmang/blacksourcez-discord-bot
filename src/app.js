require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "Hello") {
    msg.reply("World!");
  }
});

client.login(process.env.DISCORD_TOKEN);
