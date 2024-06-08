import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/pages/Home.js";
import Guide from "./pages/pages/Guide.js"; // 경로를 올바르게 지정합니다.

function app() {
    return (
        <>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/guide" element={<Guide />} /> {/* 주석을 JSX 스타일로 수정합니다 */}
            </Routes>
        </>
    );
}

export default app;
