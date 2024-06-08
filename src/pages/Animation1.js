import React from "react";
import { useNavigate } from "react-router-dom";
import "./Animation.css";
import animationImage from "../assets/images/animation1.png";

const Animation1 = () => {
    const navigate = useNavigate();

    const handleNextClick = () => {
        new Audio("/audios/audio2.mp3").play();
        navigate("/animation2");
    };

    return (
        <div className="animation-container">
            <img src={animationImage} alt="Animation1" className="animation-image" />
            <button className="next-button" onClick={handleNextClick}>
                다음으로 넘어가기
            </button>
        </div>
    );
};

export default Animation1;
