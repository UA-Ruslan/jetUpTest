import { configureStore } from '@reduxjs/toolkit';
import wordsAddReducer from './slices/words-slice';

export const store = configureStore({
  reducer: {
    words: wordsAddReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
