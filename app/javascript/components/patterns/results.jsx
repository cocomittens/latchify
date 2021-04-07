import { Button, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { pixelit } from "../../packs/pixelit/dist/pixelit";

const useStyles = makeStyles({
  canvas: {
    width: "100%",
    maxHeight: "60vw",
  },
});

export const Results = (props) => {
  const classes = useStyles();
  const photo = useSelector((state) => state.pattern.photo);
  const [pattern, setPattern] = useState(null);

  useEffect(() => {
    const px = new pixelit();
    px.draw().pixelate().resizeImage();
    setPattern(px);
  }, [photo]);
  return (
    <div className="home">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Typography variant="h1">Results</Typography>
        </Grid>
        <Grid item xs={10} md={8} lg={6}>
          <img src={photo} id="pixelitimg" alt="" />
          <canvas className={classes.canvas} id="pixelitcanvas"></canvas>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={() => pattern.saveImage()}
          >
            Download
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            Would you like to create an account to save your pattern?
          </Typography>
        </Grid>
        <Grid item>
          <Button color="primary" variant="outlined">
            Sign Up
          </Button>
          <Typography variant="subtitle1" align="center">
            or
          </Typography>
          <Button color="primary" variant="outlined">
            Log In
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Results;
