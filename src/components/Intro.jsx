import React from "react";
import imgHero from "../assets/images/illustration-hero.svg";
import IllustrationCard from "./IllustrationCard";

const Intro = () => {
  const intro = {
    heading: "A Simple Bookmark Manager",
    desc: "A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.",
    imgSrc: imgHero,
  };
  return (
    <div className="">
      <IllustrationCard {...intro} />
      <div className="w-[85%] mx-auto grid grid-cols-2 h-12 gap-4 font-medium">
        <button className="bg-primary-blue text-white rounded-lg hover:bg-white hover:text-primary-blue hover:ring-2 hover:ring-primary-blue">
          Get it on Chrome
        </button>
        <button className="bg-[hsl(0,0%,97%)] text-neutral-dark-gray rounded-lg hover:ring-2 hover:ring-neutral-dark-gray hover:bg-white">
          Get it on Firefox
        </button>
      </div>
    </div>
  );
};

export default Intro;
