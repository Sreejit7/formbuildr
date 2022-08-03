import { MutableRefObject, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PlayGround } from "./sections";
import Hero from "./images/forms-hero.svg";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const playGroundRef = useRef() as MutableRefObject<HTMLElement>;

  useEffect(() => {
    // Scroll to the playground section
    if (location.hash.startsWith("#playground") && playGroundRef.current) {
      window.scrollTo({
        top: playGroundRef.current?.offsetTop,
        behavior: "auto",
      });
    }
  }, [location.hash]);

  return (
    <>
      <main className="page landing">
        <section className="landing-body">
          <h1 className="landing-title">
            Create forms in <span className="text-react">React,</span> just with
            a config.
          </h1>
          <p className="landing-desc">
            Create fully accessible and customizable forms in React with a
            config object. Leave all worries of state, input change & error
            management behind with a FormBuilder component. Comes with the full
            power of TypeScript.
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
              href="https://github.com/Sreejit7/react-config-form#readme"
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
      <PlayGround ref={playGroundRef} />
    </>
  );
}

export default App;
