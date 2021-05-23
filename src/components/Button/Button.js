import { Button } from "@material-ui/core";
import React from "react";
import "./Button.css";


const CustomButtom = ({ text, icon, url }) => {
  return (
    <Button
      className="custom_btn"
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default CustomButtom;
