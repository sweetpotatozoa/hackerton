import styles from './Ending3.module.css';
import { useNavigate } from 'react-router-dom';

function Ending3({ gameData }) {
    const navigate = useNavigate();
    console.log('gameData', gameData);

    console.log('gameData', gameData.name);

    const findTopCharacter = (affinity) => {
        return Object.keys(affinity).reduce((topCharacter, character) => {
            return affinity[character] > affinity[topCharacter] ? character : topCharacter;
        }, Object.keys(affinity)[0]);
    };

    const topCharacter = findTopCharacter(gameData.affinity);
    const topCharacterName = () => {
        if (gameData.gender === 'female') {
            if (topCharacter === 'character1') {
                return '김상우';
            } else if (topCharacter === 'character2') {
                return '이상현';
            } else if (topCharacter === 'character3') {
                return '김도원';
            } else if (topCharacter === 'character4') {
                return '정재윤';
            }
        } else {
            if (topCharacter === 'character1') {
                return '박지은';
            } else if (topCharacter === 'character2') {
                return '김성민';
            } else if (topCharacter === 'character3') {
                return '송하영';
            } else if (topCharacter === 'character4') {
                return '문희재';
            }
        }
    };

    const handleClick = () => {
        // 클릭 시 다음 페이지로 이동
        navigate(`/ending4`);
    };
    const characterName = topCharacterName();

    return (
        <div className={styles.container} onClick={handleClick}>
            <p className={styles.text1}>{characterName}? 이번 주말? 되긴 하는데 .. </p>

            <img className={styles.img} src="/img/talk.svg" alt="talk" />
        </div>
    );
}

export default Ending3;
