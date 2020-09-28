import React, { useState, useEffect } from 'react';

export default function Projects() {
  const [tabView, setTabView] = useState('CodingProjects');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openTab = (tab) => {
    setTabView(tab);
  }

  return (
    <>
      <div className="tab">
        <button onClick={() => openTab('CodingProjects')}>Coding Projects</button>
        <button onClick={() => openTab('OtherProjects')}>Other Projects</button>
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
