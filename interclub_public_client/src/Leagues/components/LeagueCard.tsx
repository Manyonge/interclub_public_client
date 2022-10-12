import { Grid, Paper, useTheme } from "@mui/material";

interface Props {}

function LeagueCard(props: Props) {
  const {} = props;
  const theme = useTheme();
  return (
    <Grid md={4} xs={6} item>
      <Paper
        sx={{
          width: "100%",
          height: "10rem",
          backgroundColor: `${theme.palette.secondary.dark}`,
        }}
      ></Paper>
    </Grid>
  );
}

export default LeagueCard;
