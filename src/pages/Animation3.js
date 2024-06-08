import React from "react";
import { useNavigate } from "react-router-dom";
import "./Animation.css";
import animationImage from "../assets/images/animation3.png";

const Animation3 = () => {
    const navigate = useNavigate();

    const handleNextClick = () => {
        new Audio("/audios/audio4.mp3").play();
        navigate("/animation4");
    };

    return (
        <div className="animation-container">
            <img src={animationImage} alt="Animation3" className="animation-image" />
            <button className="next-button" onClick={handleNextClick}>
                다음으로 넘어가기
            </button>
        </div>
    );
};

export default Animation3;
