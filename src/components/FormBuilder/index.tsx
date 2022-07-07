import React, { startTransition, useEffect, useId, useState } from "react";
import {
  FormInputConfig,
  FormInputType,
  FormState,
  FormSubmitState,
} from "./models/formModels";
import "./formStyles.css";

interface Props {
  formHeader?: React.ReactNode;
  config: FormInputConfig[];
  formClass?: string;
  formStyles?: React.CSSProperties;
  containerClass?: string;
  containerStyles?: React.CSSProperties;
  children?: React.ReactNode;
  onSubmit: (form: FormSubmitState) => void;
}

const FormBuilder = ({
  formHeader,
  config,
  children,
  formClass,
  containerClass,
  formStyles,
  containerStyles,
  onSubmit,
}: Props) => {
  const formId = useId();

  const [formState, setFormState] = useState<FormState>({});
  const [formResetState, setFormResetState] = useState<FormState>({});

  useEffect(() => {
    const initialFormState: FormState = {};

    // save the initial form state based on config
    for (const { label, value, type } of config) {
      initialFormState[label] = {
        value:
          // special case for dropdown, specify a '- None -' value if no value present
          type === "dropdown"
            ? !value && typeof value !== ("number" || "boolean")
              ? "- None -"
              : value
            : typeof value !== "undefined"
            ? value
            : "",
        touched: false,
        error: false,
      };
    }

    setFormState(initialFormState);

    startTransition(() => {
      setFormResetState(initialFormState);
    });
  }, []);

  /**
   * @description handles any input change on the form, updates the form state
   * @param label label the input
   * @param e the change event
   * @param type the input type
   * @param required boolean for whether a value is required for the input
   * @param onChange extra onchange prop for the input
   */
  const handleFormChange = (
    label: string,
    e: React.ChangeEvent<HTMLInputElement>,
    type: FormInputType,
    required = false,
    onChange?: any
  ) => {
    const currInputvalue = getValue(e, type);

    if (typeof onChange === "function") {
      onChange(currInputvalue);
    }

    startTransition(() => {
      setFormState((prevFormState) => ({
        ...prevFormState,
        [label]: {
          ...prevFormState[label],
          value: currInputvalue,
          error:
            required &&
            prevFormState[label]?.touched &&
            typeof currInputvalue !== "boolean" &&
            type !== "number" &&
            // special check for dropdown, if value is `- None -`, mark an error state
            (!currInputvalue ||
              (type === "dropdown" && currInputvalue === "- None -")),
        },
      }));
    });
  };

  /**
   * @description handles the blur event for inputs
   * @param required boolean for whether a value is required for the input
   * @param label label for the input
   * @param e input focus event for getting the input value
   * @param type type of the input
   */
  const handleInputBlur = (
    required = false,
    label: string,
    e: React.FocusEvent<HTMLInputElement>,
    type: FormInputType
  ) => {
    const value = getValue(e, type);

    if (!formState[label]?.touched) {
      setFormState((prevFormState) => ({
        ...prevFormState,
        [label]: {
          ...prevFormState[label],
          touched: true,
          error:
            required &&
            typeof value !== "boolean" &&
            type !== "number" &&
            // special check for dropdown, if value is `- None -`, mark an error state
            (!value || (type === "dropdown" && value === "- None -")),
        },
      }));
    } else {
      if (required) {
        if (
          typeof value !== "boolean" &&
          type !== "number" &&
          // special check for dropdown, if value is `- None -`, mark an error state
          (!value || (type === "dropdown" && value === "- None -"))
        ) {
          setFormState((prevFormState) => ({
            ...prevFormState,
            [label]: {
              ...prevFormState[label],
              error: true,
            },
          }));
        }
      }
    }
  };

  /**
   * @description submits the form, calls the onSubmit callback prop with the form state
   * @param e the form event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (typeof onSubmit === "function") {
      const formSubmitState: FormSubmitState = {};

      for (const label in formState) {
        formSubmitState[label] = formState[label].value;
      }

      onSubmit(formSubmitState);

      // reset the form
      startTransition(() => {
        setFormState(formResetState);
      });
    }
  };

  /**
   * @description renders a form input based on the input type
   * @param type type of the input
   * @param inputProps props needed for the input
   * @returns the form input element
   */
  const renderInput = (
    type: FormInputType,
    {
      className,
      label = "",
      size = "medium",
      value,
      onChange,
      required = false,
      options = [],
      styles,
      placeholder = "",
    }: Partial<FormInputConfig>
  ) => {
    switch (type) {
      case "radio":
        if (options.length === 0) {
          throw new Error("please provide options for a radio input");
        }
        return options.map((option) => (
          <React.Fragment key={option}>
            <label htmlFor={`${formId}-${option}`} className="form-radio">
              <input
                className={`form-input form-input-radio ${size} ${
                  className ? className : ""
                } `}
                style={styles}
                id={`${formId}-${option}`}
                type="radio"
                value={option}
                name={`${label}`}
                // checked={option === value}
                checked={
                  formState[label]?.value === "undefined"
                    ? option === value
                    : option === formState[label]?.value
                }
                // onChange={(e) => onChange(getValue(e, type))}
                onChange={(e) =>
                  handleFormChange(label, e, type, required, onChange)
                }
                onBlur={(e) => handleInputBlur(required, label, e, type)}
              />
              {option}
            </label>
          </React.Fragment>
        ));
      case "dropdown":
        return (
          <>
            <select
              className={`form-input form-input-dropdown ${size} ${
                className ? className : ""
              } `}
              style={styles}
              id={`${formId}-${label}`}
              value={
                typeof value !== "boolean"
                  ? typeof formState[label]?.value === "undefined"
                    ? value
                    : formState[label]?.value?.toString()
                  : undefined
              }
              onChange={(e) =>
                handleFormChange(
                  label,
                  e as unknown as React.ChangeEvent<HTMLInputElement>,
                  type,
                  required,
                  onChange
                )
              }
              onBlur={(e) =>
                handleInputBlur(
                  required,
                  label,
                  e as unknown as React.FocusEvent<HTMLInputElement>,
                  type
                )
              }
            >
              {/* Default dropdown option */}
              <option key="- None -" value="- None -">
                - None -
              </option>
              {options.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </>
        );
      case "textarea":
        return (
          <textarea
            className={`form-input ${size} ${className ? className : ""} `}
            style={styles}
            id={`${formId}-${label}`}
            // value={typeof value !== "boolean" ? value : undefined}
            value={
              typeof value !== "boolean"
                ? typeof formState[label]?.value === "undefined"
                  ? value
                  : formState[label]?.value?.toString()
                : undefined
            }
            placeholder={placeholder}
            // onChange={(e) =>
            //   onChange(
            //     getValue(
            //       e as unknown as React.ChangeEvent<HTMLInputElement>,
            //       type
            //     )
            //   )
            // }
            onChange={(e) =>
              handleFormChange(
                label,
                e as unknown as React.ChangeEvent<HTMLInputElement>,
                type,
                required,
                onChange
              )
            }
            onBlur={(e) =>
              handleInputBlur(
                required,
                label,
                e as unknown as React.FocusEvent<HTMLInputElement>,
                type
              )
            }
            rows={size === "medium" ? 6 : size === "large" ? 8 : 4}
            required={required}
          ></textarea>
        );
      case "file":
        return (
          <input
            className={`form-input form-input-file ${size} ${
              className ? className : ""
            } `}
            style={styles}
            id={`${formId}-${label}`}
            type="file"
            // onChange={(e) => onChange(getValue(e, type))}
            onChange={(e) =>
              handleFormChange(label, e, type, required, onChange)
            }
            onBlur={(e) => handleInputBlur(required, label, e, type)}
            required={required}
          />
        );
      default:
        return (
          <input
            className={`form-input ${size} ${className ? className : ""}`}
            style={styles}
            id={`${formId}-${label}`}
            type={type}
            // value={typeof value !== "boolean" ? value : undefined}
            value={
              typeof value !== "boolean"
                ? typeof formState[label]?.value === "undefined"
                  ? value
                  : formState[label]?.value?.toString()
                : undefined
            }
            checked={
              typeof value === "boolean" &&
              typeof formState[label]?.value === "undefined"
                ? value
                : typeof formState[label]?.value === "boolean" &&
                  !!formState[label]?.value
            }
            placeholder={placeholder}
            // onChange={(e) => onChange(getValue(e, type))}
            onChange={(e) =>
              handleFormChange(label, e, type, required, onChange)
            }
            onBlur={(e) => handleInputBlur(required, label, e, type)}
            required={required}
          />
        );
    }
  };

  /**
   * @description function for getting the current input value
   * @param e input event (change or focus event)
   * @param type type of the input
   * @returns the current input value based on input type
   */
  const getValue = (
    e: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>,
    type: FormInputType
  ) => {
    switch (type) {
      case "file":
        if (e.target.files) {
          return e.target.files[0];
        }
      case "checkbox":
        return e.target.checked;
      case "number":
        return e.target.valueAsNumber;
      default:
        return e.target.value;
    }
  };

  return (
    <section
      style={containerStyles}
      className={`form-container ${containerClass ? containerClass : ""}`}
    >
      {formHeader}
      <form
        style={formStyles}
        className={`form padding-md ${formClass ? formClass : ""} `}
        onSubmit={handleSubmit}
      >
        {config.map(({ label, labelClass, type, required, ...inputProps }) => (
          <section
            className={`form-group form-group-${type}`}
            key={`${formId}-${label}`}
          >
            <label
              htmlFor={`${formId}-${label}`}
              className={`form-label ${labelClass ? labelClass : ""} `}
            >
              {label}
              {required && <span className="form-required">*</span>}
            </label>
            {renderInput(type, { label, required, ...inputProps })}
            {formState[label]?.error && (
              <small className="form-group-error">
                Please {type === "file" ? "upload" : "fill"} {label}
              </small>
            )}
          </section>
        ))}
        {children}
      </form>
    </section>
  );
};

export default FormBuilder;