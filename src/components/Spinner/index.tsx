import React from "react";
import { JellyfishSpinner } from "react-spinners-kit";

import { Container, TipText, TipTitle } from "./styles";

interface SpinnerProps {
  title?: string;
  text?: string;
}

const Spinner: React.FC<SpinnerProps> = (props) => {
  return (
    <Container>
      <JellyfishSpinner />
      <TipTitle>{props.title || "Loading"}</TipTitle>
      <TipText>{props.text || "Please wait"}</TipText>
    </Container>
  );
};

export default Spinner;