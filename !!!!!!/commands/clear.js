const Discord = require("discord.js")

module.exports = {
    name: 'clear',
    aliases: [],
    /**
     * 
     * @param {Discord.Client} Client 
     * @param {Discord.Message} message 
     * @param {String[]} args 
     */
    run: async (Client, message, args) => {
    
    if(!args[0])return
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("Tu dois avoir la permission `MANAGE_MESSAGES`");
    message.channel.bulkDelete(args[0])
    message.channel.send(args[0] + " messages ont été supprimés")
    }
}