import React from "react";
import Typography from "@material-ui/core/Typography";
import Space from 'styled-space';

export default props => (
  <Space
    mx={3}
    mb={2}
    >
      <Typography color="error" {...props} />
  </Space>
);
