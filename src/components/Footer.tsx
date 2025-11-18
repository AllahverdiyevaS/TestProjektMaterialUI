import { Box, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 4,
        padding: "0 1rem",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <Typography sx={{ color: "#494444ff" }}>
        GreenGarden {new Date().getFullYear()}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Link
          sx={{
            color: "#494444ff",
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
              textDecorationColor: "#13a143ff",
            },
          }}
        >
          Privacy Policy
        </Link>
        <Link
          sx={{
            color: "#494444ff",
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
              textDecorationColor: "#13a143ff",
            },
          }}
        >
          Terms and Conditions
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
