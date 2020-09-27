import React, { useState } from 'react';

export default function Projects() {
  const [tabView, setTabView] = useState('');

  const openTab = (tab) => {
    setTabView(tab);
  }

  return (
    <>
      <div className="tab">
        <button className="tablinks" onClick={() => openTab('CodingProjects')}>Coding Projects</button>
        <button className="tablinks" onClick={() => openTab('OtherProjects')}>Other Projects</button>
      </div>

      { tabView === 'CodingProjects' && 
        <div id="CodingProjects" className="content">
          <p>Something</p>
        </div>
      }

      { tabView === 'OtherProjects' &&
        <div id="OtherProjects" className="content">
          <p>Something else</p>
        </div>
      }
    </>
  );
}
