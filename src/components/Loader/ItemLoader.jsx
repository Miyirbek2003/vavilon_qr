import React from "react";
import ContentLoader from "react-content-loader";

const ItemLoader = (props) => (
  <ContentLoader
    speed={1}
    width={353}
    height={187}
    viewBox="0 0 353 187"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="19" y="30" rx="0" ry="0" width="0" height="1" />
    <rect x="550" y="320" rx="0" ry="0" width="64" height="10" />
    <rect x="30" y="223" rx="0" ry="0" width="32" height="32" />
    <rect x="71" y="223" rx="0" ry="0" width="32" height="32" />
    <rect x="0" y="0" rx="17" ry="17" width="353" height="150" />
    <rect x="0" y="154" rx="5" ry="5" width="75" height="23" />
  </ContentLoader>
);

export default ItemLoader;
