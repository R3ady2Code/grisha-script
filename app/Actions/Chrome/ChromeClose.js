import ChromeAdapter from '../../Adapters/Chrome/ChromeAdapter.js';

const chromeAdapter = new ChromeAdapter();

(async () => {
  try {
    await chromeAdapter.close();
  } catch (error) {
    console.error('Ошибка закрытия браузера: ', error);
  }
})();
