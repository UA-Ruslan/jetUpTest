// import GoBackBtn from '../../components/go-back-btn/Go-back-btn';
// import styles from './words-add.module.scss';
// import React, { useState } from 'react';

// export default function WordsAdd() {
// 	const [inputsValue, setInputsValue] = useState({
// 	    word: '',
//         translation: ''
// })

// 	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 	};

// 	const handleInputChange = (e) => {
// 		console.log(e.target.value);
// 	}

// 	return (
// 		<section className={styles.words_add__container}>
// 			<div className={styles.words_add__title_container}>
// 				<h2 className={styles.words_add__title}>Додай нові слова</h2>
// 			</div>
// 			<article className={styles.words_add__content_wrapper}>
// 				<GoBackBtn />

// 				<form className={styles.words_add__form} onSubmit={handleSubmit}>
// 					<div className={styles.words_add__input_container}>
// 						<input
// 							className={styles.words_add__input}
// 							type="text"
// 							placeholder="Введіть нове слово"
// 							onChange={handleInputChange}
// 						/>
// 						<input
// 							className={styles.words_add__input}
// 							type="text"
// 							placeholder="Введіть переклад"
// 							onChange={handleInputChange}
// 						/>
// 					</div>

// 					<button className={styles.words_add__form_btn} type="submit">
// 						<span className={styles.btn_title}>Додати</span>
// 					</button>
// 				</form>
// 			</article>
// 		</section>
// 	);
// }

import GoBackBtn from '../../components/go-back-btn/Go-back-btn';
import styles from './words-add.module.scss';
import React, { useState } from 'react';

export default function WordsAdd() {
	const [inputsValue, setInputsValue] = useState({
		word: '',
		translation: '',
	});
	const [newWords, setNewWords] = useState<{ word: string; translation: string }[]>([]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Додаємо нове слово до масиву, використовуючи правильний синтаксис для об'єкта
		setNewWords([...newWords, { word: inputsValue.word, translation: inputsValue.translation }]);
		// Очищення полів після відправки форми
		setInputsValue({ word: '', translation: '' });
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInputsValue((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	console.log(inputsValue);
	console.log(newWords); // Додано для перевірки значення масиву newWords

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

				<ul>
					{newWords.map((word, index) => (
						<li key={index}>
							<strong>{word.word}:</strong> {word.translation}
						</li>
					))}
				</ul>
			</article>
		</section>
	);
}
