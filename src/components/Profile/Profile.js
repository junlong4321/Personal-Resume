import { Typography } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import React from "react";
import resumeData from "../../utils/resumeData";
import CustomTimeline, { CustomProfileTimelineItem } from "../Timeline/Timeline";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
        <Typography className="title">{resumeData.specialization}</Typography>
      </div>

      <figure className="profile_image">
        <img src={resumeData.profilePic} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<FaceIcon />}>
          {/* Children / timeline items rendered by CustomTimeline*/}
          {/* <CustomProfileTimelineItem title="Email" text={resumeData.email} /> */}

          {Object.keys(resumeData.socials).map((key) => (
            <CustomProfileTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>

        {/* <div className="button_container">
          <CustomButton text={resumeData.cv} icon={<GetAppIcon />} />
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
