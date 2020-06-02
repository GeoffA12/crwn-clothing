import React from "react";
import "./menu-items.style.scss";

const MenuItem = (props) => (
  <div className={`${props.size} menu-item`}>
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

export default MenuItem;
