import { ButtonHTMLAttributes, FunctionComponent, ReactElement } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  primary?: boolean;
  icon?: ReactElement;
}

const Button: FunctionComponent<ButtonProps> = ({
  title,
  primary = true,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`box-border py-3 px-3 rounded-lg text-white bg-gray-${
        primary ? 700 : 400
      }  ${rest.className}`}
    >
      {title || rest?.children}
    </button>
  );
};

export default Button;
