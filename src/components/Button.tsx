import { ButtonHTMLAttributes, FunctionComponent } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: FunctionComponent<ButtonProps> = ({ title, ...rest }) => {
  return <button className={`box-border py-3 px-3 rounded-lg text-white bg-gray-800 ${rest.className}`} {...rest}>{title}</button>;
};

export default Button;
