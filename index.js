//Import Packaages
require('dotenv/config');
const discord = require("discord.js");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const keep_alive = require("./keep_alive.js");

//Few Constansts Values
const MODEL = "gemini-pro";
const API_KEY = process.env.API_KEY ?? "";
const BOT_TOKEN = process.env.BOT_TOKEN ?? "";
const CHANNEL_ID = process.env.CHANNEL_ID ?? "";

//Intregrate with Gemini AI API
const ai = new GoogleGenerativeAI(API_KEY);
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
client.login(BOT_TOKEN);

//Create a messageCreate event
client.on("messageCreate", async (message) => {
  try {
    if (message.author.bot) return;
    if (message.channel.id !== CHANNEL_ID) return;

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