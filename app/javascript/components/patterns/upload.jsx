import { Button, Grid, Typography } from "@material-ui/core";
import { RECEIVE_PHOTO, receivePhoto } from "../../actions/pattern";
import React, { useState } from "react";

import ImageUploading from "react-images-uploading";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  svg: {
    width: "100%",
  },
  uploadSquare: {
    border: "3px dashed grey",
    borderRadius: "10px",
    cursor: "pointer",
  },
});

const Pattern = (props) => {
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList[0]);
    props.receivePhoto(imageList[0].data_url);
    props.history.push("/results");
  };
  return (
    <div className="upload">
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Grid
              container
              direction="column"
              justify="center"
              alignContent="center"
              spacing={2}
            >
              <Grid item xs={8}>
                <Typography
                  gutterBottom
                  className={classes.header}
                  variant="h2"
                  align="center"
                >
                  Upload
                </Typography>
              </Grid>
              <Grid
                container
                item
                className={classes.uploadSquare}
                onClick={onImageUpload}
                {...dragProps}
                justify="center"
                alignItems="center"
                xs={10}
                sm={8}
                md={7}
                lg={6}
                direction="column"
                spacing={1}
              >
                <Grid item>
                  <Typography
                    gutterBottom
                    className={classes.header}
                    variant="h3"
                    align="center"
                  >
                    Select image to latchify
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <img
                    className={classes.svg}
                    src={require("../../../assets/images/add_files.svg")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" align="center">
                    Drag & Drop or
                  </Typography>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Click to upload
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="center" variant="body2">
                    Accepted file formats: .png, .jpg, .gif
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    receivePhoto: (e) => dispatch(receivePhoto(e)),
  };
}

export default connect(null, mapDispatchToProps)(Pattern);
