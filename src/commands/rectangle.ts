import { Button, down, left, mouse, right, up, screen } from '@nut-tree/nut-js';

export const createRectangle = async (coordinate: string[]) => {
  const [width, length] = coordinate;
  const numWidth = Number(width);
  const numLength = Number(length);

  const heightScreen = await screen.height();
  const widthScreen = await screen.width();

  const { x: xPosit, y: yPosit } = await mouse.getPosition();

  if (
    !width ||
    xPosit + numWidth > widthScreen ||
    yPosit + numLength > heightScreen
  ) {
    throw new Error('The data entered is incorrect');
  }

  await mouse.pressButton(Button.LEFT);
  await mouse.move(right(numWidth));
  await mouse.move(down(numLength));
  await mouse.move(left(numWidth));
  await mouse.move(up(numLength));
  await mouse.releaseButton(Button.LEFT);
};
