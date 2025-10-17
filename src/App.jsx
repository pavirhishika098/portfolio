import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Hi, I'm Jane Doe 👋</h1>
        <p>Frontend Developer | React | UI/UX</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I’m a passionate web developer who loves building beautiful and
          performant web experiences using React and modern JavaScript tools.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li><a href="https://github.com/username/project1">Project 1</a></li>
          <li><a href="https://github.com/username/project2">Project 2</a></li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: jane.doe@example.com</p>
        <p>
          GitHub: <a href="https://github.com/username">github.com/username</a>
        </p>
      </section>

      <footer>
        <p>© 2025 Jane Doe. Built with ❤️ and Vite + React.</p>
      </footer>
    </div>
  );
}

export default App;
