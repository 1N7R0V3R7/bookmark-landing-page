import React, { useState } from "react";
import imgTab1 from "../assets/images/illustration-features-tab-1.svg";
import imgTab2 from "../assets/images/illustration-features-tab-2.svg";
import imgTab3 from "../assets/images/illustration-features-tab-3.svg";
import IllustrationCard from "./IllustrationCard";

const Features = () => {
  const bookmarkFeatures = [
    {
      id: 1,
      title: "Simple Bookmarking",
      heading: "Bookmark in one click",
      desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.",
      imgSrc: imgTab1,
      isSelected: true,
    },
    {
      id: 2,
      title: "Speedy Searching",
      heading: "Intelligent Search",
      desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      imgSrc: imgTab2,
      isSelected: false,
    },
    {
      id: 3,
      title: "Easy Sharing",
      heading: "Share your bookmarks",
      desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button",
      imgSrc: imgTab3,
      isSelected: false,
    },
  ];

  const [currTab, setCurrTab] = useState(1);

  return (
    <div className="text-center mt-32">
      <div className="w-[85%] mx-auto">
        <h1 className="heading">Features</h1>
        <p className="description">
          Our aim is to make it quick and easy for you to access your favorite
          websites. your bookmarks sync between your devices so you can access
          them on the go.
        </p>
        <ul className="text-neutral-dark-gray text-xl grid divide-y">
          <li className=""></li>
          {bookmarkFeatures.map((feature) => (
            <li
              key={feature.id}
              className={`py-4 relative ${feature.id === currTab && 'text-neutral-very-dark-blue'}`}
              onClick={() => setCurrTab(feature.id)}
            >
              {feature.title}
              {feature.id === currTab && (
                <div className="bg-primary-red h-1 absolute bottom-0 left-0 translate-x-1/2 w-40"></div>
              )}
            </li>
          ))}
          <li className=""></li>
        </ul>
      </div>
      {bookmarkFeatures.map((feature, index) => {
        if (feature.id === currTab) {
          return (
            <IllustrationCard
              key={feature.id}
              {...bookmarkFeatures[index]}
              featureColumn={true}
            />
          );
        }
      })}
    </div>
  );
};

export default Features;
