import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
            </Routes>
        </>
    );
}

export default App;
