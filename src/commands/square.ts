import { Button, down, left, mouse, right, up, screen } from '@nut-tree/nut-js';

export const createSquare = async (coordinate: string[]) => {
  const [width] = coordinate;
  const numWidth = Number(width);

  const heightScreen = await screen.height();
  const widthScreen = await screen.width();

  const { x: xPosit, y: yPosit } = await mouse.getPosition();

  if (
    !width ||
    xPosit + numWidth > widthScreen ||
    yPosit + numWidth > heightScreen
  ) {
    throw new Error('Incorrect width entered');
  }

  await mouse.pressButton(Button.LEFT);
  await mouse.move(right(numWidth));
  await mouse.move(down(numWidth));
  await mouse.move(left(numWidth));
  await mouse.move(up(numWidth));
  await mouse.releaseButton(Button.LEFT);
};
