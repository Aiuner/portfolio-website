import React, { useState, useEffect } from 'react';

import './styles/projects.css';

export default function Projects() {
  const [tabView, setTabView] = useState('CodingProjects');
  const [currentTab, updateCurrentTab] = useState('CodingProjects');

  const [displayedProject, updateDisplayedProject] = useState('pokemon-dareda');
  const [currentProject, updateCurrentProject] = useState('pokemon-dareda');
  const projImg= null;
  const projLink= null;
  const projCode= null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openTab = (tab) => {
    setTabView(tab);
    updateCurrentTab(tab);
  }

  const selectProject = (name) => {
    updateDisplayedProject(name);
    updateCurrentProject(name);
    switch(name) {
      case 'pokemon-dareda':
        break;
      case 'vvg':
        break;
      case 'full-stack-blog':
        break;
      case 'ehr':
        break;
      case 'apotheCo':
        break;
      case 'voids-portfolio':
        break;
      // artistic projects below
      case 'totg':
        break;
      default:
        break;
    }
  }

  



  return (
    <>
      <div className="tab">
        <button className={currentTab === "CodingProjects" ? "active-tab" : ""} onClick={() => openTab('CodingProjects')}>Coding Projects</button>
        <button className={currentTab === "OtherProjects" ? "active-tab" : ""} onClick={() => openTab('OtherProjects')}>Digital Art Projects</button>
      </div>

      { tabView === 'CodingProjects' && 
        <div id="CodingProjects" className="content project-grid">
          <div className="left-is-list">
            <ul className="projects">
              <li className="project-names">
                <button 
                  className={`${currentProject === "pokemon-dareda" ? "active-project" : ""} project-button`}
                  onClick={() => selectProject('pokemon-dareda')}>Pokémon "Dare Da?"</button></li>

              <li className="project-names">
                <button 
                  className={`${currentProject === "vvg" ? "active-project" : ""} project-button`}
                  onClick={() => selectProject('vvg')}>Void's Virtual Grimoire</button></li>

              <li className="project-names">
                <button 
                  className={`${currentProject === "full-stack-blog" ? "active-project" : ""} project-button`}
                  onClick={() => selectProject('full-stack-blog')}>The Circuit Bluetooth Blog Animal Posting Website For People Over 9000 16.2.0 (A Full Stack Blog App)</button></li>

              <li className="project-names"><button 
                  className={`${currentProject === "ehr" ? "active-project" : ""} project-button`}
                  onClick={() => selectProject('ehr')}>Eleventh Hour Rescue (Redesign)</button></li>

              <li className="project-names"><button 
                  className={`${currentProject === "apotheCo" ? "active-project" : ""} project-button`}
                  onClick={() => selectProject('apotheCo')}>ApotheCo</button></li>

              <li className="project-names"><button 
                  className={`${currentProject === "voids-portfolio" ? "active-project" : ""} project-button`}
                  onClick={() => selectProject('voids-portfolio')}>Void's Portfolio Site</button></li>
            </ul>
          </div>
          
          <div className="right-is-project" style={{backgroundImage: `url(${projImg})`}}>
            
          </div>
        </div>
      }

      { tabView === 'OtherProjects' &&
        <div id="OtherProjects" className="content project-grid">
          <div className="left-is-list">
            <ul className="projects">
              <li className="project-names">Trials of the Gauntlet</li>
            </ul>
          </div>

          <div className="right-is-project">
            
          </div>
        </div>
      }
    </>
  );
}
