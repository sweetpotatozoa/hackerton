import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './fonts.css'; // Add this line to import the font CSS

import Home from './pages/Home/Home';
import Ending1 from './pages/Ending1/Ending1';
import Ending2 from './pages/Ending2/Ending2';
import Ending3 from './pages/Ending3/Ending3';
import Ending4 from './pages/Ending4/Ending4';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ending1" element={<Ending1 />} />
            <Route path="/ending2" element={<Ending2 />} />
            <Route path="/ending3" element={<Ending3 />} />
            <Route path="/ending4" element={<Ending4 />} />
        </Routes>
    );
}

export default App;
