import React from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { units } from "../../../theme.js";

const Container = styled.div`
  margin: 0 ${units(3)} ${units(1)} ${units(3)}
`;

const Feedback = styled.div`
  color: ${props => props.theme.palette.error.main};
  margin-top: ${units(1)};
`;

export default function TextInput({ type = "text", form, field, ...props }) {
  const { name } = field;
  const error = form.errors[name];
  const touched = form.touched[name];
  return (
    <Container>
      <TextField
        id={name}
        type={type}
        error={touched && !!error}
        {...field}
        {...props}
      />
      {touched && error && <Feedback>{error}</Feedback>}
    </Container>
  );
}
