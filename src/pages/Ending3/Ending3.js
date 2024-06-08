import React, { useEffect, useState } from 'react';
import styles from './Ending3.module.css';
import { useParams, useNavigate } from 'react-router-dom';

function Ending3() {
    const [user, setUser] = useState('');
    const [final, setFinal] = useState('');
    const navigate = useNavigate();
    const { chapterId } = useParams();

    useEffect(() => {
        // localStorage에서 값을 가져와 state에 설정
        const storedUser = localStorage.getItem('username');
        const storedFinal = localStorage.getItem('finalText');
        setUser(storedUser);
        setFinal(storedFinal);
    }, []); // useEffect가 한 번만 실행되도록 빈 배열을 전달

    const handleClick = () => {
        // 클릭 시 다음 페이지로 이동
        navigate(`/ending4`);
    };

    return (
        <div className={styles.container} onClick={handleClick}>
            <p className={styles.text1}>{final}? 이번 주말? 되긴 하는데 .. </p>
            <p className={styles.text2}>{final}</p>
            <p className={styles.text3}>{user} 이번 주말에 뭐해 </p>
            <p className={styles.text4}>같이 영화 볼래?</p>

            <img className={styles.img} src="/img/talk.svg" alt="talk" />
        </div>
    );
}

export default Ending3;
