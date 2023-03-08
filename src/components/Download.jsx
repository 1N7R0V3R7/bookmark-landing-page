import React from "react";
import chrome from "../assets/images/logo-chrome.svg";
import firefox from "../assets/images/logo-firefox.svg";
import opera from "../assets/images/logo-opera.svg";
import ExtensionCard from "./ExtensionCard";

const Download = () => {
  const extensions = [
    {
      id: 1,
      name: "Chrome",
      minVersion: 62,
      logoSrc: chrome,
    },
    {
      id: 2,
      name: "Firefox",
      minVersion: 55,
      logoSrc: firefox,
    },
    {
      id: 3,
      name: "Chrome",
      minVersion: 46,
      logoSrc: opera,
    },
  ];
  const renderExtensions = extensions.map((extension) => (
    <ExtensionCard key={extension.id} {...extension} />
  ));
  return (
    <div className="mt-32 w-[85%] mx-auto text-center">
      <h1 className="heading">Download the extension</h1>
      <p className="description">
        We've got more browsers in the pipeline. Please do let us know if you've
        got a favorite you'd like us to prioritize.
      </p>
      <div className="flex flex-col gap-6">{renderExtensions}</div>
    </div>
  );
};

export default Download;
