//Import Packaages
require('dotenv/config');
const discord = require("discord.js");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const keep_alive = require("./keep_alive.js");

//Few Constansts Values
const MODEL = "gemini-pro";
const apiKey = process.env.API_KEY ?? "";
const botToken = process.env.BOT_TOKEN ?? "";
const channelId = process.env.CHANNEL_ID ?? "";

//Intregrate with Gemini AI API
const ai = new GoogleGenerativeAI(apiKey);
const model = ai.getGenerativeModel({ model: MODEL });

//Create a new discord bot client instance
const client = new discord.Client({
  intents: Object.keys(discord.GatewayIntentBits),
});

//When the bot is ready
client.on("ready", () => {
  console.log("Bot is ready!");
});

//Login in discord bot
client.login(botToken);

//Create a messageCreate event
client.on("messageCreate", async (message) => {
  try {
    if (message.author.bot) return;
    if (message.channel.id !== channelId) return;

    // Start typing effect
    await message.channel.sendTyping();

    const { response } = await model.generateContent(message.cleanContent);

    // Delay before sending the actual response (adjust as needed)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await message.reply({
      content: response.text(),
    });
  } catch (e) {
    console.log(e); //Catch any errors
  }
});