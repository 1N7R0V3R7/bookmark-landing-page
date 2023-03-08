import React from "react";
import imgTab1 from '../assets/images/illustration-features-tab-1.svg'
import imgTab2 from '../assets/images/illustration-features-tab-2.svg'
import imgTab3 from '../assets/images/illustration-features-tab-3.svg'
import IllustrationCard from "./IllustrationCard";


const Features = () => {
  const bookmarkFeatures = [
    {
      id: 1,
      title: "Simple Bookmarking",
      heading: "Bookmark in one click",
      desc: "Organize your bookmakrs however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.",
      imgSrc: imgTab1
    },
    {
      id: 2,
      title: "Speedy Searching",
      heading: "Intelligent Search",
      desc: "Our powerful search feature will help you find sved sites in no time at all. No need to trawl through all of your bookmarks.",
      imgSrc: imgTab2
    },
    {
      id: 3,
      title: "Easy Sharing",
      heading: "Share your bookmarks",
      desc: "Easily share your bookmarks and colletions with others. Create a shareable link that you can send at the click of a button",
      imgSrc: imgTab3
    },
  ];

  return (
    <div className="text-center mt-32 w-[85%] mx-auto">
      <h1 className="heading">Features</h1>
      <p className="description">
        Our aim is to make it quick and easy for you to access your favorite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>

      <ul className="description text-xl grid divide-y">
        <li className=""></li>
        {bookmarkFeatures.map((feature) => (
          <li key={feature.id} className="py-4">
            {feature.title}
          </li>
        ))}
        <li className=""></li>
      </ul>
      <IllustrationCard {...bookmarkFeatures[0]} />
    </div>
  );
};

export default Features;
