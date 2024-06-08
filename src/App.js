import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import InitialScreen from "./pages/InitialScreen";
import NameSelection from "./pages/NameSelection";
import GenderSelection from "./pages/GenderSelection";
import Animation1 from "./pages/Animation1";
import Animation2 from "./pages/Animation2";
import Animation3 from "./pages/Animation3";
import Animation4 from "./pages/Animation4";
import NextButtonScreen from "./pages/NextButtonScreen";
import ResultScreen from "./pages/ResultScreen";
<<<<<<< HEAD
=======
import Guide from "./pages/Guide"; // 추가된 부분
>>>>>>> c740b3e (jieun_merge)

const App = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [scores, setScores] = useState({ A: 0, B: 0, C: 0, D: 0 });

    const navigate = useNavigate();

    const startGame = () => {
        navigate("/nameSelection");
        new Audio("/audios/princess_maker.mp3").play();
    };

    const selectName = (enteredName) => {
        setName(enteredName);
        navigate("/genderSelection");
    };

    const selectGender = (selectedGender) => {
        setGender(selectedGender);
        new Audio(`/audios/${selectedGender}_letsgo.m4a`).play();
        navigate("/animation1");
    };

    const endGame = () => {
        const highestScore = Math.max(...Object.values(scores));
        const matchedPerson = Object.keys(scores).find((person) => scores[person] === highestScore);
        navigate("/result", { state: { matchedPerson } });
    };

    const resetGame = () => {
        setScores({ A: 0, B: 0, C: 0, D: 0 });
        navigate("/");
        localStorage.clear();
    };

    return (
        <div style={{ width: "1000px", height: "650px" }}>
            <Routes>
                <Route path="/" element={<InitialScreen startGame={startGame} />} />
                <Route path="/nameSelection" element={<NameSelection selectName={selectName} />} />
                <Route path="/genderSelection" element={<GenderSelection selectGender={selectGender} />} />
                <Route path="/animation1" element={<Animation1 />} />
                <Route path="/animation2" element={<Animation2 />} />
                <Route path="/animation3" element={<Animation3 />} />
                <Route path="/animation4" element={<Animation4 />} />
                <Route path="/nextButtonScreen" element={<NextButtonScreen setScreen={navigate} />} />
                <Route path="/result" element={<ResultScreen resetGame={resetGame} />} />
<<<<<<< HEAD
=======
                <Route path="/guide" element={<Guide />} /> {/* 추가된 부분 */}
>>>>>>> c740b3e (jieun_merge)
            </Routes>
        </div>
    );
};

export default App;
