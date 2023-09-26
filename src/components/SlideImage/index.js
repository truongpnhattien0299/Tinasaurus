import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const RenderImage = ({ url }) => {
  return (
    <div className="each-slide-effect">
      <img
        src={url}
        style={{
          maxHeight: "30%",
          maxWidth: "100%",
          objectFit: "fill",
          width: "100%",
        }}
      />
    </div>
  );
};
export const SlideImage = ({ data, index }) => {
  const { images } = data;
  console.log(images?.map((item) => item?.image));
  return (
    <Slide>
      {images?.map((item) => (
        <RenderImage key={index} url={item?.image} />
      ))}
    </Slide>
  );
};
