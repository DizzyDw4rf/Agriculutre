const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjgxMjE0MjI2NzE4Nzg1NTU3.XlOw1w.vwvA1yxbblwwIQgNvIP57RgisuU';
const PREFIX = '!'
bot.on('ready', () =>{
    console.log('I am online')
})






bot.login( token);