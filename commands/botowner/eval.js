module.exports = {
  name: "eval",
  description: "",
  category: "botowner",
  ownerOnly: true,
  aliases: ["e"],
  botPermissions: ["EMBED_LINKS"],
  async execute(bot, message, args) {
    const lang = await bot.getGuildLang(message.guild.id);
    const toEval = args.join(" ");
    try {
      let evaled = await eval(toEval);
      const eevaled = typeof evaled;
      evaled = require("util").inspect(evaled, {
        depth: 0,
        maxArrayLength: null,
      });
      const type = eevaled[0].toUpperCase() + eevaled.slice(1);

      const embed = bot.buildEmbed(message)
        .setDescription(`\`\`\`js\n${evaled}\`\`\``);

      message.channel.send(embed);
    } catch (error) {
      const errorEmbed = bot.buildEmbed(message)
        .setTitle(lang.GLOBAL.ERROR)
        .setDescription(`\`\`\`rb\n${error}\`\`\``);

      message.channel.send(errorEmbed);
    }
  },
};
