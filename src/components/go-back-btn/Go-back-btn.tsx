import styles from './go-back-btn.module.scss';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetQuestionCounter,
  selectQuestionCounter,
  resetAnswersResults,
} from '../../store/slices/words-slice';

export default function GoBackBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const counter = useSelector(selectQuestionCounter);

  const goBack = () => {
    navigate(-1);
    if (counter != 0) {
		dispatch(resetQuestionCounter());
		dispatch(resetAnswersResults());
    }
  };

  return (
    <button onClick={goBack} className={styles.go_back_btn}>
      <span className={styles.btn_title}>Назад</span>
    </button>
  );
}
