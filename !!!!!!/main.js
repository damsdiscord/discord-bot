const Discord = require("discord.js")
const config = require("./config/config.json")
const Prefix = config.prefix
const Client = new Discord.Client({intents : (32767)});
require("colors")
const fs = require("fs")

// Commande Handler = Une Commande par Ficher !
Client.commands = new Discord.Collection();
Client.aliases = new Discord.Collection()
const commandsFiles = fs.readdirSync('./commands/').filter(f => f.endsWith('.js'))
for (const file of commandsFiles) {
    const command = require(`./commands/${file}`)
    Client.commands.set(command.name, command)
    if(command.aliases?.length)for(const alias of command.aliases){
        Client.aliases.set(alias,command.name)
    }
    console.log(`>> Loaded ${command.name}! `.bgBlue)
    
};
Client.on("message", message => {
    if (message.author.bot || !message.guild || !message.content.startsWith(Prefix)) return;
    const args = message.content.slice(Prefix.length).trim().split(/ +/)
    const command = args.shift().toLowerCase();
    if (Client.commands.has(command)) Client.commands.get(command).run(Client, message, args);
    if (Client.aliases.has(command)) Client.commands.get(Client.aliases.get(command)).run(Client, message, args);
})
// Login
Client.on("ready", () => {
    console.log(`🪐 ・ Connecté en tant que ${Client.user.tag}`.bgMagenta)
})
Client.login(config.token)