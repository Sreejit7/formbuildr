# react-form-builder
A form builder component for creating easy forms in React with just a config. The component removes all necessity to write long boilterplate for handling state, change & errors for any React form. Just pass in a **config**, and attach a **form submit handler**, and you're done!

## Features
- Render a form with just a config of all the fields needed in the form, with their `label` and `initialValue`.
- Ability to add custom header and footer *(including the Submit button, don't forget it!)* for the form. 
- Ability to handle form submission, by passing an `onSubmit` callback prop. The callback receives the form state *(an object of form labels as keys and the input value as values)* as an argument.
- High customizability:
  - Custom **form, form container, inputs & labels**.
  - Customize by passing `className` or/and `styles` as props
  - **Customize all forms on your app globally** using global classnames, or
  - **Customize each form differently** using props for individual forms.
- Error handling on input level for inputs which are `required` to be filled.

## How to use

### Using in your own project
1. Copy all the files inside the `components/FormBuilder` directory of this repository into your project.
2. Start creating your own forms with your own configs, using the **FormBuilder** component.

### Using this project (for creating sample forms)
1. [Clone](https://github.com/git-guides/git-clone) this repository in your local
2. Install dependencies using: 
```bash
npm install
```
3. Create your own forms using own configs, using the **FormBuilder** component.
4. Create a route for your form in the `main.tsx` file and run the project to see it locally using:
```bash
npm run dev
```

## Usage
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import FormBuilder from "../../components/FormBuilder";
import {
  FormInputConfig,
  FormSubmitState,
} from "../../components/FormBuilder/models/formModels";

const LoginForm = () => {
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
    }
  ];

  const handleLoginFormSubmit = (form: FormSubmitState) => {
    console.log(form);
  };

  return (
      <FormBuilder
        config={loginFormConfig}
        formStyles={{
          backgroundColor: "#4cd8d3",
          boxShadow: "none",
          borderColor: "#1e014a",
        }}
        formHeader={
          <header>
            <h1>Sign Up</h1>
          </header>
        }
        onSubmit={handleLoginFormSubmit}
      >
        <button type="submit">Login</button>
      </FormBuilder>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<LoginForm/>);
```
