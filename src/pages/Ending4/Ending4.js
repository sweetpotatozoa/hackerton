import React from 'react';
import styles from './Ending4.module.css';
import { useNavigate } from 'react-router-dom';

function Ending4({ gameData, setGameData }) {
    const navigate = useNavigate();
    console.log('gameData', gameData);

    const handleReplayClick = () => {
        // LocalStorage 초기화
        localStorage.clear();
        // 홈으로 이동
        navigate(`/`);
    };

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
    const characterName = topCharacterName();
    const topCharacterImage = (characterName) => {
        if (characterName === '김상우') {
            return '/images/face1.png';
        } else if (characterName === '이상현') {
            return '/images/face2.png';
        } else if (characterName === '김도원') {
            return '/images/face3.png';
        } else if (characterName === '정재윤') {
            return '/images/face4.png';
        } else if (characterName === '박지은') {
            return '/images/face1w.png';
        } else if (characterName === '김성민') {
            return '/images/face2w.png';
        } else if (characterName === '송하영') {
            return '/images/face3w.png';
        } else if (characterName === '문희재') {
            return '/images/face4w.png';
        }
    };

    const chracterImg = topCharacterImage(characterName);

    return (
        <div className={styles.container}>
            <img className={styles.logo} src="/img/NextLogo.svg" alt="NextLogo" />
            <img className={styles.background} src="/img/school.svg" alt="school" />
            <img className={styles.leftImage} src={chracterImg} alt="player" />
            <div className={styles.imoji}>💌</div>

            <div className={styles.righttext}>
                {gameData.name}님에게 가장 높은 호감도를
                <br />
                보인 {topCharacterName()}이(가) 데이트 신청을 했습니다.
            </div>
            <button className={styles.returnButton} onClick={handleReplayClick}>
                Replay
            </button>
        </div>
    );
}

export default Ending4;
