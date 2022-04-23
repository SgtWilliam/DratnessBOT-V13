const { Client, Collection } = require("discord.js");

const discordClient = new Client({
    intents: 32767,
});
module.exports = discordClient;

// Global Variables
discordClient.commands = new Collection();
discordClient.slashCommands = new Collection();

// Initializing the project
require("./src/handler")(discordClient);

discordClient.login(process.env.discordToken);
