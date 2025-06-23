import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css'

export default function BackButton() {
    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }
    return (
        <button className={styles.back} onClick={handleBack}>
            <span>&#8592; </span><p>Back</p>
        </button>
    )
}
