import styles from './Change.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const Change = (props) => {
    const { chapter, setChapter } = props;
    const { chapterId } = useParams();
    const navigate = useNavigate();
    const nextHandler = () => {
        const nextChapterId = parseInt(chapterId) + 1;
        setChapter(nextChapterId);
        navigate(`/chapter/${nextChapterId}`);
    };
    return (
        <div className={styles.background} onClick={nextHandler}>
            <div className={styles.exchange}></div>
        </div>
    );
};

export default Change;
