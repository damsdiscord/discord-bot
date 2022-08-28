const Discord = require("discord.js")

module.exports = {
    name: 'serveurunlock',
    aliases: ['sunlock'],
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
            "Tu dois avoir la permission `MANAGE GUILD`"
            
          );
    return;
    }
        let content = args[0];
      
        var prefix =  (`guildprefix_${message.guild.id}`);
        if(!prefix)
        {
          var prefix = "";
        }
          if(!content)
        {
          message.channel.send(`Saisissez une option -serverunlock text/vc/all`);
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
         allow: ['SEND_MESSAGES'],
      },
    ], `${message.member.id} fermeture du serveur`);
    }) 
    message.channel.send(`Tout les salons sont maintenant accessibles`)
    }
    if (content.toLowerCase() === "vc") 
        {
            message.guild.channels.cache.forEach(ch => 
    {
    if(ch.type == "voice")
     ch.overwritePermissions([
      {
         id: message.guild.roles.everyone.id,
         allow: ['CONNECT'],
      },
    ], `${message.member.id} fermeture du serveur`);
    }) 
    message.channel.send(`Tout les salons sont maintenant visibles`)
        }
        if (content.toLowerCase() === "all") 
        {
            message.guild.channels.cache.forEach(ch => 
    {
     ch.overwritePermissions([
      {
         id: message.guild.roles.everyone.id,
         allow: ['CONNECT', 'SEND_MESSAGES'],
      },
    ], `${message.member.id} fermeture du serveur`);
    }) 
    message.channel.send(`Tout les salons sont maintenant accessibles`)
        }
          if (content.toLowerCase() === "unhide") 
        {
            message.guild.channels.cache.forEach(ch => 
    {
     ch.overwritePermissions([
      {
         id: message.guild.roles.everyone.id,
         allow: ['VIEW_CHANNEL'],
      },
    ], `${message.member.id} fermeture du serveur`);
    }) 
    message.channel.send(`Tout les salons sont maintenant visibles`)
        }
    }
    }
    module.exports.help = {
        name: "serverunlock",
        description: "Réouvre tout les salons du serveur",
        usage: "serverunlock text/vc/all/unhide",
        type: "Modération"   
    }
    
    
    
    
