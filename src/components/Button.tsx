import { ButtonHTMLAttributes, FunctionComponent, ReactElement } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  primary?: boolean;
  size?: "small" | "large";
  icon?: ReactElement;
}

const Button: FunctionComponent<ButtonProps> = ({
  title,
  primary = true,
  size = "small",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`box-border py-3 px-3 rounded-lg text-white bg-gray-700  ${rest.className}`}
    >
      {title || rest?.children}
    </button>
  );
};

export default Button;
