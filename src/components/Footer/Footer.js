import { Typography } from "@material-ui/core";
import React from "react";
import resumeData from "../../utils/resumeData";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">
          Resume -- {resumeData.name}
        </Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Developed and Finetuned by {resumeData.name} using ReactJS
          {/* <br />
          Referenced -- {" "}
          <a
            href="https://www.youtube.com/watch?v=r4Rr1wSCYMA"
            target="_blank"
            rel="noreferrer"
          >
            Salman Fazal's React Resume Tutorial
          </a> */}
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
