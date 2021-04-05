import React, { useState } from "react";
import { Button, TextField, Typography, Grid } from "@material-ui/core";

const Signup = (props) => {
  const handleSubmit = (e) => {
    const email = document.forms["signup"]["email"].value;
    const password = document.forms["signup"]["password"].value;
    e.preventDefault();
    props
      .createNewUser({ email, password })
      .then(() => props.history.push("/success"));
  };

  return (
    <Grid
      container
      className="session-form"
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Typography variant="h1">Sign Up</Typography>
      </Grid>
      <form name="signup">
        <Grid item>
          <TextField
            autoFocus
            required
            name="email"
            helperText="Email"
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            autoFocus
            required
            name="password"
            helperText="Password"
            type="password"
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            autoFocus
            helperText="Confirm Password"
            type="password"
            variant="outlined"
          ></TextField>
        </Grid>
      </form>
      <Grid item>
        <Button variant="contained" onClick={handleSubmit}>
          Sign Up
        </Button>
      </Grid>
    </Grid>
  );
};

export default Signup;
