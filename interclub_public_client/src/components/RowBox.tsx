import { Box } from "@mui/system";
import React from "react";

interface Props {
  children: any;
  styles: any;
  borderTest?: boolean;
}

function RowBox(props: Props) {
  const { children, styles, borderTest } = props;

  return (
    <Box
      sx={{
        ...styles,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        border: borderTest ? "2px solid black" : "none",
      }}
    >
      {" "}
      {children}{" "}
    </Box>
  );
}

export default RowBox;
