const discordClient = require("../../index");

discordClient.on("ready", () =>
    console.log(`${discordClient.user.tag} is up and ready to go!`)
);
