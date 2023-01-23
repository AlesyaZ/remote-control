import { mouse } from '@nut-tree/nut-js';

export const setPositionMouse = async () => {
  const { x, y } = await mouse.getPosition();
  return `${x}px,${y}px`;
};
