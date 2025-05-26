import React from "react";
import ContentLoader from "react-content-loader";

const ArticleSkeleton = () => (
  <ContentLoader
    speed={2}
    width={370}
    height={326}
    viewBox="0 0 370 326"
    backgroundColor="#EBEBEB"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="4" ry="4" width="370" height="209" />
    <rect x="11" y="213" rx="8" ry="8" width="354" height="40" />
    <rect x="13" y="314" rx="4" ry="4" width="91" height="11" />
    <rect x="12" y="259" rx="8" ry="8" width="354" height="48" />
  </ContentLoader>
);

export default ArticleSkeleton;
