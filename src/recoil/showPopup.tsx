import { atom } from 'recoil';

export const showPopup = atom<boolean>({
  key: 'showPopup',
  default: false,
});