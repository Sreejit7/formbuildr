import "../formStyles.css";

interface Props {
  position?: "left" | "middle" | "right";
  text?: string;
  submitClass?: string;
}

const SubmitButton = ({ position = "middle", text, submitClass }: Props) => {
  return (
    <button
      type="submit"
      className={`form-submit ${position} ${submitClass ? submitClass : ""}`}
    >
      {text ? text : "Submit"}
    </button>
  );
};

export default SubmitButton;
