import styles from './go-back-btn.module.scss';
import { useNavigate } from 'react-router';
export default function GoBackBtn() {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<button onClick={goBack} className={styles.go_back_btn}>
			<span className={styles.btn_title}>Назад</span>
		</button>
	);
}
