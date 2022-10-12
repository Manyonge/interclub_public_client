import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import BurgerMenu from "../components/BurgerMenu";
import ColumnBox from "../components/ColumnBox";
import ContainedRoundedButton from "../components/ContainedRoundedButton";
import NavBar from "../components/NavBar";

interface Props {}

function AppContainer(props: Props) {
  const {} = props;
  const theme = useTheme();
  const navigate = useNavigate();
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
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            [theme.breakpoints.up("md")]: { height: "70vh" },
            [theme.breakpoints.down("md")]: { height: "30vh" },
            width: "50vw",
          }}
        >
          <ColumnBox>
            <Typography fontWeight="bold" sx={{ textAlign: "center" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque dolorum, quo dignissimos, dolore ut neque eaque
              distinctio nesciunt beatae delectus esse vel adipisci debitis.
              Expedita minus doloribus consequuntur aut quod!
            </Typography>
            <ContainedRoundedButton
              styles={{ mt: "3rem" }}
              onClick={() => {
                navigate("/leagues");
              }}
            >
              Leagues menu
            </ContainedRoundedButton>
          </ColumnBox>
        </Grid>
      </Grid>
    </>
  );
}

export default AppContainer;
