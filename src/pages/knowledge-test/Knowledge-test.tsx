import GoBackBtn from '../../components/go-back-btn/Go-back-btn';
import styles from './knowledge-test.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  selectQuestionCounter,
  selectRandomWords,
  selectRandomAnswers,
  selectAnswersResults,
  setRandomAnswers,
  setAnswersResults,
  setQuestionCounter,
  setSuccessScore,
} from '../../store/slices/words-slice';

export default function KnowledgeTest() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const counter = useSelector(selectQuestionCounter);
  const randomWords = useSelector(selectRandomWords);
  const randomAnswers = useSelector(selectRandomAnswers);
  const answersResults = useSelector(selectAnswersResults);

  useEffect(() => {
    if (answersResults.length === 10) {
      navigate('/results');
      dispatch(setSuccessScore());
    }
  }, [answersResults, navigate, dispatch]);

  const checkAnswer = (answerId: string) => {
    const currentWord = randomWords[counter - 1];

    dispatch(setQuestionCounter());
    dispatch(setRandomAnswers());

    if (currentWord && answerId === currentWord.id) {
      dispatch(setAnswersResults(true));
    } else {
      dispatch(setAnswersResults(false));
    }
  };

  return (
    <main className={styles.knowledge_test__container}>
      <div className={styles.knowledge_test__title_container}>
        <h2 className={styles.knowledge_test__title}>Перевір себе</h2>
      </div>
      <article className={styles.knowledge_test__content_wrapper}>
        <GoBackBtn />

        {randomWords
          .filter((_, index) => index === counter - 1)
          .map(word => {
            return (
              <span className={styles.content__word_common} key={word.id}>
                {word.word}
              </span>
            );
          })}

        <p className={styles.content__text}>Відповіді: {`${counter} / ${randomWords.length}`}</p>
        <p className={styles.content__text}>Оберіть вірну відповідь:</p>

        <div className={styles.content__answers_wrapper}>
          {randomAnswers
            .slice()
            .sort(() => Math.random() - 0.5)
            .map(answer => {
              return (
                <div
                  className={`${styles.content__word_common} ${styles.content__answer}`}
                  onClick={() => checkAnswer(answer.id)}
                  key={answer.id}
                >
                  {answer.translation}
                </div>
              );
            })}
        </div>
      </article>
    </main>
  );
}
