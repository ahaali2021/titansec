const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "noob",
    run : async(bot, message) => {
        const oskol = Math.floor(Math.random() * 100) + 1;

        const embed = new MessageEmbed()
            .setTitle(`Darsad noob Bodan Shoma: ${oskol}%`)
            .setColor("#161515")
            .setFooter(message.author.username)
            .setTimestamp();

        message.channel.send(embed);
    }
};