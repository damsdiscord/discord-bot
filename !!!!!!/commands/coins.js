const Discord = require("discord.js")
const fs = require("fs") 
const coins = require("../database/money.json")
function savecoins() {
    fs.writeFile("./database/money.json", JSON.stringify(coins, null, 4),(err) => {
        if(err) console.log(`Erreur de sauvegarde du money.json. Erreur : ${err}`.bgRed)
    })
}
module.exports ={
    name : 'coins',
    aliases : ["money"],
    /**
     * 
     * @param {Discord.Client} Client 
     * @param {Discord.Message} message 
     * @param {String[]} args 
     */
    run : async(Client, message, args)=>{
        let user = message.author.id
        if (!coins["coins"][user]){
            coins["coins"][user] = 500
            savecoins()
            return message.reply(`Votre compte MercureBank a été crée ! Solde \`${coins["coins"][user]}\`💰`)
        } else {
            return message.reply(`Vous avez \`${coins["coins"][user]}\` 💰 sur votre compte MercureBank !`)
        }
        }
    }