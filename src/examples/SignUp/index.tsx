import React, { useState } from "react";
import FormBuilder from "../../components/FormBuilder";
import SubmitButton from "../../components/FormBuilder/SubmitButton";
import {
  FormInputConfig,
  FormSubmitState,
} from "../../components/FormBuilder/models/formModels";

const SignUpForm = () => {
  const loginFormConfig: FormInputConfig[] = [
    {
      label: "Username",
      value: "",
      type: "text",
      required: true,
    },
    {
      label: "Password",
      value: "",
      type: "password",
      required: true,
    },
    {
      label: "Bio",
      value: "",
      type: "textarea",
    },
    {
      label: "Gender",
      value: "",
      type: "radio",
      options: ["Male", "Female", "Do not specify"],
    },
    {
      label: "Upload a profile picture",
      type: "file",
    },
    {
      label: "Remember Me",
      value: false,
      type: "checkbox",
    },
  ];

  const handleLoginFormSubmit = (form: FormSubmitState) => {
    console.log(form);
  };

  return (
    <main className="page center">
      <FormBuilder
        config={loginFormConfig}
        formStyles={{
          backgroundColor: "#4cd8d3",
          boxShadow: "none",
          borderColor: "#1e014a",
          borderWidth: "2px",
        }}
        formHeader={
          <header
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Sign Up</h1>
          </header>
        }
        onSubmit={handleLoginFormSubmit}
      >
        <SubmitButton text="Sign Up" />
      </FormBuilder>
    </main>
  );
};

export default SignUpForm;
