import './App.css';
import profilePhoto from './images/Ariel.jpeg';
import serviceImg from './images/Service.jpg';
import cardImg from './images/Card.jpg';
import shoppingImg from './images/Shopping.jpg';
import dataImg from './images/Data.jpg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="as-navbar">
      <a className="as-logo" href="#home">AS.</a>
      <ul className="as-nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#work">How I Work</a></li>
        <li><a href="#cases">Case Studies</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="as-hero" id="home">
      <div className="as-hero-text">
        <span className="as-tag">UI/UX Student · uOttawa</span>
        <h1 className="as-hero-title">
          Hi, I'm <span className="as-accent">Ariel Syal </span> 
           and a designer in the making.
        </h1>
        <p className="as-hero-sub">
          Software Engineering Student • Developer • Problem Solver
        </p>
        <a href="#cases" className="as-btn">See my work</a>
      </div>
      <div className="as-avatar-ring">
        <img src={profilePhoto} alt="Ariel Syal" className="as-avatar-img" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="as-section" id="about">
      <p className="as-label">About Me</p>
      <h2 className="as-section-title">A little more about who I am</h2>
      <div className="as-about-single">
        <p className="as-body-text">
          I'm currently in my second year of Software Engineering at the University of Ottawa,
          where I'm building a strong foundation in both programming and system design. A big
          focus right now is learning how to create user-friendly interfaces and understand the
          principles behind good design.
        </p>
        <p className="as-body-text">
          As part of my coursework, I'm taking SEG3125 Analysis and Design of User Interfaces,
          where I'm learning how to apply visual communication principles, usability concepts, and
          modern web development tools like HTML, CSS, JavaScript, and Bootstrap. Through this
          course, I'm starting to think more intentionally about how users interact with systems
          and how design choices affect their experience.
        </p>
        <p className="as-body-text">
          I'm still early in my journey, but I'm really interested in frontend development and
          creating clean, intuitive interfaces. My goal is to keep improving my technical and
          design skills so I can build software that is both functional and enjoyable to use.
        </p>
        <p className="as-body-text">
          This portfolio will grow alongside the skills I build in SEG3125. Check back as the
          case studies go live!
        </p>
      </div>
    </section>
  );
}

function HowIWork() {
  return (
    <section className="as-section as-section-alt" id="work">
      <p className="as-label">Process</p>
      <h2 className="as-section-title">How I work</h2>
      <div className="as-two-col">
        <div>
          <p className="as-body-text">
            I'm currently a 2nd year Software Engineering student at the University of Ottawa, building 
            my UI/UX design skills through SEG3125 Analysis and Design of User Interfaces. This is my 
            first time formally studying design, and this portfolio reflects my learning in real time.
          </p>
          <p className="as-body-text">
            So far I've been exploring principles of visual communication including colour
            typography, iconography and learning how to apply them to real interface design decisions.
          </p>
          <p className="as-body-text">
            As the semester progresses I'll be adding more design concepts and methods to this section as I learn them.
          </p>
          <div className="as-concepts">
            <p className="as-concepts-label">Design Concepts</p>
            <div className="as-concepts-list">
              <span className="as-concept-pill as-concept-active">Visual Communication</span>
              <span className="as-concept-pill as-concept-active">User-Centered Design</span>
              <span className="as-concept-pill as-concept-active">Gestalt Principles</span>
              <span className="as-concept-pill as-concept-active">Usability Heuristics</span>
              <span className="as-concept-pill as-concept-active">Verbal Communication</span>
              <span className="as-concept-pill as-concept-active">Data Visualization</span>
              <span className="as-concept-pill as-concept-active">Internationalization</span>
            </div>
          </div>
        </div>
        <div className="as-card">
          <h4 className="as-card-title">Resources I'm learning from</h4>
          <ul className="as-link-list">
            <li>
              <a href="https://www.nngroup.com/" target="_blank" rel="noreferrer" className="as-link">
                Nielsen Norman Group (NN/g)
              </a>
            </li>
            <li>
              <a href="https://www.interaction-design.org/" target="_blank" rel="noreferrer" className="as-link">
                Interaction Design Foundation
              </a>
            </li>
            <li>
              <a href="https://www.w3schools.com/bootstrap5/" target="_blank" rel="noreferrer" className="as-link">
                Bootstrap 5 — W3Schools
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const cases = [
    { img: serviceImg,  tag: 'Assignment 2 · Service Site',  title: 'Local Service Business', externalLink: 'https://hairbyariel.netlify.app/' },
    { img: cardImg,     tag: 'Assignment 3 · Memory Game',   title: 'Jeu de Mémoire',         externalLink: 'https://forgetmenotbyariel.netlify.app/' },
    { img: shoppingImg, tag: 'Assignment 4 · E-Commerce',    title: 'Online Store',            externalLink: 'https://studio2000.netlify.app/' },
    { img: dataImg,     tag: 'Assignment 5 · Analytics',     title: 'Data Dashboard',          externalLink: 'https://foodpricesdashboardbyariel.netlify.app/' },
  ];
  
  return (
    <section className="as-section" id="cases">
      <p className="as-label">Work</p>
      <h2 className="as-section-title">Case Studies</h2>
      <p className="as-body-text" style={{ maxWidth: '55ch', marginBottom: '3rem' }}>
        Four projects I'll complete this semester as part of SEG3125. Check back as they go live!
      </p>
      <div className="as-four-col">
        {cases.map(c => (
          <a 
            href={c.externalLink || "/coming-soon"} 
            className="as-case-card" 
            key={c.title}
            target={c.externalLink ? "_blank" : "_self"}
            rel={c.externalLink ? "noreferrer" : ""}
          >
            <div className="as-case-thumb">
              <img src={c.img} alt={c.title} className="as-case-thumb-img" />
            </div>
            <div className="as-case-body">
              <p className="as-case-tag">{c.tag}</p>
              <h3 className="as-case-title">{c.title}</h3>
              {c.externalLink ? (
                <span className="as-coming-soon">View Live Site</span>
              ) : (
                <span className="as-coming-soon">Coming Soon</span>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="as-footer">
      <span>© 2026 Ariel Syal</span>
      <span>
        SEG3125 · University of Ottawa &nbsp;|&nbsp;
        <a href="https://github.com/ArielSyal" target="_blank" rel="noreferrer" className="as-link">GitHub</a>
      </span>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <HowIWork />
            <CaseStudies />
            <Footer />
          </>
        } />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

function ComingSoon() {
  return (
    <div style={{ padding: '4rem 8vw' }}>
      <h1>Coming Soon</h1>
    </div>
  );
}

export default App;