import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import sprite from '../../assets/sprite/sprite.svg';
import { useDispatch } from 'react-redux';
import {
  setQuestionCounter,
  setRandomWords,
  setRandomAnswers,
} from '../../store/slices/words-slice';

export default function Navbar() {
  const dispatch = useDispatch();

  const createRandomWords = () => {
    dispatch(setQuestionCounter());
    dispatch(setRandomWords());
    dispatch(setRandomAnswers());
  };

  return (
    <nav className={styles.navbar_container}>
      <a href="/" className={styles.navbar__logo_container}>
        <svg className={styles.logo_icon}>
          <use xlinkHref={`${sprite}#logo`} />
        </svg>
        <span className={styles.logo_title}>Word Master</span>
      </a>
      <ul className={styles.navbar__links_list}>
        <li className={styles.navbar__link_container}>
          <NavLink className={styles.navbar__link} to={'/words-add'}>
            Додати слова
          </NavLink>
        </li>
        <li
          className={`${styles.navbar__link_container} ${styles.navbar__link_common}`}
          onClick={createRandomWords}
        >
          <NavLink className={styles.navbar__link} to={'/knowledge-test'}>
            Повторити слова
          </NavLink>
        </li>
        <li
          className={`${styles.navbar__link_container} ${styles.navbar__link_common}`}
          onClick={createRandomWords}
        >
          <NavLink className={styles.navbar__link} to={'/statistic'}>
            Статистика
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
