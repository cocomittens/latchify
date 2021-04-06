import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useResizeDetector } from "react-resize-detector";
// components
import { Button, Typography, Grid, MobileStepper } from "@material-ui/core";
// icons
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

const useStyles = makeStyles({
  header: {
    color: "#fff",
  },
  subheader: {
    color: "#fff",
    marginBottom: "3vh",
  },
  svg: {
    width: "100%",
  },
  gradient: {
    background: "linear-gradient(45deg, #6C63FF 30%, #3700B3 90%)",
    paddingTop: "3vh",
  },
  topBg: {
    zIndex: 2,
  },
  bottomBg: {
    backgroundColor: "#fff",
    width: "100%",
    height: ({ height }) => `calc(20vh + ${height}px)`,
    marginTop: ({ height }) => -height / 2,
  },
});

export default () => {
  const { height, ref } = useResizeDetector();
  const [imgHeight, setImgHeight] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const classes = useStyles({ height: imgHeight });

  useEffect(() => setImgHeight(height), [height]);

  return (
    <Grid
      container
      className={classes.gradient}
      justify="space-between"
      wrap="nowrap"
      direction="column"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Typography
          gutterBottom
          className={classes.header}
          variant="h1"
          align="center"
        >
          Latchify
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.subheader} variant="h3" align="center">
          Create custom latch hook patterns with any photo.
        </Typography>
      </Grid>

      <Grid item className={classes.topBg} xs={8} sm={6} md={5} lg={4}>
        <img
          ref={ref}
          className={classes.svg}
          src={require("../../../assets/images/home3.svg")}
        />
      </Grid>
      <Grid
        container
        item
        className={classes.bottomBg}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Button variant="contained" color="secondary">
            Get Started
          </Button>
        </Grid>
      </Grid>
      <MobileStepper
        variant="dots"
        steps={3}
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 2}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Grid>
  );
};
