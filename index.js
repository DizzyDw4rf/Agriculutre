const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "NjgxMjE0MjI2NzE4Nzg1NTU3.XlLMOg.Ak8B7pwVzK_MsmCwJnwlT53W-X0";
const PREFIX  = '!';
bot.on('ready', () => {
    console.log("i am online");
})

bot.on('message', msg=>{
    if(msg.content === "HELLO"){
        msg.reply('HELLO');
    }
})
bot.login(token);