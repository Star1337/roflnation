const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ game: { name: `Type: RN!help`, type: 0 } }).catch();
});


client.on('message', msg => {
  if (msg.content === 'пидор') {
    msg.reply('***Сам такой!*** :wink:');
  }
    if (msg.content === 'RN!donate') {
      msg.reply('Воу! Ты решил задонитить нам? Ну тогда вот тебе ссылка! :wink: https://qiwi.me/s-k ');
    }
    
    if (msg.content === 'RN!data') {
      msg.reply('Сегодня 26.02.2018');
    }
    if (msg.content === 'RN!help') {
      msg.reply('***Проверь свои личные сообщения!*** :wink: ');
    }
    if (msg.content === 'test') {
      msg.reply('Working!');
    }
    if (msg.content === 'Пидор') {
      msg.reply('***Сам такой!*** :wink:');
    }
    if (msg.content === 'шлюха') {
      msg.reply('***Сам такой!*** :wink:');
    }
    if (msg.content === 'Шлюха') {
      msg.reply('***Сам такой!*** :wink:');
    }
    if (msg.content === 'соси') {
      msg.reply('***Ты соси!*** :wink:');
    }
    if (msg.content === 'Соси') {
      msg.reply('***Ты соси!*** :wink:');
    }
});

client.login(process.env.TOKEN);
