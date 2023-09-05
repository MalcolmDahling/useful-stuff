import { atom } from 'recoil';

export const SelectedPage = atom<number>({
  key: 'SelectedPage',
  default: 0,
});
