import React from "react";

const IllustrationCard = (feature) => {
  return (
    <div className={`${feature.featureColumn && 'mt-20'}`}>
      <div className="relative">
        <div
          className={`bg-primary-blue h-[90%] w-[85%] absolute ${
            feature.featureColumn
              ? "left-0 rounded-r-full"
              : "right-0 rounded-l-full"
          } top-16 -z-[1]`}
        ></div>
        <img
          src={feature.imgSrc}
          alt="Hero Image"
          className={`${feature.featureColumn && "w-[85%] mx-auto"}`}
        />
      </div>
      <div className="text-center mt-20 w-[85%] mx-auto">
        <h1 className="font-medium text-3xl">{feature.heading}</h1>
        <p className="text-neutral-grayish-blue mt-6 mb-8">{feature.desc}</p>
      </div>
      {
        feature.featureColumn && <button className="primary-btn px-6 py-4">
        More Info
        </button>
      }
    </div>
  );
};

export default IllustrationCard;
