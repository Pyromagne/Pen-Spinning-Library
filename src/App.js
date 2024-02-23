import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import TrickCategory from './pages/TrickCategory';
import Trick from './pages/Trick';
import * as Data from "./data";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="tutorial" element={<Tutorial />}/>
      <Route path="tricks" element={<Trick />}/>

      {Data.trickCategoryL.map((cat, index) => (
        <Route path={`tricks/${cat}`} key={index} element={<TrickCategory cat={cat}/>}/>
      ))}

      <Route path="*" element={<Home />}/>

    </Routes>
  );
}

export default App;
