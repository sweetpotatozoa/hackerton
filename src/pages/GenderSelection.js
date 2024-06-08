import React, { useState } from 'react';
import './GenderSelection.css';
import femaleImage from '../assets/images/female.png';
import maleImage from '../assets/images/male.png';
import { useNavigate } from 'react-router-dom';

const GenderSelection = ({ gameData, setGameData, selectGender }) => {
    const navigate = useNavigate();

    const [selectedGender, setSelectedGender] = useState(null);

    const handleGenderClick = (gender) => {
        setGameData({ ...gameData, gender: gender });
        setSelectedGender(gender);
        new Audio(`/audios/${gender}_letsgo.m4a`).play();
    };

    const handleNextClick = () => {
        if (selectedGender) {
            new Audio('/audios/audio1.mp3').play();
            selectGender(selectedGender);
            navigate('/animation1');
        } else {
            alert('성별을 선택하세요.');
        }
    };

    return (
        <div className="gender-selection">
            <h1>성별을 선택하세요.</h1>
            <div className="gender-buttons">
                <button
                    className={`gender-button ${selectedGender === 'female' ? 'selected' : ''}`}
                    onClick={() => handleGenderClick('female')}
                >
                    <img src={femaleImage} alt="Female" />
                </button>
                <button
                    className={`gender-button ${selectedGender === 'male' ? 'selected' : ''}`}
                    onClick={() => handleGenderClick('male')}
                >
                    <img src={maleImage} alt="Male" />
                </button>
            </div>
            <button className="next-button" onClick={handleNextClick}>
                다음으로 넘어가기
            </button>
        </div>
    );
};

export default GenderSelection;
