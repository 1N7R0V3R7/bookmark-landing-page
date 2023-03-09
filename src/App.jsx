import React, { useState } from "react";
import ActiveMenu from "./components/ActiveMenu";
import Download from "./components/Download";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMenu = () => {
    setIsMenuActive(prev => !prev)
  }
  return (
    <div className="font-rubik">
      {
        isMenuActive && <ActiveMenu toggleMenu={toggleMenu} />
      }
      <Navbar toggleMenu={toggleMenu} isMenuActive={isMenuActive} />
      <Intro />
      <Features />
      <Download />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
