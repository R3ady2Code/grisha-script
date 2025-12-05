import bot from './bot.js';
import makeMailing from '../../Actions/Forums/MakeMailing.js';
import {getAllUrls} from '../../../db.js';

const mainKeyboard = {
  reply_markup: {
    keyboard: [
      [{text: 'Запустить рассылку'}],
      [{text: 'Показать все ссылки на изображения'}],
    ],
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

bot.onText(/Показать все ссылки на изображения/, async (msg) => {
  try {
    const urls = await getAllUrls();
    if (urls.length === 0) {
      await bot.sendMessage(msg.chat.id, 'Нет сохранённых ссылок.', mainKeyboard);
      return;
    }
    const message = urls.join('\n');
    await bot.sendMessage(msg.chat.id, message, mainKeyboard);
  } catch (error) {
    console.error('Error fetching URLs:', error);
    await bot.sendMessage(msg.chat.id, 'Ошибка при получении ссылок.',
        mainKeyboard);
  }
});

console.log('Telegram Admin bot started...');

export default bot;
