import styles from "./sandbox.module.css";

const Sandbox = () => {
  return (
    <iframe
      src="https://codesandbox.io/embed/react-config-form-playground-cy5tdc?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
      className={styles.sandbox}
      title="react-config-form-playground"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
};

export default Sandbox;
