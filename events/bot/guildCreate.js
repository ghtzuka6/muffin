module.exports = {
  name: "guildCreate",
  type: "bot",
  async execute(bot, guild) {
    await bot.addGuild(guild.id);

    // if(guild.members.cache.size < 5) {
    //  return guild.leave();
    // };
  },
};
