import GoBackBtn from '../../components/go-back-btn/Go-back-btn';
import styles from './words-add.module.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWord, selectAddedWords } from '../../store/slices/words-slice';
import { RootState } from '../../store/store';
import WordsList from '../../components/words-list/Words-list';

export default function WordsAdd() {
  const dispatch = useDispatch();
  const words = useSelector((state: RootState) => selectAddedWords(state));

  const [inputsValue, setInputsValue] = useState({
    word: '',
    translation: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputsValue.word && inputsValue.translation) {
      dispatch(
        addWord({
          id: new Date().toISOString(),
          word: inputsValue.word,
          translation: inputsValue.translation,
        })
      );

      setInputsValue({ word: '', translation: '' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputsValue(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section className={styles.words_add__container}>
      <div className={styles.words_add__title_container}>
        <h2 className={styles.words_add__title}>Додай нові слова</h2>
      </div>
      <article className={styles.words_add__content_wrapper}>
        <GoBackBtn />

        <form className={styles.words_add__form} onSubmit={handleSubmit}>
          <div className={styles.words_add__input_container}>
            <input
              className={styles.words_add__input}
              type="text"
              name="word"
              placeholder="Введіть нове слово"
              value={inputsValue.word}
              onChange={handleInputChange}
            />
            <input
              className={styles.words_add__input}
              type="text"
              name="translation"
              placeholder="Введіть переклад"
              value={inputsValue.translation}
              onChange={handleInputChange}
            />
          </div>

          <button
            disabled={!inputsValue.word.length || !inputsValue.translation.length}
            className={styles.words_add__form_btn}
            type="submit"
          >
            <span className={styles.btn_title}>Додати</span>
          </button>
        </form>

        <WordsList words={words} />
      </article>
    </section>
  );
}
