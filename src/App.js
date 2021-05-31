import React from 'react';
import {Header} from './components/Header';
import {Banner} from './components/Banner'
import {Skills} from './components/Skills'
import{Projects} from './components/Projects'
import {Experience} from './components/Experience'
import {Contact} from './components/Contact'
import './App.css';

function App() {
  return (
    <div>
     <Header />
     <Banner />
     <Skills />
     <Projects />
     <Experience />
     <Contact />
    </div>
   
  );
}

export default App;
