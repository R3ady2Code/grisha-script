import forumsServices from '../../Services/Forums/ForumsServices.js';
import {getAndDeleteOldestImage} from '../../../db.js';
import notifyService from '../../Services/Notify/NotifyService.js';

export default async function(chatId) {
  notifyService.setChatId(chatId);

  const imgSource = await getAndDeleteOldestImage();

  if (!imgSource) {
    await notifyService.send('Нет изображений в базе данных');
    return;
  }

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

  await forumsServices.chromeAdapter.close();
}
