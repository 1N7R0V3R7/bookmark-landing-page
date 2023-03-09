import React, { useState } from "react";
import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import logo from "../assets/images/logo-bookmark-white.svg";

const Footer = () => {

  const [email, setEmail] = useState('')

  const rePattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  console.log(email);

  // TODO: Add a Logo.jsx file to replace all the other different uses of logo.svg

  return (
    <div className="mt-32 text-center">
      <div className="bg-primary-blue py-16 text-white">
        <div className="w-[85%] mx-auto">
          <h4 className="tracking-[0.2rem] text-sm">35,000+ already joined</h4>
          <h1 className="text-2xl font-medium mt-2 mb-8">
            Stay up-to-date with what we're doing
          </h1>
          <input
            type="text"
            className="placeholder-neutral-200 py-4 px-6 mb-4 rounded-lg w-full text-neutral-dark-gray" 
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-primary-red py-4 rounded-lg w-full">Contact Us</button>
        </div>
      </div>
      <div className="bg-neutral-very-dark-blue py-16 text-neutral-grayish-blue">
        <img src={logo} alt="Bookmark Logo" className="h-6 mb-8 mx-auto" />
        <ul className="uppercase tracking-widest">
          <li className="py-3">Features</li>
          <li className="py-3">Pricing</li>
          <li className="py-3">Contact</li>
        </ul>
        <div className="flex justify-center gap-8 items-center mt-12">
          <img src={facebookIcon} alt="Facebook Icon" className="" />
          <img src={twitterIcon} alt="Twitter Icon" className="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
