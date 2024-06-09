import React, { useEffect, useState } from 'react';
import styles from './Change.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const Change = (props) => {
    const { chapter, setChapter, gameContent, gameData } = props;
    const { chapterId } = useParams();
    const navigate = useNavigate();

    const [gender, setGender] = useState('');
    const [affinity, setAffinity] = useState({
        character1: 50,
        character2: 50,
        character3: 50,
        character4: 50,
    });

    useEffect(() => {
        const savedGameData = JSON.parse(localStorage.getItem('gameData'));
        if (savedGameData && savedGameData.gender) {
            setGender(savedGameData.gender);
        }
        if (savedGameData && savedGameData.affinity) {
            setAffinity(savedGameData.affinity);
        }
    }, []);

    const nextHandler = () => {
        if (chapterId === '8') {
            navigate('/Ending1');
            return;
        }
        const nextChapterId = parseInt(chapterId.match(/\d+/)[0], 10) + 1;
        setChapter(nextChapterId);
        navigate(`/chapter/${nextChapterId}`);
    };

    const imgChanger = { backgroundImage: `url(${gameContent.change.url})` };

    const faceImages =
        gender === 'male'
            ? ['/images/face1w.png', '/images/face2w.png', '/images/face3w.png', '/images/face4w.png']
            : ['/images/face1.png', '/images/face2.png', '/images/face3.png', '/images/face4.png'];

    return (
        <div className={styles.background} onClick={nextHandler}>
            <div className={styles.blurImage} style={imgChanger}></div>
            <div className={styles.faces}>
                {faceImages.map((faceImage, index) => (
                    <div className={styles.face} key={index}>
                        <img src={faceImage} alt="change" />
                        <div className={styles.gauge}>
                            <div
                                className={styles.fill}
                                style={{ width: `${affinity[`character${index + 1}`]}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Change;
