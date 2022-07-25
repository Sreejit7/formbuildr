import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      An open source toy created by{" "}
      <a
        className="text-react"
        href="https://www.github.com/Sreejit7"
        target="_blank"
        rel="noreferrer"
      >
        @Sreejit7
      </a>
    </footer>
  );
};

export default Footer;
