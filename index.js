const {Telegraf} = require('telegraf');
const bot = new Telegraf('1525462758:AAEbM86corKfiCiQQvp5ZaGv95NMTZFW1MY');
bot.hears("beiden", (ctx) => {
    ctx.reply("beiden is an asshole");
});
bot.launch();