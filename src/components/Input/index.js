import React from "react";
import { InputStyles } from "./styles";

const Input = ({ placeholder }) => {
  return (
    <InputStyles>
      <input type="text" placeholder={placeholder} />
    </InputStyles>
  );
};

export default Input;
