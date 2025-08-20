import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import myLogo from "../images/logo.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "#F9F9F9",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <PersonIcon sx={{ color: "#5D5E61" }} fontSize="large" />
          </IconButton>

          <Button
            href="/"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "0",
              "&:hover": { backgroundColor: "transparent" },
            }}
            disableRipple
          >
            <img src={myLogo} alt="Logo" width={40} />
            <Typography
              variant="h6"
              component="div"
              textTransform="capitalize"
              sx={{ color: "#5D5E61" }}
            >
              GreenGarden
            </Typography>
          </Button>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            {/* <PersonIcon sx={{ color: "#5D5E61" }} fontSize="large" /> */}
            <MenuIcon sx={{ color: "#5D5E61" }} fontSize="large" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              component={Link}
              to="/components/UserTable"
              onClick={handleClose}
            >
              List of Plants
            </MenuItem>
            <MenuItem onClick={handleClose}>Calculation</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
