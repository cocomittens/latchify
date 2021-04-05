import React, { useState } from "react";
import { Button, TextField, Typography, Grid } from "@material-ui/core";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props
      .createNewUser({ email, password })
      .then(() => props.history.push("/patterns"));
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
      <form>
        <Grid item>
          <TextField
            autoFocus
            required
            helperText="Email"
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            autoFocus
            required
            helperText="Password"
            type="password"
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            autoFocus
            required
            helperText="Confirm Password"
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
