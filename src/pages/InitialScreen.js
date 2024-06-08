import React from "react";
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

export default InitialScreen;
