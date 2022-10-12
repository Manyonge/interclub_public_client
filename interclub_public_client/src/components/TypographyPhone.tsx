import { Typography, useTheme } from "@mui/material";
import React from "react";

interface Props {
  children: any;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit"
    | undefined;
  styles?: any;
  fontWeight?: string;
}

function TypographyPhone(props: Props) {
  const { children, variant, styles, fontWeight } = props;
  const theme = useTheme();
  return (
    <Typography
      fontWeight={fontWeight}
      variant={variant}
      sx={{ ...styles, [theme.breakpoints.up("md")]: { display: "none" } }}
    >
      {" "}
      {children}{" "}
    </Typography>
  );
}

export default TypographyPhone;
