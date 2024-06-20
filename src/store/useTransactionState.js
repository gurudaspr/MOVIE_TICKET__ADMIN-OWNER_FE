import { atom } from 'recoil';

export const transactionState = atom({
  key: 'transactionState',
  default: {
    totalAmount: 0,
    loading: true,
  },
});

export const transactionListState = atom({
  key: 'transactionListState',
  default: [],
});