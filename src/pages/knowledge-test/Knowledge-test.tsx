import GoBackBtn from '../../components/go-back-btn/Go-back-btn';
import styles from './knowledge-test.module.scss';
export default function KnowledgeTest() {
	return (
		<main className={styles.knowledge_test__container}>
			<div className={styles.knowledge_test__title_container}>
				<h2 className={styles.knowledge_test__title}>Перевір себе</h2>
			</div>
			<article className={styles.knowledge_test__content_wrapper}>
				<GoBackBtn />
			</article>
		</main>
	);
}
