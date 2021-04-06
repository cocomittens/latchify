import React, { useState } from "react";
import { Button, TextField, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  svg: {
    width: "20vw",
    height: "auto",
  },
  input: {
    width: "40vw",
  },
});

const Signup = (props) => {
  const classes = useStyles();
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
      <Grid item>
        <img
          className={classes.svg}
          src={require("../../../assets/images/signin.svg")}
        />
      </Grid>
      <form name="signup">
        <Grid item className={classes.input}>
          <TextField
            autoFocus
            required
            fullWidth
            name="email"
            label="Email"
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            autoFocus
            required
            fullWidth
            margin="normal"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            autoFocus
            fullWidth
            margin="normal"
            label="Confirm Password"
            type="password"
            variant="outlined"
          ></TextField>
        </Grid>
      </form>
      <Grid item>
        <Button color="secondary" variant="contained" onClick={handleSubmit}>
          Sign Up
        </Button>
      </Grid>
    </Grid>
  );
};

export default Signup;
