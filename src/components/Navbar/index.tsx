import { Link } from "react-router-dom";
import LogoWebp from "../../images/FormBuilder.webp";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <section className={styles.title}>
        <Link to="/" className={styles.link}>
          <picture>
            <img src={LogoWebp} className={styles.logo} alt="FormBuilder" />
          </picture>
        </Link>
        <h1>FormBuilder</h1>
      </section>
    </nav>
  );
};

export default Navbar;
