import React from 'react';
import styles from './Ending1.module.css';
import { useParams, useNavigate } from 'react-router-dom';

function Ending1() {
    const navigate = useNavigate();
    const { chapterId } = useParams();
    const handleClick = () => {
        // 클릭 시 다음 페이지로 이동
        navigate(`/ending2`);
    };

    return (
        <div className={styles.container} onClick={handleClick}>
            <div className={styles.container}>
                <p className={styles.title}>드디어 무박 해커톤도 끝났다!..이제 밀린 과제를 좀 해볼까?</p>
            </div>
        </div>
    );
}

export default Ending1;
