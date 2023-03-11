import React from "react";
import imgDotted from "../assets/images/bg-dots.svg";

const ExtensionCard = (props) => {
  return (
    <div className={`rounded-xl p-8 shadow-xl h-fit text-center max-w-xs ${props.id>1 ? props.id===2 ? 'mt-8' : 'mt-16' : ''}`}>
      <img src={props.logoSrc} alt="Logo" className="mx-auto mt-8" />
      <h1 className="font-medium text-2xl mt-10 text-neutral-very-dark-blue">Add to {props.name}</h1>
      <p className="text-neutral-grayish-blue text-lg mt-2">
        Minimum version {props.minVersion}
      </p>
      <img src={imgDotted} alt="Dotted Line" className="w-full mb-8 mt-10" />
      <button className="primary-btn h-16 w-full md:h-12">Add & Instal Extension</button>
    </div>
  );
};

export default ExtensionCard;
