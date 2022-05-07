const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
const Discord = require('discord.js')
const WarRidersGetWallet = require('../../Repository/WarRidersGetWallet')


module.exports = {
    name: "wallet",
    author: "Sgt_William#0001",
    description: "[📌 info] Veja a wallet de um jogador do WarRiders",
    type: 'CHAT_INPUT',
    options: [
        {
            name: "wallet",
            description: "Especifique o usuario!",
            type: 3,
            required: true
        },
    ],
    run: async (client, interaction, args) => {

        const ReceivedMessage = args.join('');


        async function SendMessage(GetWallet, discordClient, userSolicited) {

            let GetAuthorMessageSend = interaction.author;
            let CreatEmbedMessage = new Discord.MessageEmbed()
                .setAuthor({ name: `Wallet do usuario solicitado!`})
                .setTitle(`Wallet:`)
                .setDescription(GetWallet)
                .setFooter({text:`👀`})
                .setColor("#005ce6")
                .setTimestamp()


            const btnOpensea = new MessageActionRow().addComponents(
                new MessageButton()
                    .setURL(`https://opensea.io/${GetWallet}`)
                    .setLabel("OpenSea")
                    .setStyle("LINK"),

                new MessageButton()
                    .setURL(`https://etherscan.io/address/${GetWallet}`)
                    .setLabel("Ethscan")
                    .setStyle("LINK")
            )


            await interaction.reply({embeds: [CreatEmbedMessage], components: [btnOpensea], ephemeral: false})
            //await interaction.channel.send({embeds: [CreatEmbedMessage]});
        }

        WarRidersGetWallet
            .GetWallet(ReceivedMessage)
            .then(SendMessage)
            .catch(reason => interaction.reply({content: "Não encontrei esse usuario meu chapa!"}))
    }
}
