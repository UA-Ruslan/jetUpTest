import styles from './results.module.scss';
import { useNavigate } from 'react-router';
import { resetAnswersResults, selectSuccessScore } from '../../store/slices/words-slice';
import { useDispatch, useSelector } from 'react-redux';

export default function Results() {
  const navigate = useNavigate();
  const successScore = useSelector(selectSuccessScore);
  const dispatch = useDispatch();

  const mainPageRedirect = () => {
    navigate('/');
    dispatch(resetAnswersResults());
  };

  return (
    <section className={styles.result_container}>
      <div className={styles.result__title_container}>
        <h2 className={styles.result_title}>Результати</h2>
      </div>

      <article className={styles.result__content_container}>
        <button className={styles.result_btn} onClick={mainPageRedirect}>
          <span className={styles.btn_title}>На головну</span>
        </button>

        <h1 className={styles.result_text}>Ваш результат {successScore}% правильних відповідей</h1>
      </article>
    </section>
  );
}
