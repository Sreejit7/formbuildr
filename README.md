# react-form-builder

<img width="944" alt="image" src="https://user-images.githubusercontent.com/52678249/177845405-f4292487-db1a-4223-b8a1-fafb1826a6a1.png">

A form builder component for creating easy forms in React with just a config. The component removes all necessity to write long boilterplate for handling state, change & errors for any React form. Just pass in a **config**, and attach a **form submit handler**, and you're done!

[Visit site for more info!](https://re-form.vercel.app)

## Features

- Render a form with just a config of all the fields needed in the form, with their `label` and `initialValue`.
- Ability to add custom header and footer elements _(including the Submit button, don't forget it!)_ for the form.
- Ability to handle form submission, by passing an `onSubmit` callback prop. The callback receives the form state _(an object of form labels as keys and the input value as values)_ as an argument.
- High customizability:
  - Custom **form, form container, inputs & labels**.
  - Custom input sizes [small | medium (default) | large]
  - Customize by passing `className` or/and `styles` as props
  - **Customize all forms on your app globally** using global classnames, or
  - **Customize each form differently** using props for individual forms.
- Error handling on form level & input level for inputs which are `required` to be filled.
- Fully keyboard accessible
- A built in `SubmitButton` component for providing a custom form submit button easily.

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
      initialValue: "",
      type: "text",
      required: true,
    },
    {
      label: "Password",
      initialValue: "",
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
            <h1>Login</h1>
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

Please cheeck the `src/examples` folder for more example forms.

**For seeing the example forms in UI, please check the [website](https://re-form.vercel.app/examples).**

## Props

### FormBuilder props
_Required props are marked with an asterisk(*)_

|      Prop       |     Type      | Description                                                                                                  |
| :-------------: | :-----------: | ------------------------------------------------------------------------------------------------------------ |
|    config\*     |    `Array`    | An array of config objects for all form input fields.                                                        |
|   onSubmit\*    |  `Function`   | A callback function that takes the form state as an <br>argument and gets called when the form is submitted. |
|   formHeader    | `JSX Element` | A JSX Element that gets rendered above the actual form.                                                      |
|    formClass    |   `string`    | A string that includes class(es) to be attached with<br>the form.                                            |
|   formStyles    |   `Object`    | A style object that includes styles for the form.                                                            |
| containerClass  |   `string`    | A string that includes class(es) to be attached with<br>the form container.                                  |
| containerStyles |   `Object`    | A style object that includes styles for the <br>form container.                                              |
|    children     |  `ReactNode`  | React Elements (like a Submit button) that gets rendered <br>beneath the form body (all the form fields).    |

### SubmitButton props

|     Prop    |            Type(s)            | Description                                                                       |
|:-----------:|:-----------------------------:|-----------------------------------------------------------------------------------|
| text        | `string`                      | The button text <br>[By default, it'll show a 'Submit' text]                      |
| position    | `left`<br>`middle`<br>`right` | The alignment for the submit button.<br>[By default, it'll show up in the middle] |
| submitClass | `string`                      | A string that includes class(es) <br>to be attached with the submit button.       |


## Types

### Config type

Each form input config object contains the following:

_Required properties are marked with an asterisk(*)_

|   Property   |                    Type(s)                    | Description                                                                                                                                                                                                            |
| :----------: | :-------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   label\*    |                   `string`                    | The label for the input. The label is used as a key for <br>storing values in the form state on submission.                                                                                                            |
|    type\*    | all input types<br> `textarea`<br> `dropdown` | The type for the input. (Like - "text", "email" etc).<br>There are two custom types as of now - "textarea" & "dropdown".<br>[**All input types are not tested, some input types may show <br>unexpected behaviours.**] |
| initialValue |                As per the type                | The initialValue for the input. [Not required for types like <br>"file" & "dropdown".]                                                                                                                                 |
|   required   |                   `boolean`                   | Boolean denoting whether a value is required for the input.                                                                                                                                                            |
|   options    |                    `Array`                    | A list of options for the input. Required for selective inputs<br>like "dropdown" or "radio".                                                                                                                          |
|   checked    |                   `boolean`                   | Boolean denoting the condition when a field should be <br>checked/filled. [Useful for "checkbox"/"radio" type inputs.]                                                                                                 |
|     size     |       `small` <br>`medium` <br>`large`        | Specifies the size of the input. [Default value - "medium"].                                                                                                                                                           |
| placeholder  |                   `string`                    | A placeholder for the input.                                                                                                                                                                                           |
|   onChange   |                  `Function`                   | A callback for that gets called with the current input value<br>whenever the input is changed. [Avoid using it for managing state <br>for the form to avoid multiple sources of truth.]                                |
|  className   |                   `string`                    | A string that includes class(es) to be attached with the input.                                                                                                                                                        |
|    styles    |                   `Object`                    | A style object that includes styles for the input.                                                                                                                                                                     |
|  labelClass  |                   `string`                    | A string that includes class(es) to be attached with the label.                                                                                                                                                        |

## Global classNames

Global classNames can be used inside your project to **style all forms globally across your app**. If you have a lot of forms, and want to apply common styles to each form, this will be much faster as opposed to having to add props for each form individually.
Here goes the list of global classnames:

|     Classname     |                                                                Element                                                                |
| :---------------: | :-----------------------------------------------------------------------------------------------------------------------------------: |
|       form        |                                                         The main form element                                                         |
|  form-container   |                                                          The form container                                                           |
|    form-group     |                       Each form group (A form group consists of <br>the label & the input for each form field)                        |
| form-group-{type} | A dynamic classname for form group of a <br>particular input type. [For example, <br>this will be `form-group-text` for a text input] |
|    form-label     |                                                 Each label for all inputs in the form                                                 |
|   form-required   |                                           The \* element marking an input field as required                                           |
| form-group-error  |                            The error text shown for required fields in the <br>form that are still empty.                             |

## Some known issues

There are some known issues you might encounter while using the `FormBuilder` component.

- Inputs of type "file" don't reset after submitting the form.
- The form level validation might show unexpected behaviours at times.
- The dropdown input takes full available width of the form. (Feel free to override this behaviour using global classnames `form-input-dropdown` & `form-group-dropdown`).

Thanks for visiting the docs!
