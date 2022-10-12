import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import BurgerMenu from "../components/BurgerMenu";
import ColumnBox from "../components/ColumnBox";
import NavBar from "../components/NavBar";

interface Props {}

function AppContainer(props: Props) {
  const {} = props;
  const theme = useTheme();
  return (
    <>
      <NavBar />
      <BurgerMenu />
      <Grid container>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            [theme.breakpoints.down("md")]: {
              height: "50vh",
            },
            [theme.breakpoints.up("md")]: {
              height: "80vh",
            },
            width: "50vw",
          }}
        >
          <Paper
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: `${theme.palette.primary.dark}`,
            }}
          >
            <ColumnBox
              styles={{
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                color="Background"
                sx={{
                  textAlign: "center",
                }}
              >
                Welcome to golfbooking
              </Typography>
            </ColumnBox>
          </Paper>
        </Grid>
        <Grid item md={6} xs={12} sx={{ height: "50vh", width: "50vw" }}></Grid>
      </Grid>
    </>
  );
}

export default AppContainer;
