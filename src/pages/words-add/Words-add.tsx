import GoBackBtn from '../../components/go-back-btn/Go-back-btn';
import styles from './words-add.module.scss';
import React from 'react';

export default function WordsAdd() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
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
						<input className={styles.words_add__input} type="text" placeholder="Введіть нове слово" />
						<input className={styles.words_add__input} type="text" placeholder="Введіть переклад" />
					</div>

					<button className={styles.words_add__form_btn} type="submit">
						<span className={styles.btn_title}>Додати</span>
					</button>
				</form>
			</article>
		</section>
	);
}
