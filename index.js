const TwitterNotification = require("./src/BotModules/TwitterNotification");
const AddReactions = require("./src/BotModules/AddReactions");
//const ServerLogs = require("./src/BotModules/voiceStateUpdate");
const EditedMessageLog = require("./src/BotModules/EditedMessageLog");
const DeletedMessageLog = require("./src/BotModules/DeletedMessageLog");
const SaidaLog = require("./src/BotModules/SaidaLog");

const Discord = require("discord.js");
const { Client, Collection, Intents } = require("discord.js");
const express = require('express');
const {response} = require("express");

const discordClient = new Client({intents: 32767});
module.exports = discordClient;


// Global Variables
const app = express();
const port = process.env.PORT || 5000;
discordClient.commands = new Collection();
discordClient.slashCommands = new Collection();


async function main() {
    discordClient.login(process.env.discordToken)
        .then()
        .catch(err => console.log(err.message))

    discordClient.on('ready', async () => {
        console.info(`Logged in as ${discordClient.user.tag}!`);


        TwitterNotification
            .init(discordClient)
            .then(OK => {console.log("TwitterNotification Ok")})
            .catch(err => console.log(err.message))


        AddReactions
            .init(discordClient)
            .then(OK => {console.log("AddReactions Ok")})
            .catch(err => console.log(err.message))

        EditedMessageLog
            .init(discordClient, Discord)
            .then(OK => {console.log("EditedMessageLog Ok")})
            .catch(err => console.log(err.message))

        DeletedMessageLog
            .init(discordClient, Discord)
            .then(OK => {console.log("DeletedMessageLog Ok")})
            .catch(err => console.log(err.message))

        SaidaLog
            .init(discordClient, Discord)
            .then(OK => {console.log("SaidaLog Ok")})
            .catch(err => console.log(err.message))

    });
}
main().then()


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});



// Initializing the project
require("./src/handler")(discordClient);

