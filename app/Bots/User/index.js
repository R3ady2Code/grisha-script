import bot from './bot.js';
import {saveImage} from '../../../db.js';

const URL_REGEX = /https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp|bmp|svg)(\?[^\s]*)?/gi;

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id,
      'Привет! Отправь мне ссылку на изображение (одну ссылку в сообщении).');
});

bot.on('message', async (msg) => {
  if (msg.text && !msg.text.startsWith('/')) {
    const match = msg.text.match(URL_REGEX);

    if (!match) {
      await bot.sendMessage(msg.chat.id,
          'Ссылка не найдена. Отправь ссылку на изображение (jpg|jpeg|png|gif|webp|bmp|svg)');
      return;
    }

    try {
      await saveImage(match[0]);
      await bot.sendMessage(msg.chat.id, 'Сохранено!');
    } catch (error) {
      console.error('Error saving image:', error);
      await bot.sendMessage(msg.chat.id, 'Ошибка при сохранении.');
    }
  }
});

export default bot;
