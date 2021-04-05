import React, { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import ImageUploading from "react-images-uploading";

export default () => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
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
                <Typography variant="h2">Upload</Typography>
              </Grid>
              <Grid item>
                <Button
                  onClick={onImageUpload}
                  {...dragProps}
                  variant="contained"
                >
                  Click or Drop here
                </Button>
              </Grid>
            </Grid>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};
