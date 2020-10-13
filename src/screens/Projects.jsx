import React, { useState, useEffect } from 'react';

import dareDa from '../assets/pokemon-dareda/dareda.png';
import vvg from '../assets/vvg/vvg.png';
import fsbImg from '../assets/full-stack-blog/full-stack-blog-home.png';
import ehr from '../assets/ehr/ehr.png';
import apotheco from '../assets/apotheCo/apotheco.png';


import './styles/projects.css';

export default function Projects() {
  const [tabView, setTabView] = useState('CodingProjects');
  const [currentTab, updateCurrentTab] = useState('CodingProjects');

  const [displayedProject, updateDisplayedProject] = useState('pokemon-dareda');
  const [currentProject, updateCurrentProject] = useState(displayedProject);

  const [projImg, updateProjImg] = useState(dareDa);
  const [projLink, updateProjLink] = useState('https://aiuner.github.io/Pokemon-DareDa/');
  const [projCode, updateProjCode] = useState('https://github.com/Aiuner/Pokemon-DareDa');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openTab = (tab) => {
    setTabView(tab);
    updateCurrentTab(tab);
  }

  const selectProject = (name) => {
    switch(name) {
      case 'pokemon-dareda':
        updateProjImg(dareDa);
        updateProjLink('https://aiuner.github.io/Pokemon-DareDa/');
        updateProjCode('https://github.com/Aiuner/Pokemon-DareDa');
        break;
      case 'vvg':
        updateProjImg(vvg);
        updateProjLink('https://voids-virtual-grimoire.netlify.app/');
        updateProjCode('https://github.com/Aiuner/Voids-Virtual-Grimoire');
        break;
      case 'full-stack-blog':
        updateProjImg(fsbImg);
        updateProjLink('https://wizardly-goldwasser-cbed0a.netlify.app/');
        updateProjCode('https://github.com/Aiuner/full-stack-blog');
        break;
      case 'ehr':
        updateProjImg(ehr);
        updateProjLink('https://elastic-lovelace3-0a232e.netlify.app/');
        updateProjCode('https://github.com/Aiuner/Eleventh-Hour-Rescue-Redesign');
        break;
      case 'apotheCo':
        updateProjImg(apotheco);
        updateProjLink('https://musing-nightingale-ab990b.netlify.app/');
        updateProjCode('https://github.com/Aiuner/ApotheCo');
        break;
      case 'voids-portfolio':
        updateProjImg('');
        updateProjLink('https://www.cassandralynn.dev');
        updateProjCode('https://github.com/Aiuner/portfolio-website');
        break;
      // artistic projects below
      case 'totg':
        updateProjImg('');
        updateProjLink('https://store.steampowered.com/app/764410/Trials_of_the_Gauntlet/');
        updateProjCode('');
        break;
      // default condition
      default:
        updateProjImg(dareDa);
        updateProjLink('https://aiuner.github.io/Pokemon-DareDa/');
        updateProjCode('https://github.com/Aiuner/Pokemon-DareDa');
    }
    updateDisplayedProject(name);
    updateCurrentProject(name);
  }

  return (
    <>
      <div className="tab">
        <button className={currentTab === "CodingProjects" ? "active-tab" : ""} onClick={() => openTab('CodingProjects')}>Coding Projects</button>
        <button className={currentTab === "ArtAssetProjects" ? "active-tab" : ""} onClick={() => openTab('ArtAssetProjects')}>Asset & Art Creation</button>
      </div>

      { tabView === 'CodingProjects' && 
        <div id="CodingProjects" className="content project-grid">
          <div className="left-is-list">
            <ul className="projects">
              <li className="project-names">
                <button 
                  className={`${currentProject === "pokemon-dareda" ? "active-project" : ""}`}
                  onClick={() => selectProject('pokemon-dareda')}>Pokémon "Dare Da?"</button></li>

              <li className="project-names">
                <button 
                  className={`${currentProject === "vvg" ? "active-project" : ""}`}
                  onClick={() => selectProject('vvg')}>Void's Virtual Grimoire</button></li>

              <li className="project-names">
                <button 
                  className={`${currentProject === "full-stack-blog" ? "active-project" : ""}`}
                  onClick={() => selectProject('full-stack-blog')}>"The Circuit Bluetooth Blog Animal Posting Website For People Over 9000 16.2.0"<br /><br />(A Full Stack Blog App)</button></li>

              <li className="project-names"><button 
                  className={`${currentProject === "ehr" ? "active-project" : ""}`}
                  onClick={() => selectProject('ehr')}>Eleventh Hour Rescue (Redesign)</button></li>

              <li className="project-names"><button 
                  className={`${currentProject === "apotheCo" ? "active-project" : ""}`}
                  onClick={() => selectProject('apotheCo')}>ApotheCo</button></li>

              <li className="project-names"><button 
                  className={`${currentProject === "voids-portfolio" ? "active-project" : ""}`}
                  onClick={() => selectProject('voids-portfolio')}>Void's Portfolio Site</button></li>
            </ul>
          </div>
          
          <div className="right-is-project" style={{backgroundImage: `url(${projImg})`}}>
            <button className="live-site"><a href={projLink}>Live Site</a></button>
            <button ClassName="view-code"><a href={projCode}>View Code</a></button>
          </div>
        </div>
      }

      { tabView === 'ArtAssetProjects' &&
        <div id="ArtAssetProjects" className="content project-grid">
          <div className="left-is-list">
            <ul className="projects">
              <li className="project-names"><button 
                  className={`${currentProject === "totg" ? "active-project" : ""}`}
                  onClick={() => selectProject('totg')}>Trials of the Gauntlet</button></li>
            </ul>
          </div>

          <div className="right-is-project">
            <button className="live-site"><a href={projLink}>View Content</a></button>
            <button ClassName="view-code"><a href={projCode}>View Assets</a></button>
            
          </div>
        </div>
      }
    </>
  );
}
