import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "./AboutMe.css";

const AboutMe = ({data}) => {
  return (
    <Grid item xs={12}>
      <Typography variant="body2" className="aboutme_text">
        {data}
      </Typography>
    </Grid>
  );
};

export default AboutMe;
