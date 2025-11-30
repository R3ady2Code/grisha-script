import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import {getAllImages} from './db.js';

dotenv.config();

const token = process.env.TELEGRAM_ADMIN_BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});

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
    const images = await getAllImages();

    if (images.length === 0) {
      await bot.sendMessage(msg.chat.id,
          'В базе данных нет изображений для рассылки.', mainKeyboard);
      return;
    }

    await bot.sendMessage(msg.chat.id,
        `Начинаю рассылку ${images.length} изображений...`, mainKeyboard);

    // TODO: Добавить рассылку

    await bot.sendMessage(msg.chat.id, `Рассылка завершена!`, mainKeyboard);
  } catch (error) {
    console.error('Error during broadcast:', error);
    bot.sendMessage(msg.chat.id, 'Ошибка при выполнении рассылки.',
        mainKeyboard);
  }
});

console.log('Telegram Admin bot started...');
