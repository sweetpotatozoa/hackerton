import React from "react";
import "./NextButtonScreen.css";

const NextButtonScreen = ({ setScreen }) => {
    return (
        <div className="next-button-screen">
            <button className="next-button" onClick={() => setScreen("/scenarios")}>
                다음으로 넘어가기
            </button>
        </div>
    );
};

export default NextButtonScreen;
