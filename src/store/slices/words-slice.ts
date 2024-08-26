import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Words, Statistic } from '../../interfaces/interfaces';
import { DEFAULT_WORDS } from '../../static/static-words';

interface WordsState {
  addedWords: Words[];
  defaultWords: Words[];
  allWords: Words[];
  randomWords: Words[];
  randomAnswers: Words[];
  questionCounter: number;
  successScore: number;
  answersResults: boolean[];
  fullStatistics: Statistic[];
}

const initialState: WordsState = {
  addedWords: JSON.parse(localStorage.getItem('words') || '[]'),
  defaultWords: DEFAULT_WORDS,
  allWords: JSON.parse(localStorage.getItem('words') || '[]').concat(DEFAULT_WORDS),
  randomWords: [],
  randomAnswers: [],
  questionCounter: 0,
  successScore: 0,
  answersResults: [],
  fullStatistics: JSON.parse(localStorage.getItem('statistic') || '[]'),
};

export const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<Words>) => {
      state.addedWords.unshift(action.payload);
      localStorage.setItem('words', JSON.stringify(state.addedWords));
      state.allWords = state.addedWords.concat(state.defaultWords);
    },
    clearWords: state => {
      state.addedWords = [];
      state.fullStatistics = [];
      ['words', 'statistic'].forEach(key => localStorage.removeItem(key));
      state.allWords = state.defaultWords;
    },
    setQuestionCounter: state => {
      state.questionCounter += 1;
      if (state.questionCounter > 10) {
        state.questionCounter = 0;
      }
    },
    resetQuestionCounter: state => {
      state.questionCounter = 0;
    },
    setRandomWords: state => {
      state.randomWords = [];

      while (state.randomWords.length < 10) {
        const randomIndex = Math.floor(Math.random() * state.allWords.length);
        const randomWord = state.allWords[randomIndex];
        const uniqueWord = state.randomWords.some(word => word.id === randomWord.id);
        if (!uniqueWord) {
          state.randomWords.push(randomWord);
        }
      }
    },
    setRandomAnswers: state => {
      state.randomAnswers = [];

      if (state.questionCounter === 0) {
        state.randomAnswers = [];
      } else {
        const currentWord = state.randomWords[state.questionCounter - 1];

        state.randomAnswers.push(currentWord);

        while (state.randomAnswers.length < 4) {
          const randomIndex = Math.floor(Math.random() * state.allWords.length);
          const randomAnswer = state.allWords[randomIndex];
          const uniqueAnswer = state.randomAnswers.some(answer => answer.id === randomAnswer.id);
          if (!uniqueAnswer) {
            state.randomAnswers.push(randomAnswer);
          }
        }
      }
    },
    setAnswersResults: (state, action: PayloadAction<boolean>) => {
      state.answersResults.push(action.payload);
    },
    resetAnswersResults: state => {
      state.answersResults = [];
    },
    setSuccessScore: state => {
      state.successScore = 0;

      const now = new Date();
      const formattedDateTime = now.toLocaleString('uk-UA', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });

      console.log(`Тест пройдено: ${formattedDateTime}`);

      const totalCount = state.answersResults.length;
      const trueCount = state.answersResults.filter(value => value === true).length;

      state.successScore = (trueCount / totalCount) * 100;

      state.fullStatistics.push({
        score: state.successScore,
        date: formattedDateTime,
      });
      localStorage.setItem('statistic', JSON.stringify(state.fullStatistics));
    },
  },
});

export const {
  addWord,
  clearWords,
  setQuestionCounter,
  resetQuestionCounter,
  setRandomWords,
  setRandomAnswers,
  setAnswersResults,
  resetAnswersResults,
  setSuccessScore,
} = wordsSlice.actions;

export const selectAllWords = (state: RootState) => state.words.allWords;
export const selectAddedWords = (state: RootState) => state.words.addedWords;
export const selectRandomWords = (state: RootState) => state.words.randomWords;
export const selectRandomAnswers = (state: RootState) => state.words.randomAnswers;
export const selectQuestionCounter = (state: RootState) => state.words.questionCounter;
export const selectAnswersResults = (state: RootState) => state.words.answersResults;
export const selectSuccessScore = (state: RootState) => state.words.successScore;
export const selectFullStatistics = (state: RootState) => state.words.fullStatistics;

export default wordsSlice.reducer;
