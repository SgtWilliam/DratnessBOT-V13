const Discord = require("discord.js");


const SaidaLog = {

    async init(discordClient, Discord) {


        discordClient.on('guildMemberRemove', async (member) => {

            let canaladeus = "966744142321426442"

            if (canaladeus === null || canaladeus === false) return;

            let embed = new Discord.MessageEmbed()
                .setAuthor({ name: member.user.tag, iconURL: member.user.displayAvatarURL({ dynamic: true }) })
                .setDescription(`O membro ${member.user} saiu do servidor.`)
                .setColor('00001');

            member.guild.channels.cache.get(canaladeus).send({ embeds: [embed] })

        })

    }

}

module.exports = SaidaLog