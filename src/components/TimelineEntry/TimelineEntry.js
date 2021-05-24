import { Grid } from "@material-ui/core";
import React from "react";
import CustomTimeline, {
    CustomWorkTimelineItem
  } from "../../components/Timeline/Timeline";

  const TimelineEntry = ({md, title, icon, data}) => {
  return (
    <Grid item sm={12} md={md}>
      <CustomTimeline title={title} icon={icon}>
        {data.map((d) => (
          <CustomWorkTimelineItem
            title={d.title}
            date={title==="Awards" ? "" : d.date}
            description={d.description}
          />
        ))}
      </CustomTimeline>
    </Grid>
  );
};

export default TimelineEntry;
