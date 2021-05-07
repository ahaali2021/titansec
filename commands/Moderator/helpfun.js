const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "helpfun",
    description: "با جوین در داخل سرور دیسکورد از اخرین اطلاعات بات با خبر بشید",
    run : async(client , message) =>{
        const embed = new MessageEmbed()
        .addFields(
                             
            {
              "name": "Avatar",
              "value": "`d!addrole name role`",
              "inline": true
            },
            {
             "name": "emoji-list",
             "value": "`d!emoji-list`",
             "inline": true
           },

           {
             
             "name": "Emoji Text",
             "value": "`d!emojitxt`",
             "inline": true
           },
           
                                          {
             "name": "Ping",
             "value": "`d!ping`",
             "inline": true
           },
                         
           {
            "name": "Mashin Hesab",
            "value": "`d!riyazi 2+2`",
            "inline": true
          },
           
          {
            "name": "User Role",
            "value": "`d!userrole @member`",
            "inline": true
          },

          
           )
        .setTitle('Fun Commands')
        .setDescription(`By ${message.author.username}`)
        .setColor('#fafafa')
        .setTimestamp()
        message.channel.send(embed)
    }
}