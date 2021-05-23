import React from "react";
import { Typography } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import "./Timeline.css";

const CustomTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className={"timeline"}>
      {/* Item Header */}
      <TimelineItem className={"timeline_firstItem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot_header"}>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={"timeline_header"}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {/* Renders all subsequent timeline items in Profile.js*/}
      {children}
    </Timeline>
  );
};

// CustomTimelineSeparator is made up of a dot and a connector
const CustomTimelineSeparator = () => (
  <TimelineSeparator className={"separator_padding"}>
    <TimelineDot variant={"outlined"} className={"timeline_dot"} />
    <TimelineConnector />
  </TimelineSeparator>
);

// Creates a profile timeline item entry consisting of title and text, and maybe a link
export const CustomProfileTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    {/* For timeline content separation*/}
    <CustomTimelineSeparator />
    {/* Children content in timeline*/}
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="_blank" rel="noreferrer">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

// Creates a work experience timeline entry consisting of a title, date and description
export const CustomWorkTimelineItem = ({ title, date, description }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="work_content">
      <Typography className="timeline_title">{title}</Typography>
      <Typography variant="caption" className="timeline_date">
        {date}
      </Typography>
      <Typography variant="body2" className="timeline_description">
        {description}
      </Typography>
    </TimelineContent>
  </TimelineItem>
);

export default CustomTimeline;
