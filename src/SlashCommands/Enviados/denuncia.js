const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name: "denuncia",
    author: "Sgt_William#0001",
    description: "[📌 info] faça uma denuncia",
    type: 'CHAT_INPUT',
    options: [
        {
            name: "acusado",
            description: "Digite quem você quer dunciar aqui!",
            type: 3,
            required: true
        },
        {
            name: "motivo",
            description: "Digite o motivo da denuncia aqui!",
            type: 3,
            required: true
        },
    ],
    run: async (client, interaction, args) => {


        let canal = "960633893545996368";
        if (canal === false || canal === null) {
            interaction.reply({ content: `Não foi possível enviar sua denuncia, pois o canal de texto de denuncia não está configurado.` })
        } else {
            let Motivo = interaction.options.getString("motivo");
            let Acusado = interaction.options.getString("acusado(s)")
            let channel = interaction.guild.channels.cache.get(canal);
            let embed = new Discord.MessageEmbed()
                .setColor("#521570")
                .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                .setTimestamp(new Date())
                .setTitle(`Nova Denuncia!`)
                .addFields(
                    {
                        name: `\\👤 Autor:`,
                        value: `${interaction.user}`,
                        inline: false
                    },
                    {
                        name: `\\⚠ Acusado(s):`,
                        value: `${Acusado}`,
                        inline: false
                    },
                    {
                        name: `\\💬 Motivo da denuncia:`,
                        value: `${Motivo}`,
                         inline: false
                    });

            let embed_send_to_user = new Discord.MessageEmbed()
                .setColor("#521570")
                .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                .setTimestamp(new Date())
                .setTitle(`Sua denuncia foi envia com sucesso`)
                .addFields(
                    {
                        name: `Denuncia enviada:`,
                        value: `Sua denuncia foi envida para um chat seguro!`,
                        inline: false
                    }


        );


            channel.send({ embeds: [embed] }).then( () => {
                interaction.reply({embeds: [embed_send_to_user], ephemeral: true})
            }).catch(e => {
                interaction.user.send(`\\❌ Algo deu errado.`)
            })
        }
    }
}