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
    </div>
  );
};

export default Intro;
