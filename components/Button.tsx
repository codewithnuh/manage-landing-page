// Button.tsx
import { ButtonProps } from "@/types";
import { FC } from "react";
const Button: FC<ButtonProps> = ({
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`button ${
        variant === "primary" ? "primary" : "secondary"
      } ${className}`}
    />
  );
};

export default Button;
