import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="280" height="280" />
    <rect x="0" y="300" rx="6" ry="6" width="220" height="24" />
    <rect x="0" y="340" rx="10" ry="10" width="289" height="70" />
    <rect x="0" y="435" rx="6" ry="6" width="90" height="30" />
    <rect x="125" y="427" rx="20" ry="20" width="155" height="45" />
  </ContentLoader>
);

export default Skeleton;
