import Navbar from '../../components/navbar/Navbar';
import styles from './main.module.scss';
export default function MainPage() {
	return (
		<section className={styles.main_page__container}>
			<Navbar />
			<article className={styles.main_page__content_wrapper}>
				<div className={styles.main_page__title_wrapper}>
					<h1 className={styles.main_page__title}>Онлайн словник</h1>
				</div>
				<div className={styles.main_page__content}>
					<h1>content</h1>
				</div>
			</article>
		</section>
	);
}
