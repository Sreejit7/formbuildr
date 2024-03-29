import {
  FormBuilder,
  FormInputConfig,
  FormSubmitState,
  SubmitButton,
} from "react-config-form";
// importing default form styles
import "react-config-form/dist/react-config-form.cjs.development.css";
// overriding some default styles with custom css
import "./application.css";

const ApplicationForm = () => {
  const applicationFormConfig: FormInputConfig[] = [
    {
      label: "Name",
      type: "text",
      initialValue: "",
      required: true,
      size: "large",
      className: "application-form-input",
      labelClass: "application-form-label",
      groupHeader: (
        <span className="application-form-group-header">Basic Details</span>
      ),
    },
    {
      label: "Email",
      type: "email",
      initialValue: "",
      required: true,
      size: "large",
      className: "application-form-input",
      labelClass: "application-form-label",
    },
    {
      label: "Mobile",
      type: "tel",
      initialValue: "",
      required: true,
      size: "large",
      className: "application-form-input",
      labelClass: "application-form-label",
    },
    {
      label: "Total Work Experience (years)",
      type: "number",
      initialValue: 0,
      required: true,
      size: "large",
      className: "application-form-input",
      labelClass: "application-form-label",
      groupHeader: (
        <span className="application-form-group-header">
          Professional Details
        </span>
      ),
    },
    {
      label: "Current Employer",
      type: "text",
      initialValue: "",
      required: true,
      size: "large",
      className: "application-form-input",
      labelClass: "application-form-label",
    },
    {
      label: "Additional Information",
      type: "textarea",
      initialValue: "",
      size: "large",
      className: "application-form-input",
      labelClass: "application-form-label",
    },
    {
      label: "How did you hear about us?",
      type: "dropdown",
      options: ["LinkedIn", "Our website", "Our employee", "Others"],
      className: "application-form-input",
      labelClass: "application-form-label",
      size: "large",
      required: true,
    },
    {
      label: "LinkedIn",
      type: "url",
      initialValue: "",
      size: "large",
      className: "application-form-input",
      labelClass: "application-form-label",
    },
    {
      label: "Resume",
      type: "file",
      required: true,
      size: "large",
      className: "application-form-input",
      labelClass: "application-form-label",
      groupHeader: (
        <span className="application-form-group-header">Attach Files</span>
      ),
    },
  ];

  const handleAppplicationSubmit = (form: FormSubmitState) => {
    console.log(form);
    alert("Thank you for applying! We'll shortly get back to you.");
  };

  return (
    <>
      <header className="application-header w-full">
        <h2>Frontend Engineer - Forms</h2>
      </header>
      <main className="center page">
        <FormBuilder
          config={applicationFormConfig}
          onSubmit={handleAppplicationSubmit}
          formClass="application-form"
        >
          <SubmitButton text="Apply" submitClass="application-form-submit" />
        </FormBuilder>
      </main>
    </>
  );
};

export default ApplicationForm;
