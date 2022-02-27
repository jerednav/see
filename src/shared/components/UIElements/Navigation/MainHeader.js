import React from "react";

import "./MainHeader.css";

const MainHeader = (props) => {
  /* props.children - will refer to the things that you pass between your opening and closing
      tags of your component, which will then be main-navigation */
  return <header class='main-header'>{props.children}</header>;
};

export default MainHeader;
