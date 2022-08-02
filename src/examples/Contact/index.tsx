import { FormBuilder, FormSubmitState } from "react-config-form";
import styles from "./contact.module.css";

const ContactForm = () => {
  const contactFormConfig = [
    {
      label: "Full name",
      initialValue: "",
      type: "text",
      className: styles["contact-form-input"],
      labelClass: styles["contact-form-label"],
      groupClass: styles["contact-form-group"],
      required: true,
    },
    {
      label: "Email or mobile",
      initialValue: "",
      type: "text",
      className: styles["contact-form-input"],
      labelClass: styles["contact-form-label"],
      groupClass: styles["contact-form-group"],
      required: true,
    },
    {
      label: "Organisation name",
      initialValue: "",
      type: "text",
      className: styles["contact-form-input"],
      labelClass: styles["contact-form-label"],
      groupClass: styles["contact-form-group"],
      required: true,
    },
  ];

  const onContactFormSubmit = (form: FormSubmitState) => {
    console.log(form);
  };

  return (
    <main className={`${styles["contact-page"]} center`}>
      <FormBuilder
        config={contactFormConfig}
        onSubmit={onContactFormSubmit}
        formHeader={<ContactFormHeader />}
        formClass={styles["contact-form"]}
        containerClass={styles["contact-form-container"]}
      >
        <button className={styles["contact-form-submit"]}>Contact me</button>
      </FormBuilder>
    </main>
  );
};

const ContactFormHeader = () => {
  return (
    <header className={styles["contact-form-header"]}>
      <h4>Let's talk</h4>
      <p>Fill the form below, and our team will reach out to you</p>
    </header>
  );
};

export default ContactForm;
