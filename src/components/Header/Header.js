import { HomeRounded, Telegram } from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import "./Header.css";

const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    /* Sticky allows header to be present even as we scroll downwards */
    <Navbar expand="lg" sticky="top" className="header">
      {/* Link to Home Page (On the resume site this is the "Home" icon) */}
      <Nav.Link as={NavLink} to="/Resume" className="header_navlink">
        <Navbar.Brand className="header_home">
          {/* Home Logo */}
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      {/* Collapse if the width of the page shrinks, so that user can navigate using a side bar*/}
      <Navbar.Collapse>
        <Nav className="header_left">
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to="/Resume"
            className={pathName === "/Resume" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>

          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to="/Portfolio"
            className={
              pathName === "/Portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a
              href={resumeData.socials[key].link}
              target="_blank"
              rel="noreferrer"
            >
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton
            text={resumeData.contact}
            icon={<Telegram />}
            url={resumeData.telegramURL}
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
