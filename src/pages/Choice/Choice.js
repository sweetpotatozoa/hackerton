import styles from './Choice.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const Choice = (props) => {
    const { chapter, setChapter, gameContent, gameData, setGameData } = props;
    const { chapterId } = useParams();
    const navigate = useNavigate();
    const nextHandler = (e) => {
        const value = e.target.dataset.value;
        if (chapterId === '1' && value === '1') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 + 5,
                character4: gameData.affinity.character4 + 10,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }
        if (chapterId === '1' && value === '2') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 + 5,
                character4: gameData.affinity.character4 + 10,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }
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
                    <div className={styles.option} onClick={nextHandler} data-value="1">
                        <p>{gameContent.choice.answer1}</p>
                    </div>
                    <div className={styles.option} onClick={nextHandler} data-value="2">
                        <p>{gameContent.choice.answer2}</p>
                    </div>
                    <div className={styles.option} onClick={nextHandler} data-value="3">
                        <p>{gameContent.choice.answer3}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choice;
