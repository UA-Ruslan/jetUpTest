import styles from './statistic.module.scss';
import { selectFullStatistics } from '../../store/slices/words-slice';
import { useSelector } from 'react-redux';
import GoBackBtn from '../../components/go-back-btn/Go-back-btn';

export default function Statistic() {
  const fullStatistics = useSelector(selectFullStatistics);

  const averagePerformance =
    fullStatistics.length > 0
      ? fullStatistics.reduce((total: number, el) => total + el.score, 0) / fullStatistics.length
      : 0;

  return (
    <section className={styles.result_container}>
      <div className={styles.result__title_container}>
        <h2 className={styles.result__title}>Загальна ститистика</h2>
      </div>

      <article className={styles.result__content_container}>
        <GoBackBtn />

        <h3 className={styles.result_text}>Ваша середня успішність {averagePerformance}%</h3>

        <ul className={styles.result_list}>
          {!fullStatistics.length ? (
            <li>
              <h2 className={styles.result_text}>Ви покищо не проходили тест</h2>
            </li>
          ) : (
            fullStatistics.map((el, index) => {
              return (
                <li className={styles.result__list_item} key={index}>
                  <div>
                    <span>Тест пройдено: {el.date}</span>
                  </div>
                  <div>
                    <span>Ви дали {el.score}% правильних відповідей</span>
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </article>
    </section>
  );
}
