import { Grid } from "@material-ui/core";
import React from "react";

const Title = ({ title }) => {
  return (
    <Grid item className="section_title mb_30">
      {/* Span is for underlining of section title*/}
      <span></span>
      <h6 className="section_title_text">{title}</h6>
    </Grid>
  );
};

export default Title;
