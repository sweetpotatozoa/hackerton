import React from "react";
<<<<<<< HEAD
import "./InitialScreen.css";
import backgroundImage from "../assets/images/initial_screen.png";

const InitialScreen = ({ startGame }) => (
    <div className="initial-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="content">
            <button onClick={startGame} className="start-button">
                시작
            </button>
            <button
                onClick={() => alert("게임 설명: 각 상황에서 선택을 통해 호감도를 높여 최종 매칭을 목표로 합니다.")}
                className="explanation-button"
            >
                설명
            </button>
        </div>
    </div>
);
=======
import { useNavigate } from "react-router-dom";
import "./InitialScreen.css";
import backgroundImage from "../assets/images/initial_screen.png";

const InitialScreen = ({ startGame }) => {
    const navigate = useNavigate();

    const goToGuide = () => {
        navigate("/guide");
    };

    return (
        <div className="initial-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="content">
                <button onClick={startGame} className="start-button">
                    시작
                </button>
                <button onClick={goToGuide} className="explanation-button">
                    설명
                </button>
            </div>
        </div>
    );
};
>>>>>>> c740b3e (jieun_merge)

export default InitialScreen;
