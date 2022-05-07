const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");
const Prefix = "-"
const globPromise = promisify(glob);

/**
 * @param {Client} client
 */
module.exports = async (client) => {
    // Commands
    client.on('message', message => {
        if (message.author.bot) return;
        if (message.channel.type == 'dm') return;
        if (!message.content.toLowerCase().startsWith(Prefix.toLowerCase())) return;
        if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

        const args = message.content
            .trim().slice(Prefix.length)
            .split(/ +/g);
        const command = args.shift().toLowerCase();

        try {
            const commandFile = require(`../commands/${command}.js`)
            commandFile.run(client, message, args);
        } catch (err) {
            console.error('Erro:' + err);
        }
    });

    // Events
    const eventFiles = await globPromise(`${process.cwd()}/src/events/*.js`);
    eventFiles.map((value) => require(value));

    // Slash Commands
    const slashCommands = await globPromise(
        `${process.cwd()}/src/SlashCommands/*/*.js`
    );

    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        client.slashCommands.set(file.name, file);

        if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
        arrayOfSlashCommands.push(file);
    });
    client.on("ready", async () => {
        // Register for a single guild
        await client.guilds.cache.get("926436270996066305").commands.set(arrayOfSlashCommands);

        // Register for all the guilds the bot is in
        // await client.application.commands.set(arrayOfSlashCommands);
    });
};
