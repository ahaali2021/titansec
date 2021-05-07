const { MessageEmbed} = require('discord.js')


module.exports ={
    name : "invite",
    description: "با اینوایت کردن با در اخل سرورتون از ما حمایت کنید",
    run : async(client , message) =>{
        const embed = new MessageEmbed()
        .setTitle('Link Invite Add Kardan Bot')
        .setDescription('Link Invite : https://discord.com/api/oauth2/authorize?client_id=836580294102351903&permissions=8&scope=bot')
        .setColor('#00050e')
        .setFooter(`Bot Developed By <@751112294217285682>`)
        .setThumbnail('https://media.discordapp.net/attachments/802442906848722954/824721227665899590/Nexo_Music_Logo.png')
        .setTimestamp()
        message.channel.send(embed)
    }
}