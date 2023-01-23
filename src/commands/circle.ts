import { Button, mouse, Point, straightTo, screen } from '@nut-tree/nut-js';

export const createCircle = async (coordinate: string[]) => {
  const [radius] = coordinate;
  const numRadius = Number(radius);
  const center = await mouse.getPosition();
  const height = await screen.height();
  const width = await screen.width();
  const speed = 0.01;

  if (
    !radius ||
    center.x + 2 * numRadius > height ||
    center.y + numRadius > width ||
    center.x - numRadius < 0 ||
    center.y - numRadius < 0
  ) {
    throw new Error('Incorrect radius entered');
  }

  await mouse.pressButton(Button.LEFT);

  for (let i = 0; i <= 2 * Math.PI; i += speed * Math.PI) {
    const moveX = center.x + numRadius - numRadius * Math.cos(i);
    const moveY = center.y - numRadius * Math.sin(i);

    await mouse.move(straightTo(new Point(moveX, moveY)));
  }

  await mouse.releaseButton(Button.LEFT);
};
