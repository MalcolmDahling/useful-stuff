import { atom } from 'recoil';

export const Cart = atom<string[]>({
  key: 'Cart',
  default: [],
});
