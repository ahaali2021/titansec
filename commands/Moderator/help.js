const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "help",
    description: "با جوین در داخل سرور دیسکورد از اخرین اطلاعات بات با خبر بشید",
    run : async(client , message) =>{
        const embed = new MessageEmbed()
        .addFields(
                             
            {
              "name": "Help Mod <a:812127523177234522:840212950672343061> ",
              "value": "`d!helpmod`",
              "inline": true
            },
            {
             "name": "Help Fun <a:812127523177234522:840212950672343061> ",
             "value": "`d!helpfun`",
             "inline": true
           },

           {
             
             "name": "Help Info <a:812127523177234522:840212950672343061> ",
             "value": "`d!helpinfo`",
             "inline": true
           },
           
                                          {
             "name": "Help Game <a:812127523177234522:840212950672343061> ",
             "value": "`d!helpgame`",
             "inline": true
           },
                         
           {
            "name": "Sanjesh Gah <a:812127523177234522:840212950672343061> ",
            "value": "`d!sanjeshgah`",
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