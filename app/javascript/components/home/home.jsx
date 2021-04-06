import React, { useState, useEffect } from "react";
import { Button, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useResizeDetector } from "react-resize-detector";

const useStyles = makeStyles({
  white: {
    color: "#fff",
  },
  svg: {
    width: "100%",
  },
  gradient: {
    background: "linear-gradient(45deg, #6C63FF 30%, #3700B3 90%)",
  },
  topBg: {
    zIndex: 2,
  },
  bottomBg: {
    backgroundColor: "#fff",
    width: "100%",
    height: ({ height }) => height,
    marginTop: ({ height }) => -height / 2,
  },
});

export default () => {
  const { height, ref } = useResizeDetector();
  const [imgHeight, setImgHeight] = useState(0);
  const classes = useStyles({ height: imgHeight });

  useEffect(() => setImgHeight(height), [height]);

  return (
    <div id="home">
      <Grid
        container
        justify="space-between"
        wrap="nowrap"
        direction="column"
        alignItems="center"
      >
        <Grid
          container
          item
          className={classes.gradient}
          justify="space-between"
          wrap="nowrap"
          direction="column"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Typography className={classes.white} variant="h1" align="center">
              Latchify
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.white} variant="h3" align="center">
              Create custom latch hook patterns with any photo.
            </Typography>
          </Grid>
          <Grid
            item
            className={classes.topBg}
            xs={10}
            sm={9}
            md={8}
            lg={7}
            xl={6}
          >
            <img
              ref={ref}
              className={classes.svg}
              src={require("../../../assets/images/signin.svg")}
            />
          </Grid>
          <Grid item className={classes.bottomBg}></Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Get Started
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
