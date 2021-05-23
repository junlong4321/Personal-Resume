import { Grid, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import ComputerIcon from "@material-ui/icons/Computer";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import TimelineDot from "@material-ui/lab/TimelineDot";
import React from "react";
import CustomTimeline, {
  CustomWorkTimelineItem,
} from "../../components/Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import "./Resume.css";

const Resume = () => {
  return (
    <>
      {/* About me */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          {/* Span is for underlining of section title*/}
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">{resumeData.about}</Typography>
        </Grid>
      </Grid>

      {/* Resume */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>
        {/* Experience + Education considered 1 grid item, within it there is a grid container holding
        2 grid items (1 for Education, 1 for Experience)*/}
        <Grid item xs={12}>
          <Grid container>
            {/* Awards */}
            <Grid item sm={12} md={12}>
              <CustomTimeline title="Awards" icon={<ComputerIcon />}>
                {resumeData.awards.map((award) => (
                  <CustomWorkTimelineItem
                    title={award.title}
                    description={award.description}
                  />
                ))}
              </CustomTimeline>
            </Grid>
            {/* Experiences */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                {resumeData.experiences.map((experience) => (
                  <CustomWorkTimelineItem
                    title={experience.title}
                    date={experience.date}
                    description={experience.description}
                  />
                ))}
              </CustomTimeline>
            </Grid>
            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
                {resumeData.education.map((education) => (
                  <CustomWorkTimelineItem
                    title={education.title}
                    date={education.date}
                    description={education.description}
                  />
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section graybg pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Technologies I've Worked With</h6>
        </Grid>
        <Grid container spacing={3}>
          {resumeData.skills.map((skill) => (
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={0} className="skill">
                <Typography variant="h6" className="skill_title">
                  {skill.title}
                </Typography>
                {skill.description.map((element) => (
                  <Typography variant="body2" className="skill_description">
                    <TimelineDot
                      variant={"outlined"}
                      className="timeline_dot"
                    />
                    {element}
                  </Typography>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
