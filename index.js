const GOTLER = [
    "obama", "Obama", "Beiden", "beiden", "Hillary", "hillary", "Clinton", "clinton", "Amerika", "amerika", "usa", "USA"
];

const BOMBALAR = [
    "Nizami", "nizami", "Putin", "putin", "Ilham", "ilham", "Trump", "trump"
];

const POLL = [
    "ses", "Ses"
];
const http = require('http');
var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
http.createServer( function (request, response) {

})
    .listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});


const {Telegraf} = require('telegraf');
const bot = new Telegraf('1525462758:AAEbM86corKfiCiQQvp5ZaGv95NMTZFW1MY');
bot.start(ctx => {
    let result = ctx.botInfo.first_name + ": Ya Allah! Getdiy " + ctx.message.from.first_name;
    ctx.reply(result);
});

bot.on("text", ctx => {
    const words = ctx.message.text.split(" ");
    let result = null;
    words.forEach(word => {
        if (GOTLER.indexOf(word) > -1) {
            const detectedWord = GOTLER[GOTLER.indexOf(word)];
            result = detectedWord + " gotverendi";
        } else if (BOMBALAR.indexOf(word) > -1) {
            const detectedWord = BOMBALAR[BOMBALAR.indexOf(word)];
            result = detectedWord + " bomba oglandi";
        } else if (POLL.indexOf(word) > -1) {
            const detectedWord = POLL[POLL.indexOf(word)];
            result = "ses verirem: Telegram";
        }
    })
    if (result) {
        ctx.reply(result);
    }

});
// bot.stop( ctx => {
//     console.log("stop context: ", ctx);
//     ctx.reply(ctx.botInfo.first_name, ": Ozun sikdir");
// });
bot.startPolling();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

// bot.hears("beiden", (ctx) => {
//     ctx.reply("beiden is an asshole");
// });
// bot.launch();