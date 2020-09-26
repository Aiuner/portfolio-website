import React, { useState } from 'react';

export default function Projects() {
  const [tabView, setTabView] = useState('Projects');

  const openTab = (tab) => {
    setTabView(tab);
  }

  return (
    <div>
      <div className="tab">
        <button className="tablinks" onClick={() => openTab('Projects')}>Projects</button>
        <button className="tablinks" onClick={() => openTab('Group-Projects')}>Group Projects</button>
        <button className="tablinks" onClick={() => openTab('Other-Projects')}>Other Projects</button>
      </div>

      { tabView === 'Projects' && 
        <div id="Projects" className="tabcontent">
          <p>Temporary Stuff.</p>
          {/* <ArticleTab article={article} deleteThisArticle={deleteThisArticle} setTabView={setTabView} currentUser={currentUser} /> */}
        </div>
      }

      { tabView === 'Group-Projects' &&
        <div id="Group-Projects" className="tabcontent">
          <p>Other Stuff.</p>
          {/* <ArticleEditor article={article} editThisArticle={editThisArticle} /> */}
        </div>
      }

      { tabView === 'Other-Projects' &&
        <div id="Other-Projects" className="tabcontent">
          <p>More stuff.</p>
          {/* <CommentsTab comments={comments} handleSubmitComment={handleSubmitComment} currentUser={currentUser} /> */}
        </div>
      }
    </div>
  );
}
