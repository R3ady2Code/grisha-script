import ChromeAdapter from '../../Adapters/Chrome/ChromeAdapter.js';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import notifyService from '../Notify/NotifyService.js';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ForumsServices {
  constructor() {
    this.chromeAdapter = new ChromeAdapter();
    this.templatesDir = path.join(__dirname, '../../../templates');
    this.notifyService = notifyService;
  }

  getMessageText(templateName, imgUrl) {
    const templatePath = path.join(this.templatesDir, `${templateName}.bbcode`);
    const template = fs.readFileSync(templatePath, 'utf-8');
    return template.replace('{{img_url_link}}', imgUrl);
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async bfdcrew(imgUrl) {
    const targetUrl = process.env.FORUM_URL_BFDCREW;
    const messageText = this.getMessageText('bfdcrew', imgUrl);

    try {
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        const clicked = await this.chromeAdapter.click(
            '.formButtonGroup [type="submit"]');
        if (!clicked) {
          throw new Error('Не удалось отправить сообщение');
        }
      }
      await this.sleep(30000);
      await this.notifyService.send(`Успешно отправлено в сервис: ${targetUrl}`);
    } catch (error) {
      await this.notifyService.send(`Ошибка bfdcrew: ${error.message}`);
    }
  }

  async crdpro(imgUrl) {
    const targetUrl = process.env.FORUM_URL_CRDPRO;
    const messageText = this.getMessageText('crdpro', imgUrl);

    try {
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        const clicked = await this.chromeAdapter.click(
            '.formButtonGroup [type="submit"]');
        if (!clicked) {
          throw new Error('Не удалось отправить сообщение');
        }
      }
      await this.sleep(30000);
      await this.notifyService.send(`Успешно отправлено в сервис: ${targetUrl}`);
    } catch (error) {
      await this.notifyService.send(`Ошибка crdpro: ${error.message}`);
    }
  }

  async ascarding(imgUrl) {
    const targetUrl = process.env.FORUM_URL_ASCARDING;
    const messageText = this.getMessageText('ascarding', imgUrl);

    try {
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        const clicked = await this.chromeAdapter.click(
            '.formButtonGroup [type="submit"]');
        if (!clicked) {
          throw new Error('Не удалось отправить сообщение');
        }
      }
      await this.sleep(30000);
      await this.notifyService.send(`Успешно отправлено в сервис: ${targetUrl}`);
    } catch (error) {
      await this.notifyService.send(`Ошибка ascarding: ${error.message}`);
    }
  }

  async toCrd(imgUrl) {
    const targetUrl = process.env.FORUM_URL_TOCRD;
    const messageText = this.getMessageText('toCrd', imgUrl);

    try {
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('textarea[name="message"]');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('textarea[name="message"]', messageText);
        await this.chromeAdapter.sleep(300, 600);
        const clicked = await this.chromeAdapter.click('input#qr_submit');
        if (!clicked) {
          throw new Error('Не удалось отправить сообщение');
        }
      }
      await this.sleep(15000);
      await this.notifyService.send(`Успешно отправлено в сервис: ${targetUrl}`);
    } catch (error) {
      await this.notifyService.send(`Ошибка toCrd: ${error.message}`);
    }
  }

  async enclave(imgUrl) {
    const targetUrl = process.env.FORUM_URL_ENCLAVE;
    const messageText = this.getMessageText('enclave', imgUrl);

    try {
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.ipsComposeArea_dummy.ipsJS_show');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click(
            '.cke_wysiwyg_div.cke_reset.cke_enable_context_menu.cke_editable.cke_editable_themed.cke_contents_ltr');
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste(
            '.cke_wysiwyg_div.cke_reset.cke_enable_context_menu.cke_editable.cke_editable_themed.cke_contents_ltr',
            messageText);
        await this.chromeAdapter.sleep(300, 600);
        const clicked = await this.chromeAdapter.click(
            'button.ipsButton[type="submit"]');
        if (!clicked) {
          throw new Error('Не удалось отправить сообщение');
        }
      }
      await this.sleep(15000);
      await this.notifyService.send(`Успешно отправлено в сервис: ${targetUrl}`);
    } catch (error) {
      await this.notifyService.send(`Ошибка enclave: ${error.message}`);
    }
  }

  async blackbones(imgUrl) {
    const targetUrl = process.env.FORUM_URL_BLACKBONES;
    const messageText = this.getMessageText('blackbones', imgUrl);

    try {
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        const clicked = await this.chromeAdapter.click(
            '.formButtonGroup [type="submit"]');
        if (!clicked) {
          throw new Error('Не удалось отправить сообщение');
        }
      }
      await this.sleep(15000);
      await this.notifyService.send(`Успешно отправлено в сервис: ${targetUrl}`);
    } catch (error) {
      await this.notifyService.send(`Ошибка blackbones: ${error.message}`);
    }
  }

  async darkmarket(imgUrl) {
    const targetUrl = process.env.FORUM_URL_DARKMARKET;
    const messageText = this.getMessageText('darkmarket', imgUrl);

    try {
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        const clicked = await this.chromeAdapter.click(
            '.formButtonGroup [type="submit"]');
        if (!clicked) {
          throw new Error('Не удалось отправить сообщение');
        }
      }
      await this.sleep(15000);
      await this.notifyService.send(`Успешно отправлено в сервис: ${targetUrl}`);
    } catch (error) {
      await this.notifyService.send(`Ошибка darkmarket: ${error.message}`);
    }
  }

  async carder(imgUrl) {
    const targetUrl = process.env.FORUM_URL_CARDER;
    const messageText = this.getMessageText('carder', imgUrl);

    try {
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        const clicked = await this.chromeAdapter.click(
            '.formButtonGroup [type="submit"]');
        if (!clicked) {
          throw new Error('Не удалось отправить сообщение');
        }
      }
      await this.sleep(15000);
      await this.notifyService.send(`Успешно отправлено в сервис: ${targetUrl}`);
    } catch (error) {
      await this.notifyService.send(`Ошибка carder: ${error.message}`);
    }
  }

  async vlmi(imgUrl) {
    const targetUrl = process.env.FORUM_URL_VLMI;
    const messageText = this.getMessageText('vlmi', imgUrl);

    try {
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        const clicked = await this.chromeAdapter.click(
            '.formButtonGroup [type="submit"]');
        if (!clicked) {
          throw new Error('Не удалось отправить сообщение');
        }
      }
      await this.sleep(15000);
      await this.notifyService.send(`Успешно отправлено в сервис: ${targetUrl}`);
    } catch (error) {
      await this.notifyService.send(`Ошибка vlmi: ${error.message}`);
    }
  }

  async itnull(imgUrl) {
    const targetUrl = process.env.FORUM_URL_ITNULL;
    const messageText = this.getMessageText('itnull', imgUrl);

    try {
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        const clicked = await this.chromeAdapter.click(
            '.formButtonGroup [type="submit"]');
        if (!clicked) {
          throw new Error('Не удалось отправить сообщение');
        }
      }
      await this.sleep(15000);
      await this.notifyService.send(`Успешно отправлено в сервис: ${targetUrl}`);
    } catch (error) {
      await this.notifyService.send(`Ошибка itnull: ${error.message}`);
    }
  }

  async forumteam(imgUrl) {
    const targetUrl = process.env.FORUM_URL_FORUMTEAM;
    const messageText = this.getMessageText('forumteam', imgUrl);

    try {
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        const clicked = await this.chromeAdapter.click(
            '.formButtonGroup [type="submit"]');
        if (!clicked) {
          throw new Error('Не удалось отправить сообщение');
        }
      }
      await this.sleep(15000);
      await this.notifyService.send(`Успешно отправлено в сервис: ${targetUrl}`);
    } catch (error) {
      await this.notifyService.send(`Ошибка forumteam: ${error.message}`);
    }
  }

  async migalki(imgUrl) {
    const targetUrl = process.env.FORUM_URL_MIGALKI;
    const messageText = this.getMessageText('migalki', imgUrl);

    try {
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        const clicked = await this.chromeAdapter.click(
            '.formButtonGroup [type="submit"]');
        if (!clicked) {
          throw new Error('Не удалось отправить сообщение');
        }
      }
      await this.sleep(15000);
      await this.notifyService.send(`Успешно отправлено в сервис: ${targetUrl}`);
    } catch (error) {
      await this.notifyService.send(`Ошибка migalki: ${error.message}`);
    }
  }
}

const forumsServices = new ForumsServices();

export default forumsServices;
