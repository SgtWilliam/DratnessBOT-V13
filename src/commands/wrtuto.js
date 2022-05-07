const Discord = require("discord.js");
const {text} = require("express");

module.exports.run = async (client, message, args) => {
    {
        let GetMessageAuthor = message.author;

        let CreateMessageEmbed = new Discord.MessageEmbed()
            .setAuthor({name: `Tutoriais`})
            .setTitle(`Veja os videos`)
            .setDescription("Cliquei no botão video para ser redirecionado")
            .setColor("#005ce6")
            .setTimestamp()
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .addFields(
                {
                    name: "War Riders (nome e posição para scout P1)",
                    value: `[Video](https://www.youtube.com/watch?v=55M2gBHfQkc})`,
                    inline: false
                },
                {
                    name: "ROTA SAFE saída e Chegada (GARAGEM CENTRAL)",
                    value: `[Video](https://www.youtube.com/watch?v=y8Aa0YX7Ia8})`,
                    inline: false
                },
                {
                    name: "Guincho",
                    value: `[Video](https://www.youtube.com/watch?v=w8GZOXFdB8o})`,
                    inline: false
                },
                {
                    name: "DICA WAR RIDERS",
                    value: `[Video](https://www.youtube.com/watch?v=pKXjBeO-mIg})`,
                    inline: false
                },
                {
                    name: "Vejorino (RADIO/DESERTO/STATION)",
                    value: `[Video](https://www.youtube.com/watch?v=79ETvI_08As})`,
                    inline: false

                },
                {
                    name: "Distancia/Dano ( War Riders)",
                    value: `[Video](https://www.youtube.com/watch?v=DMC-_VGqKTA&feature=youtu.be})`,
                    inline: false
                },
                {
                    name: "Uso CORRETO do rocket",
                    value: `[Video](https://www.youtube.com/watch?v=r20qq0XCVI8&feature=youtu.be})`,
                    inline: false
                },
                {
                    name: "DICA WAR RIDERS (armas)",
                    value: `[Video](https://www.youtube.com/watch?v=pKXjBeO-mIg})`,
                    inline: false
                },
                {
                    name: "Cronômetro para o bomb!",
                    value: `[Video](https://www.youtube.com/watch?v=DI8Be6whjiI})`,
                    inline: false
                },
            );

        message.reply({embeds: [CreateMessageEmbed]})

    }

}
