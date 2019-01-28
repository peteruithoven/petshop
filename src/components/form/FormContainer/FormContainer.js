import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { units } from "../../../theme.js";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: ${units(3)};
`;

const Title = styled(Typography).attrs({
  variant: "h2"
})`
  margin: ${units(3)} ${units(3)} ${units(1)} ${units(3)}
`;

export default function FormContainer({ title, children }) {
  return (
    <Container>
      <Paper>
        <Title>{title}</Title>
        {children}
      </Paper>
    </Container>
  );
}
