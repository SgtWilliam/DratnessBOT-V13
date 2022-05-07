const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name: "sugestão",
    author: "Sgt_William#0001",
    description: "[📌 info] faça uma sugestão para ratness",
    type: 'CHAT_INPUT',
    options: [
        {
            name: "sugestao",
            description: "Digite sua sugestão aqui!",
            type: 3,
            required: true
        },
    ],
    run: async (client, interaction, args) => {


        let canal = "960633424593432596";
        if (canal === false || canal === null) {
            interaction.reply({ content: `Não foi possível enviar sua sugestão, pois o canal de texto de sugestões não está configurado.` })
        } else {
            let sugestao = interaction.options.getString("sugestao");
            let channel = interaction.guild.channels.cache.get(canal);
            let embed = new Discord.MessageEmbed()
                .setColor("#521570")
                .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                .setTimestamp(new Date())
                .setTitle(`Nova sugestão!`)
                .addFields(
                    {
                        name: `\\👤 Autor:`,
                        value: `${interaction.user}`,
                        inline: false
                    },
                    {
                        name: `\\💬 Sugestão:`,
                        value: `${sugestao}`,
                        inline: false
                    }
                );


            let embed_send_to_user = new Discord.MessageEmbed()
                .setColor("#521570")
                .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                .setTimestamp(new Date())
                .setTitle(`Sua sugestão foi envia com sucesso`)
                .addFields(
                    {
                        name: `Sugestão enviada:`,
                        value: `Sua Sugestão foi envida para nossa equipe!`,
                        inline: false
                    })


            channel.send({ embeds: [embed] }).then( () => {
                interaction.reply({embeds: [embed_send_to_user], ephemeral: true})
                interaction.react(interaction.guild.emojis.cache.find(e => e.name == "white_check_mark")).catch(console.err);
            }).catch(e => {
                interaction.reply(`\\❌ Algo deu errado.`)
            })
        }
    }
}