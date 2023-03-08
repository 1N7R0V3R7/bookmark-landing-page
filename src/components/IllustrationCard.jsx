import React from "react";

const IllustrationCard = (feature) => {
  return (
    <div className="">
      <div className="">
        {/* <div className="bg-primary-blue h-64 w-[90%] rounded-l-full relative right-0 -z-[1]"></div> */}
        <img
          src={feature.imgSrc}
          alt="Hero Image"
          className=""
        />
      </div>
      <div className="text-center mt-16">
        <h1 className="font-medium text-3xl">{feature.heading}</h1>
        <p className="text-neutral-grayish-blue mt-6 mb-8">{feature.desc}</p>
      </div>
    </div>
  );
};

export default IllustrationCard;
