import ChromeAdapter from '../../Adapters/Chrome/ChromeAdapter.js';

class ForumsServices {
  constructor() {
    this.chromeAdapter = new ChromeAdapter();
  }

  async bfdcrew(messageText) {
    const targetUrl = 'https://bfdcrew.pro/threads/socnet-the-best-store-of-social-network-accounts-telegram-tiktok-twitter-instagram-discord-reddit-proxy-vpn-at-low-prices-free-trial-1.2324/page-4#post-91225';

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.type('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('.formButtonGroup [type="submit"]');
      }

      await this.chromeAdapter.sleep(1000, 1000);
      await this.chromeAdapter.close();
    } catch (error) {
      console.error('Ошибка:', error.message);
      await this.chromeAdapter.close();
    }
  }

  async crdpro(messageText) {
    const targetUrl = 'https://crdpro.cc/threads/free-databases.64845/';

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.type('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('.formButtonGroup [type="submit"]');
      }

      await this.chromeAdapter.sleep(1000, 1000);
      await this.chromeAdapter.close();
    } catch (error) {
      console.error('Ошибка:', error.message);
      await this.chromeAdapter.close();
    }
  }

  async ascarding(messageText) {
    const targetUrl = 'https://ascarding.net/threads/5260/';

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.type('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('.formButtonGroup [type="submit"]');
      }

      await this.chromeAdapter.sleep(1000, 1000);
      await this.chromeAdapter.close();
    } catch (error) {
      console.error('Ошибка:', error.message);
      await this.chromeAdapter.close();
    }
  }

  async toCrd(messageText) {
    const targetUrl = 'https://2crd.cc/showthread.php?p=828856#post828856';

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('textarea[name="message"]');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.type('textarea[name="message"]', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('input#qr_submit');
      }

      await this.chromeAdapter.sleep(1000, 1000);
      await this.chromeAdapter.close();
    } catch (error) {
      console.error('Ошибка:', error.message);
      await this.chromeAdapter.close();
    }
  }

  async enclave(messageText) {
    const targetUrl = 'https://www.enclave.cc/index.php?/topic/8567-cashiers-for-instant-money-transfer-pickup/';

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
        await this.chromeAdapter.type(
            '.cke_wysiwyg_div.cke_reset.cke_enable_context_menu.cke_editable.cke_editable_themed.cke_contents_ltr',
            messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('button.ipsButton[type="submit"]');
      }

      await this.chromeAdapter.sleep(1000, 1000);
      await this.chromeAdapter.close();
    } catch (error) {
      console.error('Ошибка:', error.message);
      await this.chromeAdapter.close();
    }
  }

  async blackbones(messageText) {
    const targetUrl = 'https://blackbones.net/threads/crazy-shop-online-store-cc-cvv2-the-best-credit-cards-at-a-low-price.10574/page-232#post-146279';

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.type('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('.formButtonGroup [type="submit"]');
      }

      await this.chromeAdapter.sleep(1000, 1000);
      await this.chromeAdapter.close();
    } catch (error) {
      console.error('Ошибка:', error.message);
      await this.chromeAdapter.close();
    }
  }

  async darkmarket(messageText) {
    const targetUrl = 'https://darkmarket.ca/threads/lichnye-kabinety-kz-bankov-ot-shark-service.51772/';

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.type('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('.formButtonGroup [type="submit"]');
      }

      await this.chromeAdapter.sleep(1000, 1000);
      await this.chromeAdapter.close();
    } catch (error) {
      console.error('Ошибка:', error.message);
      await this.chromeAdapter.close();
    }
  }

  async carder(messageText) {
    const targetUrl = 'https://carder.ru/forum/index.php?showtopic=100000';

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.type('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('.formButtonGroup [type="submit"]');
      }

      await this.chromeAdapter.sleep(1000, 1000);
      await this.chromeAdapter.close();
    } catch (error) {
      console.error('Ошибка:', error.message);
      await this.chromeAdapter.close();
    }
  }

  async vlmi(messageText) {
    const targetUrl = 'https://vlmi.ru/forum/index.php?showtopic=100000';

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.type('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('.formButtonGroup [type="submit"]');
      }

      await this.chromeAdapter.sleep(1000, 1000);
      await this.chromeAdapter.close();
    } catch (error) {
      console.error('Ошибка:', error.message);
      await this.chromeAdapter.close();
    }
  }

  async itnull(messageText) {
    const targetUrl = 'https://itnull.ru/forum/index.php?showtopic=100000';

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.type('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('.formButtonGroup [type="submit"]');
      }

      await this.chromeAdapter.sleep(1000, 1000);
      await this.chromeAdapter.close();
    } catch (error) {
      console.error('Ошибка:', error.message);
      await this.chromeAdapter.close();
    }
  }

  async forumteam(messageText) {
    const targetUrl = 'https://itnull.ru/forum/index.php?showtopic=100000';

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.type('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('.formButtonGroup [type="submit"]');
      }

      await this.chromeAdapter.sleep(1000, 1000);
      await this.chromeAdapter.close();
    } catch (error) {
      console.error('Ошибка:', error.message);
      await this.chromeAdapter.close();
    }

  }

  async migalki(messageText) {
    const targetUrl = 'https://itnull.ru/forum/index.php?showtopic=100000';

    try {
      await this.chromeAdapter.launch();
      await this.chromeAdapter.goto(targetUrl);
      await this.chromeAdapter.scroll();
      await this.chromeAdapter.click('.fr-wrapper');

      if (messageText) {
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.type('.fr-wrapper', messageText);
        await this.chromeAdapter.sleep(300, 600);
        await this.chromeAdapter.click('.formButtonGroup [type="submit"]');
      }

      await this.chromeAdapter.sleep(1000, 1000);
      await this.chromeAdapter.close();
    } catch (error) {
      console.error('Ошибка:', error.message);
      await this.chromeAdapter.close();
    }
  }
}

const forumsServices = new ForumsServices();

export default forumsServices;
