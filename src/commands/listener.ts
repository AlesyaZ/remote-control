import { down, left, mouse, right, up } from '@nut-tree/nut-js';
import { createCircle } from './circle';

export const getAction = async (navigat) => {
  const { x, y } = await mouse.getPosition();
  return `${navigat} ${x}px, ${y}px`;
};

export const listenerAction = async (navigat: string, coordinate: string[]) => {
  let result = [];
  const [...item] = coordinate;

  switch (navigat) {
    case 'mouse_up':
      await mouse.move(up(Number(item)));
      break;
    case 'mouse_down':
      await mouse.move(down(Number(item)));
      break;
    case 'mouse_left':
      await mouse.move(left(Number(item)));
      break;
    case 'mouse_right':
      await mouse.move(right(Number(item)));
      break;
    case 'draw_circle':
      await createCircle(coordinate);
      break;
  }

  console.log(`${navigat}, ${Number(item)}px`);
  const position = await getAction(navigat);
  result.push(position);
  return result.join('');
};
