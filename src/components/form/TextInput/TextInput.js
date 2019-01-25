import React from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { units } from "../../../theme.js";

const Container = styled.div`
  margin: 0 ${units(3)} ${units(1)} ${units(3)};
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
        helperText={touched && error}
        {...field}
        {...props}
      />
    </Container>
  );
}
