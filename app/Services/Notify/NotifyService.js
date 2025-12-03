import bot from '../../Bots/Admin/bot.js';

class NotifyService {
  constructor() {
    this.chatId = null;
  }

  setChatId(chatId) {
    this.chatId = chatId;
  }

  async send(message) {
    console.log(message);
    if (this.chatId) {
      await bot.sendMessage(this.chatId, message);
    }
  }
}

const notifyService = new NotifyService();

export default notifyService;
