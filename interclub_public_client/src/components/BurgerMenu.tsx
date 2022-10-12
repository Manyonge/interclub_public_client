import { AppBar, Popover, Toolbar, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React from "react";
import RowBox from "./RowBox";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { useNavigate } from "react-router-dom";
interface Props {}

function BurgerMenu(props: Props) {
  const {} = props;
  const theme = useTheme();
  const navigate = useNavigate();

  const Menu = (
    <PopupState variant="popover" popupId="burgerMenu-id">
      {(popupState) => {
        const trigger = bindTrigger(popupState);
        return (
          <>
            <MenuRoundedIcon fontSize="large" {...trigger} />
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography>App destinations</Typography>
            </Popover>
          </>
        );
      }}
    </PopupState>
  );

  return (
    <AppBar>
      <RowBox
        styles={{
          px: "1rem",
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
        }}
      >
        {Menu}
        <Typography
          variant="h5"
          sx={{ margin: "auto" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Golfbooking
        </Typography>
      </RowBox>
    </AppBar>
  );
}

export default BurgerMenu;
