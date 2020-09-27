import React, { useState } from 'react'

export default function About() {
  const [tabView, setTabView] = useState('');

  const openTab = (tab) => {
    setTabView(tab);
  }

  return (
    <>
      <div className="tab">
        <button className="tablinks" onClick={() => openTab('Summary')}>Summary</button>
        <button className="tablinks" onClick={() => openTab('Background')}>Background</button>
        <button className="tablinks" onClick={() => openTab('Skills')}>Skills</button>
        <button className="tablinks" onClick={() => openTab('Interests')}>Interests</button>
      </div>

      { tabView === 'Summary' && 
        <div id="Summary" className="content">
          <p>Temporary Stuff.</p>
        </div>
      }

      { tabView === 'Background' &&
        <div id="Background" className="content">
          <p>Other Stuff.</p>
        </div>
      }

      { tabView === 'Skills' &&
        <div id="Skills" className="content">
          <p>Other Stuff.</p>
        </div>
      }

      { tabView === 'Interests' &&
        <div id="Interests" className="content">
          <p>Other Stuff.</p>
        </div>
      }
    </>
  )
}
