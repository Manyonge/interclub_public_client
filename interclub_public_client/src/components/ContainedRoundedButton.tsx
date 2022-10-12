import { Button } from "@mui/material";
import React from "react";

interface Props {
  children: any;
  styles?: any;
  onClick?: any;
}
function ContainedRoundedButton(props: Props) {
  const { children, styles, onClick } = props;

  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{ ...styles, borderRadius: "3rem" }}
      {...props}
    >
      {" "}
      {children}{" "}
    </Button>
  );
}

export default ContainedRoundedButton;
