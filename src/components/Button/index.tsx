import React, { ButtonHTMLAttributes } from "react";

import StyledButton from "./style";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <StyledButton {...props} />;
};

export default Button;