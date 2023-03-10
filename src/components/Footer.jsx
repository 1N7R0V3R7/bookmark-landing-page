import React, { useState } from "react";
import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import Logo from "./Logo";
import errorIcon from "../assets/images/icon-error.svg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(-1);

  const rePattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return (
    <div className="mt-32 text-center">
      <div className="bg-primary-blue py-16 text-white">
        <div className="w-[85%] mx-auto">
          <h4 className="tracking-[0.2rem] text-sm">35,000+ already joined</h4>
          <h1 className="text-2xl font-medium mt-2 mb-8">
            Stay up-to-date with what we're doing
          </h1>
          <div
            className={
              !validEmail
                ? `bg-primary-red p-1 rounded-lg text-left relative text-xs`
                : ""
            }
          >
            <input
              type="text"
              className="placeholder-neutral-200 text-base py-4 px-6 rounded-lg w-full text-neutral-dark-gray"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!validEmail && (
              <img src={errorIcon} alt="Error icon" className="h-6 w-6 absolute right-6 bottom-1/2" />
            )}
            <p className={!validEmail ? `ml-2 my-2 italic` : "hidden"}>
              Whoops, make sure it's an email
            </p>
          </div>
          <button
            className="bg-primary-red py-4 rounded-lg w-full mt-4"
            onClick={() => setValidEmail(rePattern.test(email))}
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="bg-neutral-very-dark-blue py-16 text-neutral-grayish-blue">
        <Logo
          class="mb-4 mx-auto"
          bookmark="#fff"
          circle="hsl(231, 69%, 60%)"
          text="#fff"
        />
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
