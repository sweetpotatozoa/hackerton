import React, { useEffect, useState } from 'react';
import styles from './Ending4.module.css';
import { useNavigate } from 'react-router-dom';

function Ending4() {
    const [user, setUser] = useState('');
    const [final, setFinal] = useState('');
    const [playerName, setPlayerName] = useState('');
    const [playerImage, setPlayerImage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // localStorage에서 값을 가져와 state에 설정
        const storedUser = localStorage.getItem('username');
        const storedFinal = localStorage.getItem('finalText');
        const storedPlayerName = localStorage.getItem('playerName'); // 플레이어 이름
        setUser(storedUser);
        setFinal(storedFinal);
        setPlayerName(storedPlayerName);

        // 플레이어 이름에 대응하는 이미지 설정
        let imagePath = '';
        if (storedPlayerName === 'dowon') {
            imagePath = '/img/face_dowon.png';
        } else if (storedPlayerName === 'sangwoo') {
            imagePath = '/img/face_sangwoo.png';
        } else if (storedPlayerName === 'sanghyun') {
            imagePath = '/img/face_sanghyun.png';
        } else if (storedPlayerName === 'jaeyoon') {
            imagePath = '/img/face_jaeyoon.png';
        } else if (storedPlayerName === 'sungmin') {
            imagePath = '/img/face_sungmin.png';
        } else if (storedPlayerName === 'hayoung') {
            imagePath = '/img/face_hayoung.png';
        } else if (storedPlayerName === 'jieun') {
            imagePath = '/img/face_jieun.png';
        } else if (storedPlayerName === 'heejae') {
            imagePath = '/img/face_heejae.png';
        }
        setPlayerImage(imagePath);
    }, []); // useEffect가 한 번만 실행되도록 빈 배열을 전달

    const handleHomeClick = () => {
        // 홈으로 이동
        navigate(`/Home`);
    };

    const handleReplayClick = () => {
        // LocalStorage 초기화
        localStorage.clear();
        // 홈으로 이동
        navigate(`/`);
    };

    return (
        <div className={styles.container}>
            <img className={styles.logo} src="/img/NextLogo.svg" alt="NextLogo" />
            <img className={styles.background} src="/img/school.svg" alt="school" />
            <div className={styles.middleSection}>
                <img className={styles.leftImage} src={playerImage} alt="player" />
                <div className={styles.righttext}>
                    {user}님에게 가장 높은 호감도를
                    <br />
                    <br />
                    보인 {final}가 데이트 신청을 했습니다.
                </div>
            </div>
            <button className={styles.returnButton} onClick={handleReplayClick}>
                Replay
            </button>
        </div>
    );
}

export default Ending4;
