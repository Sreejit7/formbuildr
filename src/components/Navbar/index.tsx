import { Link } from "react-router-dom";
import LogoWebp from "../../images/FormBuilder.webp";
import NPMLogo from "../../images/npm-logo.webp";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <section className={styles.title}>
        <Link to="/" className={styles.link}>
          <picture>
            <img
              src={LogoWebp}
              className={styles.logo}
              alt="react-config-form"
            />
          </picture>
        </Link>
        <h1>react-config-form</h1>
      </section>
      <a
        href="https://www.npmjs.com/package/react-config-form"
        rel="noreferrer"
        target="_blank"
        className={styles.link}
      >
        <picture>
          <img
            src={NPMLogo}
            className={styles["nav-logo"]}
            alt="Find it on npm"
          />
        </picture>
      </a>
    </nav>
  );
};

export default Navbar;
