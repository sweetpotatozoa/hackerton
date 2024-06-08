import React from "react";
import { useNavigate } from "react-router-dom";
import "./Animation.css";
import animationImage from "../assets/images/animation2.png";

const Animation2 = () => {
    const navigate = useNavigate();

    const handleNextClick = () => {
        new Audio("/audios/audio3.mp3").play();
        navigate("/animation3");
    };

    return (
        <div className="animation-container">
            <img src={animationImage} alt="Animation2" className="animation-image" />
            <button className="next-button" onClick={handleNextClick}>
                다음으로 넘어가기
            </button>
        </div>
    );
};

export default Animation2;
