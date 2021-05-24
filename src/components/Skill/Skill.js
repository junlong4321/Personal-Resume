import { Grid, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TimelineDot from "@material-ui/lab/TimelineDot";
import React from "react";
import "./Skill.css";

const Skill = ({ data }) => {
  return (
    <Grid container spacing={3}>
      {data.map((d) => (
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={0} className="skill">
            <Typography variant="h6" className="skill_title">
              {d.title}
            </Typography>
            {d.description.map((element) => (
              <Typography variant="body2" className="skill_description">
                <TimelineDot variant={"outlined"} className="timeline_dot" />
                {element}
              </Typography>
            ))}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Skill;
