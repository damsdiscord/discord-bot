const Discord = require("discord.js")

module.exports = {
    name: 'ban',
    aliases: [],
    /**
     * 
     * @param {Discord.Client} Client 
     * @param {Discord.Message} message 
     * @param {String[]} args 
     */
    run: async (Client, message, args) => {
    
        if (message.member.permissions.has("BAN_MEMBERS")) {
            if(!message.guild.me.permissions.has('BAN_MEMBERS')){ return message.channel.send("Je n'ai pas les permissions");
            }
              const Member = message.mentions.members.first();
              if(!Member) return message.channel.send("Mentionner quelqu'un");
              if(Member.id == message.author.id){
                return message.channel.send("Vous ne pouvez pas vous bannir vous même");
              }
              if(Member.id == Client.user.tag){
                return message.channel.send("Je ne peux pas me bannir")
              }
              if(Member.id === Client.user.id) return message.reply("Je ne peux pas me bannir")
              
             var args2 = args.slice(1).join(" ");
              if(!args2)
              {
                var args2 = "Aucune raison";
              }
              
              await Member.ban({ reason : `${args2}`})
              const embed = new Discord.MessageEmbed()
              .setTitle('BAN')
              .setColor("RANDOM")
              .setThumbnail('https://cdn.discordapp.com/attachments/796744218893746176/816713126245957693/kick.gif')
              .setDescription(`${Member.user.tag} a été banni du serveur`)
              .setTimestamp()
      
      
              message.channel.send({embeds : [embed]})
          }
      }
      }
      
      
    
    
    
