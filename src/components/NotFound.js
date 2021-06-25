import React from "react";

const NotFound = ({ setBannerTitle }) => {
  document.title = "404 || Retro Blog";
  setBannerTitle("404");
  return <div>404</div>;
};

export default NotFound;
