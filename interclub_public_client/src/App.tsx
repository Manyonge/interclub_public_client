import React from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CssBaseline } from "@mui/material";
import Welcome from "./Welcome/Welcome";
import Leagues from "./Leagues/Leagues";
import LeagueCalendar from "./Leagues/LeagueCalendar";
function App() {
  axios.defaults.baseURL = "http://localhost:5000";
  const theme = createTheme({
    palette: {
      primary: {
        main: "#425F57",
      },
      secondary: {
        main: "#749F82",
      },
    },
    typography: {
      fontFamily: "Montserrat",
    },
  });
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />}>
              <Route path="leagues" element={<Leagues />}>
                <Route path=":acronym/calendar" element={<LeagueCalendar />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
