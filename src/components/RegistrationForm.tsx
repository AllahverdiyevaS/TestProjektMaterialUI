import React, { useState } from "react";
import myLogo from "../images/logo.svg";

import {
  Box,
  Container,
  Paper,
  TextField,
  Typography,
  Button,
  Grid,
  Link,
} from "@mui/material";

type LoginFormValues = { email: string; password: string };
const RegistrationForm: React.FC = () => {
  const [values, setValues] = useState<LoginFormValues>({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("login");
  };
  return (
    <Container
      sx={{
        width: { xs: "90%", sm: "70%", md: "40%", lg: "30%" },
      }}
    >
      <Paper elevation={5} sx={{ marginTop: 20, paddinbg: 2 }}>
        <Box sx={{ textAlign: "center", mx: "auto", mb: 1 }}>
          <img src={myLogo} alt="Logo" width={40} />
        </Box>
        <Typography sx={{ textAlign: "center" }} variant="h5">
          Log in to your account
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          Please enter your details.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ margin: 5 }}>
          <TextField
            label="Email "
            placeholder="anna@green_garden.com"
            fullWidth
            required
            autoFocus
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#13a143ff",
                },
                "&.Mui-focused": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#13a143ff",
                  },
                },
              },
              "& .MuiInputLabel-outlined": {
                "&.Mui-focused": {
                  color: "#13a143ff",
                },
              },
            }}
            onChange={handleChange}
          />
          <TextField
            label="Enter password"
            placeholder="••••••••••"
            fullWidth
            required
            autoFocus
            type="password"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#13a143ff",
                },
                "&.Mui-focused": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#13a143ff",
                  },
                },
              },
              "& .MuiInputLabel-outlined": {
                "&.Mui-focused": {
                  color: "green",
                },
              },
            }}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 1,
              backgroundColor: "#13a143ff",
              "&:hover": {
                backgroundColor: "#0abd45ff",
              },
            }}
          >
            Sign In
          </Button>
        </Box>
        <Grid
          container
          justifyContent="space-between"
          sx={{ margin: 5, pb: 5 }}
        >
          <Button>
            <Link sx={{ color: "#13a143ff", textDecoration: "none" }}>
              Forgot Pasword
            </Link>
          </Button>
          <Button>
            <Link sx={{ color: "#13a143ff", textDecoration: "none" }}>
              Sign Up
            </Link>
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
};

export default RegistrationForm;
