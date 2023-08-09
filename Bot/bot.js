const { Telegraf } = require('telegraf');
const TOKEN = '6622577022:AAGmlXyCMYejqjfJMBmcID5VM8qkrTe2eWs';
const bot = new Telegraf(TOKEN);
const web_link = "https://clinquant-kringle-89b503.netlify.app/"
bot.start((ctx) => ctx.reply('Привет, любишь вкусно покушать? Тогда ты нарвался на правильного бота!', 
{reply_markup:{keyboard:[[{text:'Зайти в магазин', web_app: {url: web_link}}]]}}));
bot.launch();