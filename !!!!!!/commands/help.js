const Discord = require("discord.js")
module.exports = {
    name: 'help',
    aliases: ['aide'],
    /**
     * 
     * @param {Discord.Client} Client 
     * @param {Discord.Message} message 
     * @param {String[]} args 
     */
    run: async (Client, message, args) => {

        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.username)
            .setDescription("La commande `Help` n'a pas encore été configurée, repassez plus tard")
            .setFooter("by dams#1000")
        
            const menu = new Discord.MessageActionRow()
        menu.addComponents(
            new Discord.MessageSelectMenu()
                .setCustomId("menuHelp")
                .setPlaceholder("Clique Ici")
                .addOptions([
                    {
                        label: 'Coins',
                        value: 'Coins',
                        emoji: "💰"
                    },
                    {
                        label: 'Fun',
                        value: 'Fun',
                        emoji: "🪐"
                    },
                    {
                        label: 'Modération',
                        value: 'Modération',
                        emoji: "🛠"
                    },
                    {
                        label: 'Utilitaire',
                        value: 'Utilitaire',
                        emoji: "💫"
                    },
                
                ])

        )

    message.channel.send({embeds : [embed], components: [menu]})
    }
}