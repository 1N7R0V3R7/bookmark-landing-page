import React from "react";

const IllustrationCard = (feature) => {
  return (
    <div className="relative">
      <div
        className={`${
          feature.featureColumn && "mt-20"
        } md:grid md:grid-cols-2 md:items-center lg:max-w-5xl lg:mx-auto`}
      >
        <div className="relative">
          <div
            className={`bg-primary-blue h-[90%] w-[85%] lg:hidden absolute ${
              feature.featureColumn
                ? "left-0 rounded-r-full"
                : "right-0 rounded-l-full"
            } top-16 -z-[1]`}
          ></div>
          <img
            src={feature.imgSrc}
            alt="Hero Image"
            className={`${
              feature.featureColumn && "w-[85%] mx-auto lg:max-w-[75%]"
            }`}
          />
        </div>
        <div
          className={`text-center lg:text-left mt-20 lg:mt-0 ${
            !feature.featureColumn && "md:order-first"
          }`}
        >
          <h1 className="font-medium text-3xl">{feature.heading}</h1>
          <p className="text-neutral-grayish-blue mt-6 mb-8">{feature.desc}</p>
          {feature.featureColumn ? (
            <button className="primary-btn px-6 py-4 lg:py-2">More Info</button>
          ) : (
            <div className="w-[85%] mx-auto lg:mx-0 grid grid-cols-2 h-12 gap-4 font-medium">
              <button className="primary-btn">Get it on Chrome</button>
              <button className="bg-[hsl(0,0%,97%)] text-neutral-dark-gray rounded-lg hover:ring-2 hover:ring-neutral-dark-gray hover:bg-white">
                Get it on Firefox
              </button>
            </div>
          )}
        </div>
      </div>
      <div
        className={`bg-primary-blue h-[100%] w-[45%] hidden lg:block absolute ${
          feature.featureColumn
            ? "left-0 rounded-r-full"
            : "right-0 rounded-l-full"
        } top-16 -z-[1]`}
      ></div>
    </div>
  );
};

export default IllustrationCard;
