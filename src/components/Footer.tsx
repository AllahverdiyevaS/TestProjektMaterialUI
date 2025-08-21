import { Box, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 4,
        marginBlockEnd: 1,

        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ color: "#494444ff" }}>GreenGarden</Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <Link sx={{ color: "#494444ff" }}>Privacy Policy</Link>
        <Link sx={{ color: "#494444ff" }}>Terms and Conditions</Link>
      </Box>
    </Box>
  );
};

export default Footer;
