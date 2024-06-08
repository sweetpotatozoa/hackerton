import React from "react";

const ScenarioScreen = ({ scores, setScores, endGame }) => {
    return (
        <div>
            <h1>시나리오 진행 중...</h1>
            <button onClick={endGame}>결과 보기</button>
        </div>
    );
};

export default ScenarioScreen;
