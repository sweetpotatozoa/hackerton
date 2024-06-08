import styles from './Choice.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const Choice = (props) => {
    const { chapter, setChapter, gameContent } = props;
    const { chapterId } = useParams();
    const navigate = useNavigate();
    const nextHandler = () => {
        navigate(`/chapter/${chapterId}/Change`);
    };

    const divStyle = {
        backgroundImage: `url(${gameContent.choice.url})`,
    };

    return (
        <div className={styles.background} style={divStyle}>
            <div className={styles.answer}>
                <div className={styles.question}>
                    <p>{gameContent.choice.question}</p>
                </div>
                <div className={styles.options}>
                    <div className={styles.option} onClick={nextHandler}>
                        <p>{gameContent.choice.answer1}</p>
                    </div>
                    <div className={styles.option} onClick={nextHandler}>
                        <p>{gameContent.choice.answer2}</p>
                    </div>
                    <div className={styles.option} onClick={nextHandler}>
                        <p>{gameContent.choice.answer3}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choice;
