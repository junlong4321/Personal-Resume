import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import Title from "../../components/Title/Title";
import resumeData from "../../utils/resumeData";
import "./Portfolio.css";

const Portfolio = () => {
  // Default panel of the portfolio page will be at "All"
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  const ProjectDialog = () => (
    // Dialog opens so long the projectDialog value is not false
    // Helps to open up the project in a new modal
    <Dialog
      open={projectDialog}
      onClose={() => setProjectDialog(false)}
      className="projectDialog"
      maxWidth={"lg"} // Can be xs, sm, lg, or xl
      fullWidth
    >
      <DialogTitle onClose={() => setProjectDialog(false)}>
        {projectDialog.title}
      </DialogTitle>
      <DialogContent style={{ height: "80vh" }}>
        {projectDialog.images && <ImageGallery images={projectDialog.images} />}

        <Typography className="projectDialog_description">
          {projectDialog.description}
        </Typography>
      </DialogContent>
      <DialogActions className="projectDialog_actions">
        {projectDialog?.links?.map((link) => (
          <a
            href={link.link}
            target="_blank"
            rel="noreferrer"
            className="projectDialog_icon"
          >
            {link.icon}
          </a>
        ))}
      </DialogActions>
    </Dialog>
  );

  return (
    <Grid container className="section pb_45 pt_45">
      {/* Title */}
      <Title title={"Portfolio"} />
      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="customTabs"
          variant="scrollable"
          scrollButtons="on"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          {/* If the current tab is ALL, assign className as customTabs_item active */}
          {/* Otherwise assign as customTabs_item*/}
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All" ? "customTabs_item active" : "customTabs_item"
            }
          />
          {/* Filter tags to get unique tags, then map through tags and create project tabs along side with "All"*/}
          {/* ie we will get something like All -- React -- Django -- Java*/}
          {[...new Set(resumeData.portfolioTags.map((tag) => tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue === tag
                    ? "customTabs_item active"
                    : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {resumeData.projects.map((project) => (
            <>
              {/* If all tab, show all projects. Otherwise, show only
              the project with the relevant tag*/}
              {/* md = {4} means each grid takes 4 units of spacing out of 12 units in each row
              ie max 12/4 = 3 cards */}
              {project.tag.includes(tabValue) || tabValue === "All" ? (
                <Grid item xs={12} sm={6} md={4}>
                  <Grow in timeout={1000}>
                    <Card
                      className="customCard"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        {/* Default card image is project.images[0]*/}
                        <CardMedia
                          className="customCard_image"
                          image={project.images[0]}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography className="customCard_title">
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
      <ProjectDialog />
    </Grid>
  );
};

export default Portfolio;
