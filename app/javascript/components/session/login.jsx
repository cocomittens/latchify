import React, { useState } from "react";
import { Button, TextField, Typography, Grid } from "@material-ui/core";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props
      .createNewUser({ email, password })
      .then(() => props.history.push("/"));
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
        <Typography variant="h1">Log In</Typography>
      </Grid>
      <Grid item>
        <TextField
          autoFocus
          required
          helperText="Email"
          value={email}
          variant="outlined"
        ></TextField>
      </Grid>
      <Grid item>
        <TextField
          autoFocus
          required
          helperText="Password"
          value={password}
          variant="outlined"
        ></TextField>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={handleSubmit}>
          Log In
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
