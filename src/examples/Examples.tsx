import { Link } from "react-router-dom";
import "../App.css";

const Examples = () => {
  return (
    <main className="page landing landing-examples">
      <h1 className="landing-title">
        Here are some <span className="text-react">examples</span> for you.
      </h1>
      <ul className="landing-examples-list center">
        <Link to="/examples/signup" className="landing-example center">
          Sign Up Form
        </Link>
        <Link to="/examples/application" className="landing-example center">
          Application Form
        </Link>
        <Link to="/examples/contact" className="landing-example center">
          Contact Form
        </Link>
      </ul>
    </main>
  );
};

export default Examples;
