import React from 'react';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
library.add(faBars);

function App() {
  return (
    <div className="App">
      <header id="header-container">
        <img 
          src="https://i.kym-cdn.com/entries/icons/facebook/000/003/047/omg.jpg" 
          alt="handsome-squidward" 
          id="logo"
        />
        <nav id="nav-links">
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
        </nav>
        <FontAwesomeIcon icon="bars" id="hamburger"/>
      </header>
      <div id="rotate-box"></div>
      <div id="transition-box"></div>
    </div>
  );
}

export default App;
