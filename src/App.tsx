import { useNavigate } from "react-router-dom";
import "./App.css";
import Hero from "./images/forms-hero.svg";

function App() {
  const navigate = useNavigate();

  return (
    <main className="page landing">
      <section className="landing-body">
        <h1 className="landing-title">
          Create forms in <span className="text-react">React,</span> just with a
          config.
        </h1>
        <p className="landing-desc">
          Create fully accessible and customizable forms in React with a config
          object. Leave all worries of state, input change & error management
          behind with FormBuilder.
        </p>
        <section className="landing-buttons center">
          <button
            className="landing-btn primary-btn center"
            onClick={() => navigate("/examples")}
          >
            See Examples
          </button>
          <a
            className="landing-btn secondary-btn center"
            href="https://github.com/Sreejit7/react-form-builder"
            target="_blank"
            rel="noreferrer"
          >
            Read docs
          </a>
        </section>
      </section>
      <section className="landing-hero">
        <img
          src={Hero}
          className="landing-image"
          alt="FormBuilder provides a way to create forms in React"
        />
        <small>
          <a href="https://storyset.com/">Illustrations by Storyset</a>
        </small>
      </section>
    </main>
  );
}

export default App;
