import forumsServices from '../../Services/Forums/ForumsServices.js';
import {getAndDeleteOldestImage} from '../../../db.js';
import bot from '../../Bots/Admin/bot.js';

export default async function(chatId) {
  const imgSource = await getAndDeleteOldestImage();

  if (!imgSource) {
    console.log('Нет изображений в базе данных');
    await bot.sendMessage(chatId, 'Нет изображений в базе данных');
    return;
  }

  forumsServices.setChatId(chatId);

  await forumsServices.bfdcrew(imgSource);
  await forumsServices.crdpro(imgSource);
  await forumsServices.ascarding(imgSource);
  await forumsServices.toCrd(imgSource);
  await forumsServices.enclave(imgSource);
  await forumsServices.blackbones(imgSource);
  await forumsServices.darkmarket(imgSource);
  await forumsServices.carder(imgSource);
  await forumsServices.vlmi(imgSource);
  await forumsServices.itnull(imgSource);
  await forumsServices.forumteam(imgSource);
  await forumsServices.migalki(imgSource);

  await forumsServices.chromeAdapter.sleep(100000, 100000);

  await forumsServices.chromeAdapter.close();
}
