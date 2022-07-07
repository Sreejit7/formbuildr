import FormBuilder from "../../components/FormBuilder";
import {
  FormInputConfig,
  FormSubmitState,
} from "../../components/FormBuilder/models/formModels";
import SubmitButton from "../../components/FormBuilder/SubmitButton";

const ApplicationForm = () => {
  const applicationFormConfig: FormInputConfig[] = [
    {
      label: "Name",
      type: "text",
      value: "",
      required: true,
      size: "large",
      className: "application-form-input",
      labelClass: "application-form-label",
    },
    {
      label: "Email",
      type: "email",
      value: "",
      required: true,
      size: "large",
      className: "application-form-input",
      labelClass: "application-form-label",
    },
    {
      label: "Mobile",
      type: "tel",
      value: "",
      required: true,
      size: "large",
      className: "application-form-input",
      labelClass: "application-form-label",
    },
    {
      label: "Total Work Experience (years)",
      type: "dropdown",
      value: "Fresher",
      options: ["Fresher", "0-1 Years", "1-3 Years", "3-5 Years", "5 Years +"],
      required: true,
      size: "large",
      className: "application-form-input",
      labelClass: "application-form-label",
    },
    {
      label: "Current Employer",
      type: "text",
      value: "",
      required: true,
      size: "large",
      className: "application-form-input",
      labelClass: "application-form-label",
    },
    {
      label: "Additional Information",
      type: "textarea",
      value: "",
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
    },
    {
      label: "LinkedIn",
      type: "url",
      value: "",
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
    },
  ];

  const handleAppplicationSubmit = (form: FormSubmitState) => {
    console.log(form);
    alert("Thank you for applying! We'll shortly get back to you.");
  };

  return (
    <main className="center">
      <FormBuilder
        config={applicationFormConfig}
        onSubmit={handleAppplicationSubmit}
        formHeader={<FormHeader />}
        formClass="application-form"
      >
        <SubmitButton text="Apply" submitClass="application-form-submit" />
      </FormBuilder>
    </main>
  );
};

const FormHeader = () => {
  return (
    <header
      style={{
        backgroundColor: "#1f014a",
        color: "#4ed8d5",
        width: "100%",
      }}
      className="center"
    >
      <h2>Frontend Engineer - Forms</h2>
    </header>
  );
};

export default ApplicationForm;
