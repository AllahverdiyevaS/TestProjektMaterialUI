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

const RegistrationForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (e.target.value.trim() === "") {
      setEmailError(false);
    }
    if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(e.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    const isValid =
      value.length >= 8 &&
      /[!@#$%^&*(),.?":{}|<>]/.test(value) &&
      /[0-9]/.test(value);

    setPasswordError(!isValid);
  };

  const handleSubmit = () => {
    console.log("login");
  };
  return (
    <Container
      sx={{
        width: { xs: "90%", sm: "70%", md: "60%", lg: "50%" },
      }}
    >
      <Paper elevation={5} sx={{ margin: 5, paddinbg: 2 }}>
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
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError ? "Invalid email address" : ""}
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
          />
          <TextField
            onChange={handlePasswordChange}
            error={passwordError}
            helperText={
              passwordError
                ? "Password must be at least 8 characters, include a number and a special character"
                : ""
            }
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
