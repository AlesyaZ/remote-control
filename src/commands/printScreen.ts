import { Region, mouse, screen } from '@nut-tree/nut-js';
import Jimp from 'jimp';

const screenWith = 200;
const screenHeight = 200;

export const makeScreen = async () => {
  const { x: positionX, y: positionY } = await mouse.getPosition();

  const region = new Region(
    positionX - screenWith / 2,
    positionY - screenHeight / 2,
    screenWith,
    screenHeight,
  );

  screen.highlight(region);

  const imgScreen = await (await screen.grabRegion(region)).toRGB();

  const img = await new Jimp({
    data: imgScreen.data,
    width: imgScreen.width,
    height: imgScreen.height,
  }).getBufferAsync(Jimp.MIME_PNG);

  const base64 = img.toString('base64');

  return base64;
};
