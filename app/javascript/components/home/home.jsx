import React from "react";
import { Button, Typography, Grid } from "@material-ui/core";

export default () => {
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
        <Typography variant="h1">Latchify</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3">
          Create custom latch hook patterns with any photo.
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained">Get Started</Button>
      </Grid>
    </Grid>
  );
};
