import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        <ul className="contact-info">
          <li>Discord: ﴾ Ṿ☼ЇƉ ﴿ [they/them]#9441</li>
          <li>GitHub: <Link to="https://github.com/Aiuner" className="contact-link">Aiuner</Link></li>
          <li>LinkedIn: <Link to="https://www.linkedin.com/in/cassandradoeinck/" className="contact-link">Cassandra Doeinck</Link></li>
        </ul>
      </div>
    </>
  );
}
