import React from "react";
import Sandbox from "../../components/Sandbox";
import styles from "../section.module.css";

const PlayGround = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className={`${styles.section} ${styles.sandbox}`}>
      <h1 className="landing-title text-center">
        Disclaimer: Children's play area.
      </h1>
      <Sandbox />
    </section>
  );
});

PlayGround.displayName = "PlayGround";

export default PlayGround;
