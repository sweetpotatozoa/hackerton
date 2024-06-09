import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

import styles from './Ending2.module.css';

function Ending2() {
    const navigate = useNavigate();
    const { chapterId } = useParams();
    const handleClick = () => {
        // 클릭 시 다음 페이지로 이동
        navigate(`/ending3`);
    };

    return (
        <div className={styles.container} onClick={handleClick}>
            <div className={styles.container}>
                <img src="/img/notebook.svg" />
            </div>
        </div>
    );
}

export default Ending2;
