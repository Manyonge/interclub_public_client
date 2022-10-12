import { Box } from "@mui/system";
import React from "react";

interface Props {
  children: any;
  styles: any;
}

function RowBox(props: Props) {
  const { children, styles } = props;

  return (
    <Box
      sx={{
        ...styles,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {" "}
      {children}{" "}
    </Box>
  );
}

export default RowBox;
