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
                character1: gameData.affinity.character1 + 10,
                character1: gameData.affinity.character2 + 10,
                character1: gameData.affinity.character3 - 20,
                character4: gameData.affinity.character4 + 20,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }
        if (chapterId === '1' && value === '3') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 - 20,
                character4: gameData.affinity.character4 - 10,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }
        if (chapterId === '2' && value === '1') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 + 10,
                character2: gameData.affinity.character2 + 10,
                character3: gameData.affinity.character3 - 20,
                character4: gameData.affinity.character4 - 20,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }

        if (chapterId === '2' && value === '2') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 - 20,
                character2: gameData.affinity.character2 - 20,
                character3: gameData.affinity.character3 + 10,
                character4: gameData.affinity.character4 + 30,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }
        if (chapterId === '2' && value === '3') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 + 20,
                character2: gameData.affinity.character2 + 20,
                character3: gameData.affinity.character3 - 10,
                character4: gameData.affinity.character4 - 30,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }

        if (chapterId === '3' && value === '1') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character2: gameData.affinity.character2 + 10,
                character3: gameData.affinity.character3 + 10,
                character4: gameData.affinity.character4 - 20,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }

        if (chapterId === '3' && value === '2') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character2 + 20,
                character4: gameData.affinity.character4 - 10,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }

        if (chapterId === '3' && value === '3') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 + 20,
                character2: gameData.affinity.character2 + 10,
                character4: gameData.affinity.character4 - 10,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }

        if (chapterId === '4' && value === '1') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character2: gameData.affinity.character2 + 10,
                character4: gameData.affinity.character4 - 10,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }

        if (chapterId === '4' && value === '2') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 + 10,
                character3: gameData.affinity.character3 - 20,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }

        if (chapterId === '4' && value === '3') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 - 10,
                character3: gameData.affinity.character3 + 20,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }

        if (chapterId === '5' && value === '1') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 + 30,
                character2: gameData.affinity.character2 - 20,
                character3: gameData.affinity.character3 + 10,
                character4: gameData.affinity.character4 + 10,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }

        if (chapterId === '5' && value === '2') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 - 10,
                character2: gameData.affinity.character2 + 20,
                character3: gameData.affinity.character3 - 20,
                character4: gameData.affinity.character4 - 20,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }
        if (chapterId === '5' && value === '3') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 - 10,
                character2: gameData.affinity.character2 + 10,
                character3: gameData.affinity.character3 - 10,
                character4: gameData.affinity.character4 + 10,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }

        if (chapterId === '6' && value === '1') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 + 10,
                character2: gameData.affinity.character2 + 20,
                character3: gameData.affinity.character3 - 10,
                character4: gameData.affinity.character4 - 30,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }

        if (chapterId === '6' && value === '2') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 + 20,
                character2: gameData.affinity.character2 - 30,
                character3: gameData.affinity.character3 - 20,
                character4: gameData.affinity.character4 + 10,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }

        if (chapterId === '6' && value === '3') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 - 10,
                character2: gameData.affinity.character2 + 20,
                character3: gameData.affinity.character3 + 10,
                character4: gameData.affinity.character4 + 20,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }

        if (chapterId === '7' && value === '1') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 - 10,
                character2: gameData.affinity.character2 + 20,
                character3: gameData.affinity.character3 + 10,
                character4: gameData.affinity.character4 + 20,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }

        if (chapterId === '7' && value === '2') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 + 30,
                character2: gameData.affinity.character2 + 20,
                character3: gameData.affinity.character3 - 40,
                character4: gameData.affinity.character4 - 20,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }

        if (chapterId === '7' && value === '3') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 - 10,
                character2: gameData.affinity.character2 + 20,
                character3: gameData.affinity.character3 - 20,
                character4: gameData.affinity.character4 - 20,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }
        if (chapterId === '8' && value === '1') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 - 10,
                character2: gameData.affinity.character2 + 20,
                character3: gameData.affinity.character3 - 20,
                character4: gameData.affinity.character4 - 20,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }
        if (chapterId === '8' && value === '2') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 + 10,
                character2: gameData.affinity.character2 - 20,
                character3: gameData.affinity.character3 + 20,
                character4: gameData.affinity.character4 + 20,
            };

            // gameData 업데이트
            setGameData({ ...gameData, affinity: newAffinity });

            // 페이지 이동
            navigate(`/chapter/${chapterId}/Change`);
        }
        if (chapterId === '8' && value === '3') {
            // 예시: character1의 affinity 증가
            const newAffinity = {
                ...gameData.affinity,
                character1: gameData.affinity.character1 + 10,
                character4: gameData.affinity.character4 - 10,
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
                        {gameContent.choice.answer1}
                    </div>
                    <div className={styles.option} onClick={nextHandler} data-value="2">
                        {gameContent.choice.answer2}
                    </div>
                    <div className={styles.option} onClick={nextHandler} data-value="3">
                        {gameContent.choice.answer3}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choice;
