import bot from './bot.js';
import makeMailing from '../../Actions/Forums/MakeMailing.js';

const mainKeyboard = {
  reply_markup: {
    keyboard: [[{text: 'Запустить рассылку'}]],
    resize_keyboard: true,
  },
};

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Админ-панель. Выберите действие:',
      mainKeyboard);
});

bot.onText(/Запустить рассылку/, async (msg) => {
  try {
    await bot.sendMessage(msg.chat.id, 'Начинаю рассылку...', mainKeyboard);

    await makeMailing(msg.chat.id);

    await bot.sendMessage(msg.chat.id, 'Рассылка завершена!', mainKeyboard);
  } catch (error) {
    console.error('Error during broadcast:', error);
    await bot.sendMessage(msg.chat.id, 'Ошибка при выполнении рассылки.',
        mainKeyboard);
  }
});

console.log('Telegram Admin bot started...');

export default bot;
