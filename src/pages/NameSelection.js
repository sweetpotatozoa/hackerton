import React, { useState } from "react";
import backgroundImage from "../assets/images/image.png";
import "./NameSelection.css";

const NameSelection = ({ selectName }) => {
    const [name, setName] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = () => {
        if (name.trim() !== "") {
            selectName(name);
        } else {
            alert("이름을 입력해주세요.");
        }
    };

    return (
        <div className="name-selection">
            <img src={backgroundImage} alt="Name Selection Background" className="background-image" />
            <div className="input-container">
                <label className="input-label">
                    <span className="bold-text">이름</span>을 알려주세요.
                </label>
                <div className="input-wrapper">
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        className="name-input"
                        placeholder="이름을 입력하세요"
                    />
                    <button onClick={handleSubmit} className="submit-button">
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NameSelection;
