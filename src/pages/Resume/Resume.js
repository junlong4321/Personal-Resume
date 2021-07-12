import { Grid } from "@material-ui/core";
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skill from "../../components/Skill/Skill";
import TimelineEntry from "../../components/TimelineEntry/TimelineEntry";
import Title from "../../components/Title/Title";
import resumeData from "../../utils/resumeData";

const Resume = () => {
  return (
    <>
      {/* About me */}
      <Grid container className="section pb_45">
        <Title title={"About Me"} />
        <AboutMe data={resumeData.about} />
      </Grid>

      {/* Resume */}
      <Grid container className="section pb_45">
        <Title title={"Resume"} />
        {/* Experience + Education considered 1 grid item, within it there is a grid container holding
        2 grid items (1 for Education, 1 for Experience)*/}
        <Grid item xs={12}>
          <Grid container>
            {/* md controls how many grids there are within the same container*/}
            {/* As you scale up the application, you might want Work Experience to be in
            one row instead of sharing it with Education. Set md={12} during then*/}
            {/* Awards */}
            <TimelineEntry
              md={12}
              title={"Awards"}
              icon={<EmojiEventsIcon />}
              data={resumeData.awards}
            />
            {/* Experiences */}
            <TimelineEntry
              md={6}
              title={"Work Experience"}
              icon={<WorkIcon />}
              data={resumeData.experiences}
            />
            {/* Education */}
            <TimelineEntry
              md={6}
              title={"Education"}
              icon={<SchoolIcon />}
              data={resumeData.education}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section graybg pb_45">
        <Title title={"Technologies I've Worked With"} />
        <Skill data={resumeData.skills} />
      </Grid>
    </>
  );
};

export default Resume;
