import { Link } from "react-router-dom";
import "../App.css";

const NotFound = () => {
  return (
    <main className="page center flex flex-col">
      <h1 className="landing-text">Oops, you seem to be lost.</h1>
      <h2>
        Please allow us to take you{" "}
        <Link to="/">
          <span className="text-react text-underline">home.</span>
        </Link>
      </h2>
    </main>
  );
};

export default NotFound;
