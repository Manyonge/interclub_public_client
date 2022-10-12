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
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
}

export default ColumnBox;
