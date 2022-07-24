import { useNavigate } from "react-router-dom";
import "../App.css";

const Examples = () => {
  const navigate = useNavigate();

  return (
    <main className="landing">
      <h1 className="landing-text">
        Here are some <span className="text-react">examples</span> for you.
      </h1>
      <ul className="landing-examples-list center">
        <li
          className="landing-example center"
          onClick={() => navigate("/examples/signup")}
        >
          Sign Up Form
        </li>
        <li
          className="landing-example center"
          onClick={() => navigate("/examples/application")}
        >
          Application Form
        </li>
        <li
          className="landing-example center"
          onClick={() => navigate("/examples/contact")}
        >
          Contact Form
        </li>
      </ul>
    </main>
  );
};

export default Examples;
