# Discord Gemini Bot

This is a Discord bot named Gemini built with Node.js and the Discord.js library. The bot utilizes Google Generative AI to generate responses and can be run using `node index.js`. To keep the bot online 24/7, you can use services like [UptimeRobot](https://uptimerobot.com/) or [Cron-job.org](https://cron-job.org/).

## Features

- Responds with AI-generated messages in a specified Discord channel.
- Named after the Gemini model of the Google Generative AI.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js installed on your local machine.
- Discord bot token.
- Google Generative AI API key.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username/your_project.git
2. Navigate to the project directory
   ```sh
   cd your_project
3. Install NPM packages
    ```sh
    npm install
    
### Configuration

1. Set up a .env file in the project directory and add the following environment variables:
    ```env
    BOT_TOKEN=your_discord_bot_token
    API_KEY=your_google_generative_ai_api_key
    CHANNEL_ID=your_discord_channel_id

### Usage

1. Run the bot
    ```sh
    node index.js

2. Invite the bot to your Discord server and ensure it has the necessary permissions.
3. Start chatting with the bot in the specified channel.

### Keeping the Bot Online 24/7

To ensure the bot stays online 24/7, you can use services like UptimeRobot or Cron-job.org. Set up regular HTTP requests to your bot's server endpoint to keep it active.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.
