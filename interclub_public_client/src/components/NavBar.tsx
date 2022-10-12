import { AppBar, Box, Toolbar, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {}

function NavBar(props: Props) {
  const {} = props;
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            GolfBooking
          </Typography>
          <Box
            sx={{
              margin: "auto",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography>Clubs</Typography>
            <Typography sx={{ ml: "3rem" }}>Leagues menu</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
