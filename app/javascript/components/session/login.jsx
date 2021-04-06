import React, { useState } from "react";
import { Button, TextField, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  svg: {
    width: "20vw",
    height: "auto",
  },
});

const Login = (props) => {
  const classes = useStyles();

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
        <img
          className={classes.svg}
          src={require("../../../assets/images/signin.svg")}
        />
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
        <Button color="secondary" variant="contained" onClick={handleSubmit}>
          Log In
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
