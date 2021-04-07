import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Typography, Grid } from "@material-ui/core";

export default () => {
  const currentUser = useSelector((state) => state.session.currentUser);
  return (
    <Grid
      container
      justify="center"
      wrap="nowrap"
      direction="column"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Typography variant="h1">
          Welcome, {currentUser ? currentUser.email : "name"}
        </Typography>
      </Grid>
    </Grid>
  );
};
