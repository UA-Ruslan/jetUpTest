import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Words } from '../../interfaces/interfaces';
import { DEFAULT_WORDS } from '../../static/static-words';

interface WordsState {
  addedWords: Words[];
  defaultWords: Words[];
  allWords: Words[];
}

const initialState: WordsState = {
  addedWords: JSON.parse(localStorage.getItem('words') || '[]'),
  defaultWords: DEFAULT_WORDS,
  allWords: DEFAULT_WORDS.concat(JSON.parse(localStorage.getItem('words') || '[]')),
};

export const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<Words>) => {
      state.addedWords.push(action.payload);
      localStorage.setItem('words', JSON.stringify(state.addedWords));
      state.allWords = state.defaultWords.concat(state.addedWords);
    },
    clearWords: state => {
      state.addedWords = [];
      localStorage.removeItem('words');
      state.allWords = state.defaultWords;
    },
  },
});

export const { addWord, clearWords } = wordsSlice.actions;

export const selectAllWords = (state: RootState) => state.words.allWords;

export const selectAddedWords = (state: RootState) => state.words.addedWords;

export default wordsSlice.reducer;
