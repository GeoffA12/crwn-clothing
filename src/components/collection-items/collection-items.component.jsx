import React from "react";
import "./collection-items.style.scss";
const CollectionItem = (props) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${props.imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{props.name}</span>
      <span className="name">{props.price}</span>
    </div>
  </div>
);

export default CollectionItem;
