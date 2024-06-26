import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Guide from './pages/Guides';
import Mods from './pages/Mods';
import TrickList from './pages/TrickList';
import TrickTutorial from './pages/TrickTutorial';
import TrickMenu from './pages/TrickMenu';
import About from './pages/About';
import * as Data from "./data/tricks";
import sonic from './data/tricks/sonicsData';
import charge from './data/tricks/chargesData';
import pass from './data/tricks/passesData';
import wiper from './data/tricks/wipersData';
import around from './data/tricks/aroundsData';
import spin from './data/tricks/spinsData';
import aerial from './data/tricks/aerialsData';
import otherAdvance from './data/tricks/otherAdvance';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useStateContext } from './context/contextProvider';

function App() {

  const {isHome} = useStateContext();
  const {isDark} = useStateContext();
  
  return (
    <>
      <Navbar isHome={isHome}/>
      <div className={`flex-grow ${isDark ? 'dark-mode' : 'light-mode'}`}>
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path="/guide" element={<Guide />}/>
          <Route path="/tricks" element={<TrickMenu />}/>
          <Route path="/mods" element={<Mods />}/>
          <Route path="/about" element={<About />}/>

          {Data.trickCategoryList.map((cat, index) => (
            <Route path={`/tricks/${cat}`} key={index} element={<TrickList cat={cat}/>}/>
          ))}

          {/* 
            //TODO (FUTURE UPDATE)
            - in this code the map function generate hidden path for the 'cat' in tricks data which is the first index of the data, it must be fix
            - use parameterized url (better)
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

          {wiper.map((trick, index) =>(
            <Route path={`/tutorial/${trick.name}`} key={index} element={<TrickTutorial trick={trick}/>}/>
          ))}

          {around.map((trick, index) =>(
            <Route path={`/tutorial/${trick.name}`} key={index} element={<TrickTutorial trick={trick}/>}/>
          ))}

          {spin.map((trick, index) =>(
            <Route path={`/tutorial/${trick.name}`} key={index} element={<TrickTutorial trick={trick}/>}/>
          ))}

          {aerial.map((trick, index) =>(
            <Route path={`/tutorial/${trick.name}`} key={index} element={<TrickTutorial trick={trick}/>}/>
          ))}

          {otherAdvance.map((trick, index) =>(
            <Route path={`/tutorial/${trick.name}`} key={index} element={<TrickTutorial trick={trick}/>}/>
          ))}

          <Route path="*" element={<Home />}/>
        </Routes>
      </div>
      <Footer/>

  </>
  );
}

export default App;
