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
  margin: ${props => {
    const { unit } = props.theme.spacing;
    return `${unit * 3}px ${unit*3}px ${unit}px ${unit * 3}px`;
  }};
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
