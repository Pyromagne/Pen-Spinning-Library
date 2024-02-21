import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import Trick from './pages/Trick';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="tutorial" element={<Tutorial />}/>
      <Route path="trick" element={<Trick />}/>

      <Route path="*" element={<Home />}/>
    </Routes>
  );
}

export default App;
