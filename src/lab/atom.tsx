import { atom } from 'recoil';

export const WebData = atom({
  key: 'WebData',
  default: [
    { id: 1, content: 'hi' },
    { id: 2, content: 'hello' },
    { id: 3, content: 'by' },
  ],
});
