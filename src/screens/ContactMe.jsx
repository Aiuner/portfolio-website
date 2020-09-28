import React, { useEffect } from 'react';

import './styles/contactme.css';

export default function ContactMe() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="tab">
      <h1 className="tab-placeholder-text">Contact Me</h1>
      </div>

      <div className="content">
        <p>Something here.</p>
      </div>
    </>
  );
}
