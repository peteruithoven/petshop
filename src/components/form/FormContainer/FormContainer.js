import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Flex } from "@rebass/grid";
import Space from "styled-space";

export default function FormContainer({ title, children }) {
  return (
    <Flex justifyContent={["flex-start", "center"]} p={3}>
      <Paper>
        <Space m={3} mb={2}>
          <Typography variant="h2">{title}</Typography>
        </Space>
        {children}
      </Paper>
    </Flex>
  );
}
