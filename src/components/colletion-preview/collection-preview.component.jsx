import React from "react";
import CollectionItem from "../collection-items/collection-items.component";
import "./collection-preview.style.scss";

const CollectionPreview = (props) => (
  <div className="collection-preview">
    <h1 className="title">{props.title.toUpperCase()}</h1>
    <div className="preview">
      {/*Potential performance hit here considering that the props items array will need to be filtered
    every time the component will be re-rendered, especially if the items array gets to be very large */}
      {props.items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem
            key={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.price}
          />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
