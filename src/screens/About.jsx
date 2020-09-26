import React, { useState } from 'react'

export default function About() {
  const [tabView, setTabView] = useState('Summary');

  const openTab = (tab) => {
    setTabView(tab);
  }

  return (
    <div>
      <div className="tab">
        <button className="tablinks" onClick={() => openTab('Summary')}>Summary</button>
        <button className="tablinks" onClick={() => openTab('Background')}>Background</button>
        <button className="tablinks" onClick={() => openTab('Skills')}>Skills</button>
        <button className="tablinks" onClick={() => openTab('Interests')}>Interests</button>
      </div>

      { tabView === 'Summary' && 
        <div id="Summary" className="tabcontent">
          <p>Temporary Stuff.</p>
          {/* <ArticleTab article={article} deleteThisArticle={deleteThisArticle} setTabView={setTabView} currentUser={currentUser} /> */}
        </div>
      }

      { tabView === 'Background' &&
        <div id="Background" className="tabcontent">
          <p>Other Stuff.</p>
          {/* <ArticleEditor article={article} editThisArticle={editThisArticle} /> */}
        </div>
      }

      { tabView === 'Skills' &&
        <div id="Skills" className="tabcontent">
          <p>Other Stuff.</p>
          {/* <ArticleEditor article={article} editThisArticle={editThisArticle} /> */}
        </div>
      }

      { tabView === 'Interests' &&
        <div id="Interests" className="tabcontent">
          <p>Other Stuff.</p>
          {/* <ArticleEditor article={article} editThisArticle={editThisArticle} /> */}
        </div>
      }
    </div>
  )
}
