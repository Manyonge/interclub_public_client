import { Box } from "@mui/system";
import React from "react";

interface Props {
  children: any;
  styles?: any;
}

function ColumnBox(props: Props) {
  const { children, styles } = props;

  return (
    <Box
      sx={{
        ...styles,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
}

export default ColumnBox;
