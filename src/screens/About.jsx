import React, { useState, useEffect } from 'react';

import './styles/about.css';

export default function About() {
  const [tabView, setTabView] = useState('Summary');
  const [currentTab, updateCurrentTab] = useState('Summary')

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openTab = (tab) => {
    setTabView(tab);
    updateCurrentTab(tab);
  }

  return (
    <>
      <div className="tab">
        <button className={currentTab === "Summary" ? "active-tab" : ""} onClick={() => openTab('Summary')}>Summary</button>
        <button className={currentTab === "Background" ? "active-tab" : ""} onClick={() => openTab('Background')}>Background</button>
        <button className={currentTab === "Skills" ? "active-tab" : ""} onClick={() => openTab('Skills')}>Skills</button>
        <button className={currentTab === "Interests" ? "active-tab" : ""} onClick={() => openTab('Interests')}>Interests</button>
      </div>

      { tabView === 'Summary' && 
        <div id="Summary" className="content">
          <p className="p-with-indent">My name is Cassandra Doeinck, a.k.a. Void. I am a software engineer and digital artist with a diverse background grounded in experimentation, science and learning. My approach blends my various artistic, technical, and communication skills to create aesthetic and intuitive solutions to problems. I attribute my successes to my creative approach to problem solving, my attention to detail, and my ability to connect with and determine the needs of others.</p>
        </div>
      }

      { tabView === 'Background' &&
        <div id="Background" className="content">
          <p className="p-with-indent">My passion for programming and art can be attributed to my long-held love of video games, anime, and fantastic creatures. I was drawing from a young age, exposed to anime before I started Kindergarten, and I received a Game Boy Color and a couple of games shortly after my fifth birthday, including a copy of Pokémon Red. A few months later, a friend of mine stuck it into his Gameshark, showing me a new layer beneath the visual façade. I learned about Missingno. and other game glitches, and went on to look for glitches in every subsequent game I have owned, even discovering my own in Spyro: Year of the Dragon.</p>
          <p className="p-with-indent">By fourth grade, video games had become a part of my life, playing them on both my PC and  Playstation 2. One day, my peers showed me Neopets, a website with a plethora of Flash games which fascinated me. I wanted to learn how it was made. At the end of that school year, we were all tasked with making our first Powerpoint presentations. I did mine on HTML and was met by blank looks from my peers.</p>
          <p className="p-with-indent">After High School, I went to college and got my degrees in Biology. You might be wondering, "What happened? Why didn't you go for Computer Science or Game Design?" That's a story for another time. Besides, I <i>was</i> told I could double major or minor in CompSci or Game Design, but I didn't have enough time. Biology took it all up with experiments, reports, and research papers.</p>
          <p className="p-with-indent">When I finished college, I began searching for any position that would let me exercise what I learned, eventually finding a teaching position at a learning center.</p>
          <p className="p-with-indent">Working at the learning center, I became acquainted with a younger demographic; children and teens in grades K-12. In teaching them, I learned how to adapt to different learning styles and needs, and also discovered that I worked best with special needs students. I learned how to engage them and keep them interested in the work, while I brushed up on my math and science skills. It was a very stressful job, but it was rewarding to see the students succeed.</p>
          <p className="p-with-indent">Two years later, I needed to find a job with better pay, becoming a Bus Matron for children and adults with special needs. It's a high-stress job that tires me out, but I enjoy being around the children; I enjoy that I can discuss anime and video games with them and make them feel heard and understood.</p>
          <p className="p-with-indent">My calling was and always will be programming and everything I can build using programming skills. I want to create amazing webpages, applications, and video games. I don't want to just enjoy what I'm doing; I want to love everything I do and always feel a sense of accomplishment.</p>
        </div>
      }

      { tabView === 'Skills' &&
        <div id="Skills" className="content skill-grid">
          <div className="programming-skills">
            <h1 className="skill-section">Programming</h1>
            <ul className="skills">
              <li>C++</li>
              <li>Cascading Style Sheets (CSS)</li>
              <li>Express.js</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>HTML</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Microsoft Visual Studio Code</li>
              <li>MongoDB</li>
              <li>Node.js</li>
              <li>React.js</li>
              <li>Ruby</li>
              <li>Ruby on Rails</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="art-misc-skills">
            <h1 className="skill-section">Artistic</h1>
            <ul className="skills">
              <li>3D Modeling</li>
              <li>3D Studio Max</li>
              <li>Drawing</li>
              <li>FL Studio</li>
              <li>Maya</li>
              <li>Machinima</li>
              <li>Paint.NET</li>
              <li>Paint Tool SAI</li>
            </ul>

            <h1 className="skill-section">Miscellaneous</h1>
            <ul className="skills">
              <li>Creative Problem Solving</li>
              <li>Research</li>
              <li>Teaching</li>
              <li>Writing</li>
            </ul>
          </div>
        </div>
      }

      { tabView === 'Interests' &&
        <div id="Interests" className="content">
          <p>Other Stuff.</p>
        </div>
      }
    </>
  );
}
