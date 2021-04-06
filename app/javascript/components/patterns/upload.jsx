import React, { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import ImageUploading from "react-images-uploading";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  svg: {
    width: "20vw",
    height: "auto",
  },
  input: {
    width: "40vw",
  },
  uploadSquare: {
    border: "3px dashed grey",
    cursor: "pointer",
  },
  header: {
    fontFamily: "raleway",
  },
});

export default () => {
  const classes = useStyles();

  const [images, setImages] = useState([]);
  const maxNumber = 69;
  console.log(images);

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const onImgUpload = () => {
    props.history.push("/results");
  };

  return (
    <div className="upload">
      <ImageUploading
        multiple
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
              <Grid item>
                <Typography
                  className={classes.header}
                  variant="h1"
                  align="center"
                >
                  Upload
                </Typography>
              </Grid>
              <Grid item className={classes.uploadSquare}>
                <img
                  className={classes.svg}
                  onClick={onImageUpload}
                  {...dragProps}
                  src={require("../../../assets/images/add_files.svg")}
                />
              </Grid>
              <Grid item>
                <Typography align="center" variant="subtitle1">
                  Accepted file formats: .png, .jpg
                </Typography>
              </Grid>
            </Grid>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};
