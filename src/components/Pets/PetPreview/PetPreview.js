import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { units } from "../../../theme.js";

const Title = styled(Typography).attrs({
  variant: "h4"
})`
  margin: ${units(0.5)} ${units(1)} ${units(1)} ${units(1)};
`;

const Type = styled.p`
  margin: 0 ${units(1)} ${units(1)} ${units(1)};
`;

const Price = styled.p`
  text-align: right;
  margin: ${units(1)};
  margin-top: 0;
`;

export default function PetPreview({ name, price, type, id }) {
  return (
    <Card>
      <Title>
        <Link to={`/${id}`}>{name}</Link>
      </Title>
      <Type>{type}</Type>
      <Price>€ {price}</Price>
    </Card>
  );
}
