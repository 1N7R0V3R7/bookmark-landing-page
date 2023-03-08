import React from "react";
import imgDotted from "../assets/images/bg-dots.svg";

const ExtensionCard = (props) => {
  return (
    <div className="rounded-xl p-8 shadow-xl text-center">
      <img src={props.logoSrc} alt="Logo" className="mx-auto mt-8" />
      <h1 className="font-medium text-2xl text-neutral-very-dark-blue">Add to {props.name}</h1>
      <p className="text-neutral-grayish-blue text-lg mt-2">
        Minimum version {props.minVersion}
      </p>
      <img src={imgDotted} alt="Dotted Line" className="w-full mb-8 mt-10" />
      <button className="bg-primary-blue w-full font-medium text-white h-16 rounded-lg">Add & Instal Extension</button>
    </div>
  );
};

export default ExtensionCard;
