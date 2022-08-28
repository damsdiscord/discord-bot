const Discord = require("discord.js")

module.exports = {
    name: 'say',
    aliases: [],
    /**
     * 
     * @param {Discord.Client} Client 
     * @param {Discord.Message} message 
     * @param {String[]} args 
     */
    run: async (Client, message, args) => {
        let say = args.slice(0).join(" ")
        if (!say) return message.reply("Commande invalide")
        message.channel.send(say)
        console.log(`${message.author.username} a utilisé la commande say ! (${say})`.bgYellow)
    }
}
