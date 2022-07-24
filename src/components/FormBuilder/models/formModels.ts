export interface FormInputConfig {
  label: string;
  labelClass?: string;
  initialValue?: FormInputValue;
  checked?: boolean;
  onChange?: ((value: FormInputValue) => void) | any;
  className?: string;
  styles?: React.CSSProperties;
  type: FormInputType;
  required?: boolean;
  placeholder?: string;
  size?: FormInputSize;
  options?: (string | number)[];
  groupClass?: string;
  groupHeader?: JSX.Element;
  groupFooter?: JSX.Element;
}

export interface FormState {
  [key: string]: {
    value: FormInputValue | File;
    error?: boolean;
    touched?: boolean;
  };
}

export interface FormSubmitState {
  [key: string]: FormInputValue | File;
}

export type FormInputType =
  | React.HTMLInputTypeAttribute
  | "textarea"
  | "dropdown";

type FormInputValue = string | number | boolean | undefined;

type FormInputSize = "large" | "medium" | "small";
