import { Box } from "@mui/system";
import React from "react";

interface Props {
  children: any;
  styles?: any;
  borderTest?: boolean;
}

function ColumnBox(props: Props) {
  const { children, styles, borderTest } = props;

  return (
    <Box
      sx={{
        ...styles,
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: borderTest ? "2px solid black" : "none",
      }}
    >
      {children}
    </Box>
  );
}

export default ColumnBox;
