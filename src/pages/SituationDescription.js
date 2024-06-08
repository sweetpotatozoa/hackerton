import React from "react";
import { useNavigate } from "react-router-dom";
import "./SituationDescription.css";

const SituationDescription = () => {
    const navigate = useNavigate();

    return (
        <div className="situation-description">
            <button className="next-button" onClick={() => navigate("/animation1")}>
                시작
            </button>
        </div>
    );
};

export default SituationDescription;
