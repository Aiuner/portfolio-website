import React, { useState } from 'react'

import './styles/home.css';

export default function Home() {
  const [tabView, setTabView] = useState('Homepage');

  const openTab = (tab) => {
    setTabView(tab);
  }

  return (
    <div>
      <div className="tab">
        <button className="tablinks home" onClick={() => openTab('Homepage')}>Home</button>
      </div>

      { tabView === 'Homepage' && 
        <div id="Homepage" className="tabcontent">
          <p>Temporary Stuff.</p>
          {/* <ArticleTab article={article} deleteThisArticle={deleteThisArticle} setTabView={setTabView} currentUser={currentUser} /> */}
        </div>
      }
    </div>
  )
}
