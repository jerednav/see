import React from "react";

import "./Avatar.css";

const Avatar = ({ image, style, width, name, className }) => {
  return (
    <div className={`avatar ${className}`} style={style}>
      <img src={image} alt={name} style={{ width: width, height: width }} />
    </div>
  );
};

export default Avatar;
