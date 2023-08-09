const { Telegraf } = require('telegraf');
const TOKEN = '6622577022:AAGmlXyCMYejqjfJMBmcID5VM8qkrTe2eWs';
const bot = new Telegraf(TOKEN);
const web_link = "https://storied-smakager-248798.netlify.app"
bot.start((ctx) => ctx.reply('Привет, любишь хорошо отдохнуть? Тогда ты нарвался на правильного бота! Заходи скорее!', 
{reply_markup:{keyboard:[[{text:'Зайти в магазин', web_app: {url: web_link}}]]}}));
bot.launch();