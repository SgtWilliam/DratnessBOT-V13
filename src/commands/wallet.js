const WarRidersGetWallet = require('../Repository/WarRidersGetWallet');
const Discord = require("discord.js");
const {MessageActionRow, MessageButton} = require("discord.js");


module.exports.run = async (discordClient, message, args) => {

    const ReceivedMessage = args.join('');

    const embed = new Discord.MessageEmbed()
        .setColor("#521570")
        .setTimestamp(new Date())
        .setTitle(`O commando -wallet foi atualisado!`)
        .setDescription(`Use /wallet ${ReceivedMessage}`)



        await message.reply({embeds: [embed]})


};

//message.react(`<:thumbsup:958437352575991819>`)