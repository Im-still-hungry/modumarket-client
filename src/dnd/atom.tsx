import { atom } from 'recoil';

export const KnightPositionState = atom({
  key: 'KnightPosition',
  default: { x: 0, y: 0 },
});
