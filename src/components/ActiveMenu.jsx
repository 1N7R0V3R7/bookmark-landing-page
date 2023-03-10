import React from "react";
import closeIcon from "../assets/images/icon-close.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import Logo from "./Logo";

const ActiveMenu = ({toggleMenu}) => {
  return (
    <div className="bg-neutral-very-dark-blue z-30 bg-opacity-90 fixed h-screen top-0 w-full">
      <div className="w-[85%] mx-auto mt-8 text-white text-2xl">
        <div className="flex justify-between items-center mb-4">
          <Logo bookmark='#242A45' circle='#fff' text='#fff' />
          <img src={closeIcon} alt="Close Menu Icon" className="h-5" onClick={() => toggleMenu()} />
        </div>
        <ul className="uppercase text-center tracking-widest grid divide-y divide-white/10">
          <li className="">&nbsp;</li>
          <li className="py-6">Features</li>
          <li className="py-6">Pricing</li>
          <li className="py-6">Contact</li>
          <li className="">&nbsp;</li>
        </ul>
        <button className="ring-2 tracking-widest h-14 ring-white rounded-md w-full uppercase">
          Login
        </button>
        <div className="flex justify-center gap-8 absolute bottom-16 left-1/2 -translate-x-1/2 items-center">
          <img src={facebookIcon} alt="Facebook Icon" className="" />
          <img src={twitterIcon} alt="Twitter Icon" className="" />
        </div>
      </div>
    </div>
  );
};

export default ActiveMenu;
