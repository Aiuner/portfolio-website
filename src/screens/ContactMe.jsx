import React, { useState } from 'react';

import './styles/contactme.css';

export default function ContactMe() {
  const [tabView, setTabView] = useState('Contact-Information');

  const openTab = (tab) => {
    setTabView(tab);
  }

  return (
    <div>
      <div className="tab">
        <button className="tablinks contact-me" onClick={() => openTab('Contact-Information')}>Contact Information</button>
      </div>

      { tabView === 'Contact-Information' && 
        <div id="Contact-Information" className="tabcontent">
          <p>Temporary Stuff.</p>
          {/* <ArticleTab article={article} deleteThisArticle={deleteThisArticle} setTabView={setTabView} currentUser={currentUser} /> */}
        </div>
      }
    </div>
  );
}
