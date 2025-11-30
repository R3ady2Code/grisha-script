import ChromeAdapter from '../../Adapters/Chrome/ChromeAdapter.js';

const chromeAdapter = new ChromeAdapter();

const url = process.argv[2];

(async () => {
  try {
    await chromeAdapter.launch();
    await chromeAdapter.goto(url);

    chromeAdapter.browser.on('disconnected', () => process.exit());
    await new Promise(() => {});
  } catch (error) {
    console.error('Ошибка перехода по ссылке: ', error);
  }
})();
