import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ChromeAdapter {
  constructor(options = {}) {
    this.browser = null;
    this.page = null;
    this.options = {
      headless: false,
      userDataDir: path.join(__dirname, 'chrome-profile'),
      dumpio: true,
      timeout: 30000,
      args: [
        '--start-maximized',
        '--disable-blink-features=AutomationControlled',
        '--no-sandbox',
      ],
      defaultViewport: null,
      ...options,
    };
  }

  // Случайная задержка
  randomDelay(min = 100, max = 300) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Пауза
  async sleep(min = 100, max = 300) {
    await new Promise(r => setTimeout(r, this.randomDelay(min, max)));
  }

  // Запуск браузера
  async launch() {
    this.browser = await puppeteer.launch(this.options);
    this.page = await this.browser.newPage();

    // Скрываем признаки автоматизации
    await this.page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', {get: () => false});
    });

    console.log('Браузер запущен');
    return this;
  }

  // Закрытие браузера
  async close() {
    if (this.browser) {
      await this.browser.close();
      console.log('Браузер закрыт');
    }
  }

  // Переход на страницу
  async goto(url) {
    console.log(`Открываю ${url}...`);
    await this.page.goto(url, {waitUntil: 'networkidle2'});
    console.log('Страница загружена');
    await this.sleep(500, 1500);
    return this;
  }

  // Плавное движение мыши к элементу
  async moveTo(element) {
    const box = await element.boundingBox();
    if (!box) return;

    const x = box.x + box.width * (0.3 + Math.random() * 0.4);
    const y = box.y + box.height * (0.3 + Math.random() * 0.4);

    await this.page.mouse.move(x, y,
        {steps: 10 + Math.floor(Math.random() * 10)});
    await this.sleep(50, 150);
  }

  // Скролл как человек
  async scroll() {
    const scrollHeight = await this.page.evaluate(
        () => document.body.scrollHeight);
    const viewportHeight = await this.page.evaluate(() => window.innerHeight);
    let currentScroll = 0;

    console.log('Скроллю страницу...');

    while (currentScroll < scrollHeight - viewportHeight) {
      const scrollTicks = Math.floor(Math.random() * 4) + 1;
      const scrollAmount = scrollTicks * (80 + Math.floor(Math.random() * 70));

      await this.page.mouse.wheel({deltaY: scrollAmount});
      currentScroll += scrollAmount;

      await this.sleep(200, 800);

      // Иногда пауза подольше (читаем контент)
      if (Math.random() < 0.15) {
        await this.sleep(800, 2000);
      }

      // Иногда скроллим назад
      if (Math.random() < 0.1) {
        const backScroll = Math.floor(Math.random() * 100) + 30;
        await this.page.mouse.wheel({deltaY: -backScroll});
        currentScroll -= backScroll;
        await this.sleep(300, 600);
      }
    }

    console.log('Скролл завершен');
    return this;
  }

  // Клик как человек
  async click(selector) {
    try {
      await this.page.waitForSelector(selector, {timeout: 10000});
      const element = await this.page.$(selector);

      if (!element) {
        console.log(`Элемент ${selector} не найден`);
        return false;
      }

      await this.moveTo(element);
      await this.sleep(100, 250);

      await this.page.mouse.down();
      await this.sleep(50, 120);
      await this.page.mouse.up();

      console.log(`Клик по ${selector} выполнен`);
      return true;
    } catch (error) {
      console.error(`Ошибка при клике на ${selector}:`, error.message);
      return false;
    }
  }

  // Вставка текста через clipboard (сохраняет форматирование и переносы)
  async paste(selector, text) {
    try {
      await this.page.waitForSelector(selector, {timeout: 10000});
      const element = await this.page.$(selector);

      if (!element) {
        console.log(`Элемент ${selector} не найден`);
        return false;
      }

      await this.moveTo(element);
      await element.click();
      await this.sleep(200, 400);

      // Записываем текст в clipboard и вставляем
      await this.page.evaluate(async (text) => {
        await navigator.clipboard.writeText(text);
      }, text);

      await this.page.keyboard.down('Control');
      await this.page.keyboard.press('KeyV');
      await this.page.keyboard.up('Control');

      console.log('Текст вставлен через clipboard');
      return true;
    } catch (error) {
      console.error(`Ошибка при вставке текста:`, error.message);
      return false;
    }
  }

  // Печать текста как человек
  async type(selector, text) {
    try {
      await this.page.waitForSelector(selector, {timeout: 10000});
      const element = await this.page.$(selector);

      if (!element) {
        console.log(`Элемент ${selector} не найден`);
        return false;
      }

      await this.moveTo(element);
      await element.click();
      await this.sleep(200, 400);

      console.log('Печатаю текст...');
      for (const char of text) {
        await this.page.keyboard.type(char);
        await this.sleep(50, 180);

        // Иногда пауза (думаем)
        if (Math.random() < 0.05) {
          await this.sleep(300, 700);
        }
      }

      console.log('Текст введен');
      return true;
    } catch (error) {
      console.error(`Ошибка при вводе текста:`, error.message);
      return false;
    }
  }
}

export default ChromeAdapter;
