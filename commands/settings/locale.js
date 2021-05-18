const fs = require("fs");

const locales = fs
  .readdirSync("./locales/")
  .filter((f) => f.endsWith(".js"))
  .map((la) => la.slice(0, -3));

module.exports = {
  name: "locale",
  category: "settings",
  cooldown: 5,
  aliases: ["language", "lang"],
  memberPermissions: ["MANAGE_GUILD"],
  async execute(bot, message, args) {
    const lang = await bot.getGuildLang(message.guild.id);
    const locale = args[0];

    if (!locale) {
      return message.channel.send(
        `${lang.LANG.LIST} ${locales
        .map((l) => `\`${l}\``)
        .join(", ")}`);
    }
    if(!locales.includes(locale)) {
      return message.channel.send(
        `${lang.LANG.NOT_AVAILABLE} ${locales
        .map((l) => `\`${l}\``)
        .join(", ")}`);
    }
    
  bot.updateGuildById(message.guild.id, { "locale": locale });
  message.channel.send(lang.LANG.UPDATED
    .replace("{language}", locale));
  }
}