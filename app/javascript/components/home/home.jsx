import { Button, Grid, MobileStepper, Typography } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useResizeDetector } from "react-resize-detector";

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
    maxHeight: "380px",
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
    height: ({ height }) => height + 8,
    marginTop: ({ height }) => -height / 2,
    overflow: "hidden",
  },
  button: {
    marginTop: ({ height }) => height / 2,
  },
});

const steps = [
  {
    text: "Create custom latch hook patterns with any photo.",
    img: require("../../../assets/images/home1.svg"),
  },
  {
    text: "Upload photo and select photo options.",
    img: require("../../../assets/images/home2.svg"),
  },
  {
    text: "Download photo and start latchifying your creation.",
    img: require("../../../assets/images/home3.svg"),
  },
];

export default () => {
  const { height, ref } = useResizeDetector();
  const [imgHeight, setImgHeight] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [activeStepImage, setActiveStepImage] = useState(steps[0].img);
  const [activeStepText, setActiveStepText] = useState(steps[0].text);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const classes = useStyles({ height: imgHeight });

  useEffect(() => setImgHeight(height), [height]);

  useEffect(() => setActiveStepImage(steps[activeStep].img), [activeStep]);

  useEffect(() => setActiveStepText(steps[activeStep].text), [activeStep]);

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
          {activeStepText}
        </Typography>
      </Grid>

      <Grid item className={classes.topBg} xs={9} sm={7} md={5} lg={4}>
        <img ref={ref} className={classes.svg} src={activeStepImage} />
      </Grid>
      <Grid
        container
        item
        className={classes.bottomBg}
        justify="center"
        alignItems="center"
      >
        <Grid item className={classes.button}>
          <Link to="/upload">
            <Button variant="contained" color="primary" size="large">
              <Typography variant="button">GET STARTED</Typography>
            </Button>
          </Link>
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
