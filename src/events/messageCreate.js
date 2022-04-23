const discordClient = require("../../index");

discordClient.on("messageCreate", async (message) => {
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(discordClient.config.prefix)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(discordClient.config.prefix.length)
        .trim()
        .split(/ +/g);

    const command = discordClient.commands.get(cmd.toLowerCase()) || discordClient.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    await command.run(discordClient, message, args);
});
