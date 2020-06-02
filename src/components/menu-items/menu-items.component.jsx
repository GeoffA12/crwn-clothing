import React from "react";
import "./menu-items.style.scss";
import { withRouter } from "react-router-dom";

const MenuItem = (props) => (
  <div
    className={`${props.size} menu-item`}
    onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    />
    <div className="content">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

/*
withRouter is a higher-order function from react-router that will allow us to avoid prop drilling
by returning a higher order of our MenuItem components to parent components. The higher order MenuItem component
will now have access to browser history props and match props that we'll need.
*/
export default withRouter(MenuItem);
