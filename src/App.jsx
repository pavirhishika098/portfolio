import React from "react";
import "./App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <h2 className="logo">Rhishika</h2>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="highlight">Rhishika N Pavithran</span> 👋
          </h1>
          <p className="subtitle">
            Frontend Developer | React | UI/UX Designer
          </p>

          <div className="socials">
            <a
              href="https://github.com/pavirhishika098"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://in.linkedin.com/in/rhishika-n-pavithran-8a2b94252"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={28} />
            </a>
          </div>

          <a href="#about" className="scroll-btn">↓ Scroll Down</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I’m a passionate front-end developer who loves creating visually
          appealing, responsive, and interactive web experiences. My focus is on
          crafting clean, accessible, and performant code using modern tools
          like React and Vite.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <a
            href="https://github.com/pavirhishika098/project1"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3>Project 1</h3>
            <p>Modern React app with responsive design and animations.</p>
          </a>

          <a
            href="https://github.com/pavirhishika098/project2"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3>Project 2</h3>
            <p>Interactive web experience built with React Hooks and APIs.</p>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>
          I’m always open to collaboration or new opportunities. Feel free to
          reach out!
        </p>
        <p>
          📧 Email:{" "}
          <a href="mailto:rhishika@example.com">rhishika@example.com</a>
        </p>
        <p>
          🔗 LinkedIn:{" "}
          <a
            href="https://in.linkedin.com/in/rhishika-n-pavithran-8a2b94252"
            target="_blank"
            rel="noopener noreferrer"
          >
            rhishika-n-pavithran
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Rhishika N Pavithran • Built with ❤️ using Vite + React</p>
      </footer>
    </div>
  );
}

export default App;
