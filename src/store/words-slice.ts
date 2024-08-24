import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface Word {
	word: string;
	translation: string;
}

interface WordsState {
	words: Word[];
}

const initialState: WordsState = {
	words: [],
};

export const wordsSlice = createSlice({
	name: 'words',
	initialState,
	reducers: {
		// Action to add a new word
		addWord: (state, action: PayloadAction<Word>) => {
			state.words.push(action.payload);
		},

	},
});

// Export actions
export const { addWord } = wordsSlice.actions;

// Selector to access the words array
export const selectWords = (state: RootState) => state.words.words;

export default wordsSlice.reducer;
