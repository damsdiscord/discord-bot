const Discord = require("discord.js")

module.exports = {
    name: 'serveurlock',
    aliases: ['slock'],
    /**
     * 
     * @param {Discord.Client} Client 
     * @param {Discord.Message} message 
     * @param {String[]} args 
     */
    run: async (Client, message, args) => {
        let embed = (`embed_${message.guild.id}`);
    
        if (!message.member.permissions.has("MANAGE_GUILD"))
        {
          message.channel.send(
            "Vous devez avoir la permission `MANAGE GUILD`"
          )
          return;
          }
        let content = args[0];
      
        if(!prefix)
        {
          var prefix = "-";
        }
          if(!content)
        {
          message.channel.send(`Saisissez une option (texte = channel textuel, vc = salons vocaux) e.g - ${prefix}serverlock text/vc/all/hide`);
          return;
        }
        if (content.toLowerCase() === "text") 
        {
          message.guild.channels.cache.forEach(ch => 
    {
    if(ch.type == "text")
     ch.overwritePermissions([
      {
         id: message.guild.roles.everyone.id,
         deny: ['SEND_MESSAGES'],
      },
    ], `${message.member.id} fermeture du serveur`);
    }) 
    message.channel.send(`J'ai fermé tout les salons présents`)
    }
    if (content.toLowerCase() === "vc") 
        {
            message.guild.channels.cache.forEach(ch => 
    {
    if(ch.type == "voice")
     ch.overwritePermissions([
      {
         id: message.guild.roles.everyone.id,
         deny: ['CONNECT'],
      },
    ], `${message.member.id} fermeture du serveur`);
    }) 
    message.channel.send(`J'ai fermé tout les salons présents`)
        }
         if (content.toLowerCase() === "all") 
        {
            message.guild.channels.cache.forEach(ch => 
    {
     ch.overwritePermissions([
      {
         id: message.guild.roles.everyone.id,
         deny: ['CONNECT', 'SEND_MESSAGES'],
      },
    ], `${message.member.id} fermeture du serveur`);
    }) 
    message.channel.send(`J'ai fermé tout les salons présents`)
        }
           if (content.toLowerCase() === "hide") 
        {
            message.guild.channels.cache.forEach(ch => 
    {
     ch.overwritePermissions([
      {
         id: message.guild.roles.everyone.id,
         deny: ['VIEW_CHANNEL'],
      },
    ], `${message.member.id} Told to lock the server`);
    }) 
    message.channel.send(`J'ai caché tout les salons présents sur le serveur`)
        }
    
    }
    }
    module.exports.help = {
        name: "serverlock",
        description: "Ferme les salons présents sur le serveur",
        usage: "serverlock text/vc/all/hide",
        type: "Modération"   
    }

 



