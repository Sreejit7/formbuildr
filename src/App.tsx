import { useNavigate } from "react-router-dom";
import "./App.css";
import Hero from "./forms-hero.svg";

function App() {
  const navigate = useNavigate();

  return (
    <main className="landing">
      <h1 className="landing-text">
        Create forms in <span className="text-react">React,</span> just with a
        config.
      </h1>
      <section className="landing-body">
        <section className="landing-buttons center">
          <button
            className="landing-btn primary-btn"
            onClick={() => navigate("/examples")}
          >
            See Examples
          </button>
          <button className="landing-btn secondary-btn">Read docs</button>
        </section>
        <img src={Hero} className="landing-image" />
      </section>
      <small>
        <a href="https://storyset.com/">Illustrations by Storyset</a>
      </small>
    </main>
  );
}

export default App;
