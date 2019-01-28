import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Space from 'styled-space'

export default function PetPreview({ name, price, type, id }) {
  return (
    <Card>
      <Space m={2} mt={1}>
        <Typography variant="h4">
          <Link to={`/${id}`}>{name}</Link>
        </Typography>
      </Space>
      <Space m={2} mt={0}>
        <Typography>{type}</Typography>
        <Typography align="right">€ {price}</Typography>
      </Space>
    </Card>
  );
}
