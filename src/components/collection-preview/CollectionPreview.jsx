import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./CollectionPreview.scss";
const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...collectionProps }) => (
            <CollectionItem key={id} {...collectionProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
