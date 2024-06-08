import React from "react";
import { useLocation } from "react-router-dom";

const ResultScreen = ({ resetGame }) => {
    const location = useLocation();
    const { matchedPerson } = location.state;

    return (
        <div>
            <h1>게임 결과</h1>
            <p>당신의 최종 매칭 상대는 {matchedPerson}입니다!</p>
            <button onClick={resetGame}>Replay</button>
        </div>
    );
};

export default ResultScreen;
