const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "helpmod",
    description: "با جوین در داخل سرور دیسکورد از اخرین اطلاعات بات با خبر بشید",
    run : async(client , message) =>{
        const embed = new MessageEmbed()
        .addFields(
                             
            {
              "name": "<a:2_:840111324810051624>addrole",
              "value": "`d!addrole name role`",
              "inline": true
            },
            {
             "name": "<a:2_:840111324810051624>Removerole",
             "value": "`d!removerole @role `",
             "inline": true
           },

           {
             
             "name": "<a:2_:840111324810051624>voicemute",
             "value": "`d!voicemute`",
             "inline": true
           },
           
                                          {
             "name": "<a:2_:840111324810051624>voiceunmute",
             "value": "`d!voiceunmute`",
             "inline": true
           },
                         
           {
            "name": "<a:2_:840111324810051624>say",
            "value": "`d!say Message`",
            "inline": true
          },
           
          {
            "name": "<a:2_:840111324810051624>say-embed",
            "value": "`d!say-embed Message`",
            "inline": true
          },
           
          {
            "name": "<a:2_:840111324810051624>Add Role Member",
            "value": "`d!addrole @member  @role`",
            "inline": true
          },
                          
          {
            "name": "<a:2_:840111324810051624>Remove Role Member",
            "value": "`d!removerole @member  @role`",
            "inline": true
          },                                          
                            
          {
            "name": "<a:2_:840111324810051624>Lock Channel",
            "value": "`d!lock`",
            "inline": true
          },
                     
          {
            "name": "<a:2_:840111324810051624>UnLock Channel",
            "value": "`d!unlock`",
            "inline": true
          },
                     
          {
            "name": "<a:2_:840111324810051624>Voice Mute",
            "value": "`d!voicemute @member`",
            "inline": true
          },
                     
          {
            "name": "<a:2_:840111324810051624>voiceunmute",
            "value": "`d!voiceunmute @member`",
            "inline": true
          },
                               
          {
            "name": "<a:2_:840111324810051624>Create Channel",
            "value": "`d!createchannel name channel`",
            "inline": true
          },
                     
          {
            "name": "<a:2_:840111324810051624>Delete Channel",
            "value": "`d!delchannel #channel`",
            "inline": true
          },
                     
          {
            "name": "<a:2_:840111324810051624>Role Create",
            "value": "`d!createrole reson rolename`",
            "inline": true
          },
                     
          {
            "name": "<a:2_:840111324810051624>dm",
            "value": "`d!dm @member message`",
            "inline": true
          },
                     
          {
            "name": "<a:2_:840111324810051624>Clear",
            "value": "`d!clear 1>100`",
            "inline": true
          },
                     
          {
            "name": "<a:2_:840111324810051624>show-bans",
            "value": "`d!show-bans`",
            "inline": true
          },

          
           )
        .setTitle('Mod Commands')
        .setDescription(`By ${message.author.username}`)
        .setColor('#fafafa')
        .setTimestamp()
        message.channel.send(embed)
    }
}