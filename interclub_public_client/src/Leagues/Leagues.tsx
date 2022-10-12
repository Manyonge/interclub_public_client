import { Grid, TextField } from "@mui/material";
import BurgerMenu from "../components/BurgerMenu";
import ColumnBox from "../components/ColumnBox";
import NavBar from "../components/NavBar";
import TypographyDesktop from "../components/TypographyDesktop";
import TypographyPhone from "../components/TypographyPhone";
import LeagueCard from "./components/LeagueCard";

interface Props {}

function Leagues(props: Props) {
  const {} = props;

  return (
    <>
      <NavBar />
      <BurgerMenu />
      <ColumnBox>
        <TypographyDesktop fontWeight="bold" variant="h4">
          Search leagues
        </TypographyDesktop>
        <TypographyPhone fontWeight="bold" variant="h5">
          Search leagues
        </TypographyPhone>
        <TextField autoFocus sx={{ width: "70%", textAlign: "center" }} />
      </ColumnBox>
      <Grid spacing={2} sx={{ mt: "1rem" }} container>
        <LeagueCard />
        <LeagueCard />
        <LeagueCard />
        <LeagueCard />
        <LeagueCard />
        <LeagueCard />
      </Grid>
    </>
  );
}

export default Leagues;
