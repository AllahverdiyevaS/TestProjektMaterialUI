import { Box, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Typography>GreenGarden</Typography>
      <Box>
        <Link>Privacy Policy</Link>
        <Link>Terms and Conditions</Link>
      </Box>
    </Box>
  );
};

export default Footer;
