import ChromeAdapter from '../../Adapters/Chrome/ChromeAdapter.js';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import notifyService from '../Notify/NotifyService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ForumsServices {
  constructor() {
    this.chromeAdapter = new ChromeAdapter();
    this.templatesDir = path.join(__dirname, '../../../templates');
    this.notifyService = notifyService;
  }

  setNotifyService(service) {
    this.notifyService = service;
  }

  getMessageText(templateName, imgUrl) {
    const templatePath = path.join(this.templatesDir, `${templateName}.bbcode`);
    const template = fs.readFileSync(templatePath, 'utf-8');
    return template.replace('{{img_url_link}}', imgUrl);
  }

  async bfdcrew(imgUrl) {
    const targetUrl = '';
    const messageText = this.getMessageText('bfdcrew', imgUrl);

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('.formButtonGroup [type="submit"]');
      }
      await this.notifyService.send('Успешно отправлено в сервис: bfdcrew');
    } catch (error) {
      await this.notifyService.send(`Ошибка bfdcrew: ${error.message}`);
      await this.chromeAdapter.close();
    }
  }

  async crdpro(imgUrl) {
    const targetUrl = '';
    const messageText = this.getMessageText('crdpro', imgUrl);

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('.formButtonGroup [type="submit"]');
      }
      await this.notifyService.send('Успешно отправлено в сервис: crdpro');
    } catch (error) {
      await this.notifyService.send(`Ошибка crdpro: ${error.message}`);
      await this.chromeAdapter.close();
    }
  }

  async ascarding(imgUrl) {
    const targetUrl = '';
    const messageText = this.getMessageText('ascarding', imgUrl);

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('.formButtonGroup [type="submit"]');
      }
      await this.notifyService.send('Успешно отправлено в сервис: ascarding');
    } catch (error) {
      await this.notifyService.send(`Ошибка ascarding: ${error.message}`);
      await this.chromeAdapter.close();
    }
  }

  async toCrd(imgUrl) {
    const targetUrl = '';
    const messageText = this.getMessageText('toCrd', imgUrl);

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('textarea[name="message"]');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('textarea[name="message"]', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('input#qr_submit');
      }
      await this.notifyService.send('Успешно отправлено в сервис: toCrd');
    } catch (error) {
      await this.notifyService.send(`Ошибка toCrd: ${error.message}`);
      await this.chromeAdapter.close();
    }
  }

  async enclave(imgUrl) {
    const targetUrl = '';
    const messageText = this.getMessageText('enclave', imgUrl);

    try {
      await this.chromeAdapter.launch();
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
        await this.chromeAdapter.click('button.ipsButton[type="submit"]');
      }
      await this.notifyService.send('Успешно отправлено в сервис: enclave');
    } catch (error) {
      await this.notifyService.send(`Ошибка enclave: ${error.message}`);
      await this.chromeAdapter.close();
    }
  }

  async blackbones(imgUrl) {
    const targetUrl = '';
    const messageText = this.getMessageText('blackbones', imgUrl);

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('.formButtonGroup [type="submit"]');
      }
      await this.notifyService.send('Успешно отправлено в сервис: blackbones');
    } catch (error) {
      await this.notifyService.send(`Ошибка blackbones: ${error.message}`);
      await this.chromeAdapter.close();
    }
  }

  async darkmarket(imgUrl) {
    const targetUrl = '';
    const messageText = this.getMessageText('darkmarket', imgUrl);

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('.formButtonGroup [type="submit"]');
      }
      await this.notifyService.send('Успешно отправлено в сервис: darkmarket');
    } catch (error) {
      await this.notifyService.send(`Ошибка darkmarket: ${error.message}`);
      await this.chromeAdapter.close();
    }
  }

  async carder(imgUrl) {
    const targetUrl = '';
    const messageText = this.getMessageText('carder', imgUrl);

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('.formButtonGroup [type="submit"]');
      }
      await this.notify('Успешно отправлено в сервис: carder');
    } catch (error) {
      await this.notify(`Ошибка carder: ${error.message}`);
      await this.chromeAdapter.close();
    }
  }

  async vlmi(imgUrl) {
    const targetUrl = '';
    const messageText = this.getMessageText('vlmi', imgUrl);

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('.formButtonGroup [type="submit"]');
      }
      await this.notify('Успешно отправлено в сервис: vlmi');
    } catch (error) {
      await this.notify(`Ошибка vlmi: ${error.message}`);
      await this.chromeAdapter.close();
    }
  }

  async itnull(imgUrl) {
    const targetUrl = '';
    const messageText = this.getMessageText('itnull', imgUrl);

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('.formButtonGroup [type="submit"]');
      }
      await this.notify('Успешно отправлено в сервис: itnull');
    } catch (error) {
      await this.notify(`Ошибка itnull: ${error.message}`);
      await this.chromeAdapter.close();
    }
  }

  async forumteam(imgUrl) {
    const targetUrl = '';
    const messageText = this.getMessageText('forumteam', imgUrl);

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('.formButtonGroup [type="submit"]');
      }
      await this.notify('Успешно отправлено в сервис: forumteam');
    } catch (error) {
      await this.notify(`Ошибка forumteam: ${error.message}`);
      await this.chromeAdapter.close();
    }
  }

  async migalki(imgUrl) {
    const targetUrl = '';
    const messageText = this.getMessageText('migalki', imgUrl);

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.paste('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('.formButtonGroup [type="submit"]');
      }
      await this.notify('Успешно отправлено в сервис: migalki');
    } catch (error) {
      await this.notify(`Ошибка migalki: ${error.message}`);
      await this.chromeAdapter.close();
    }
  }
}

const forumsServices = new ForumsServices();

export default forumsServices;
