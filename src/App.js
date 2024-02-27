import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import TrickList from './pages/TrickList';
import TrickTutorial from './pages/TrickTutorial';
import TrickMenu from './pages/TrickMenu';
import * as Data from "./data/tricks";
import sonic from './data/tricks/sonicsData';
import charge from './data/tricks/chargesData';
import pass from './data/tricks/passesData';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />}/>
        <Route path="/tricks" element={<TrickMenu />}/>

        {Data.trickCategoryL.map((cat, index) => (
          <Route path={`tricks/${cat}`} key={index} element={<TrickList cat={cat}/>}/>
        ))}

        {/* 
          //TODO
          in this code the map function generate hidden path for the 'cat' in tricks data which is the first index of the data, it must be fix
        */}

        {sonic.map((trick, index) => (
          <Route path={`/tutorial/${trick.name}`} key={index} element={<TrickTutorial trick={trick}/>}/>
        ))}

        {charge.map((trick, index) =>(
          <Route path={`/tutorial/${trick.name}`} key={index} element={<TrickTutorial trick={trick}/>}/>
        ))}

        {pass.map((trick, index) =>(
          <Route path={`/tutorial/${trick.name}`} key={index} element={<TrickTutorial trick={trick}/>}/>
        ))}

        {/*
          //TODO END 
        */}

        <Route path="*" element={<Home />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
