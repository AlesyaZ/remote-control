import { down, left, mouse, right, up } from '@nut-tree/nut-js';
import { createCircle } from './circle';
import { createRectangle } from './rectangle';
import { createSquare } from './square';

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
      console.log(`${navigat}, ${Number(item)}px`);
      break;
    case 'mouse_down':
      await mouse.move(down(Number(item)));
      console.log(`${navigat}, ${Number(item)}px`);
      break;
    case 'mouse_left':
      await mouse.move(left(Number(item)));
      console.log(`${navigat}, ${Number(item)}px`);
      break;
    case 'mouse_right':
      await mouse.move(right(Number(item)));
      console.log(`${navigat}, ${Number(item)}px`);
      break;
    case 'draw_circle':
      await createCircle(item);
      console.log(`${navigat}, ${Number(item)}px`);
      break;
    case 'draw_rectangle':
      await createRectangle(item);
      console.log(`${navigat}, ${Number(item[0])}px, ${Number(item[1])}px`);
      break;
    case 'draw_square':
      await createSquare(item);
      console.log(`${navigat}, ${Number(item)}px`);
      break;
  }
  const position = await getAction(navigat);
  result.push(position);
  return result.join('');
};
