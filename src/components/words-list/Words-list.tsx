import styles from './words-list.module.scss';
import { Words } from '../../interfaces/interfaces';

interface WordsListProps {
  words: Words[];
}

export default function WordsList({ words }: WordsListProps) {
  return (
    <ul className={styles.main_page__words_list}>
      {words.map(word => (
        <li className={styles.words_list__item} key={word.id}>
          <span className={styles.list_item__left_content}>{word.word}</span>
          <span className={styles.list_item__middle_content}>-</span>
          <span className={styles.list_item__right_content}>{word.translation}</span>
        </li>
      ))}
    </ul>
  );
}
