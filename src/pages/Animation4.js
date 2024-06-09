import React from "react";
import { useNavigate } from "react-router-dom";
import "./Animation.css";
import animationImage from "../assets/images/animation4.png";

const Animation4 = () => {
    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate("/chapter/1");
    };

    return (
        <div className="animation-container">
            <img src={animationImage} alt="Animation4" className="animation-image" />
            <button className="next-button" onClick={handleNextClick}>
                다음으로 넘어가기
            </button>
        </div>
    );
};

export default Animation4;
