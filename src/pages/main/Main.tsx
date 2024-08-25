import Navbar from '../../components/navbar/Navbar';
import styles from './main.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearWords, selectAllWords } from '../../store/slices/words-slice';
import WordsList from '../../components/words-list/Words-list';

export default function MainPage() {
  const dispatch = useDispatch();
  const allWords = useSelector(selectAllWords);

  const handleClearStorage = () => {
    dispatch(clearWords());
  };

  return (
    <section className={styles.main_page__container}>
      <Navbar />
      <article className={styles.main_page__content_wrapper}>
        <div className={styles.main_page__title_wrapper}>
          <h1 className={styles.main_page__title}>Онлайн словник</h1>
        </div>
        <div className={styles.main_page__content}>
          <button className={styles.main_page__clear_btn} onClick={handleClearStorage}>
            <span className={styles.btn_title}>Видалити все</span>
          </button>

          <WordsList words={allWords} />
        </div>
      </article>
    </section>
  );
}
