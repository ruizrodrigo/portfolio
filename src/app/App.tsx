import React from 'react';
import s from './App.module.css';
import { Start } from '../pages/StartPage';
import { About } from '../pages/AboutPage';
import { Projects } from '../pages/ProjectsPage';
import { Contact } from '../pages/ContactPage';

function App() {
  return (
    <div className={s.mainContainer}>
      <div id='start' className={s.sectionContainer}>
        <Start/>
      </div>
      <div id='about' className={s.sectionContainer}>
        <About/>
      </div>
      <div id='projects' className={s.sectionContainer}>
        <Projects/>
      </div>
      <div id='contact' className={s.sectionContainer}>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
