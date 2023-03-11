import React from 'react'
import Logo from './Logo'
import hamburgerIcon from '../assets/images/icon-hamburger.svg'

const Navbar = ({toggleMenu, isMenuActive}) => {
  return (
    <div className={`flex justify-between items-center w-[85%] mx-auto lg:max-w-5xl mt-8 mb-24 ${isMenuActive && 'invisible'}`}>
      <Logo circle='#5267DF' text='#242A45' bookmark='#fff' />
      <img src={hamburgerIcon} alt="Hamburger Menu Icon" className="h-5 md:hidden" onClick={() => toggleMenu()} />
      <div className="uppercase hidden md:flex md:justify-center md:items-center md:gap-x-12 text-neutral-dark-gray tracking-widest">
        <div className="">Features</div>
        <div className="">Pricing</div>
        <div className="">Contact</div>
        <button className="bg-primary-red rounded-lg text-white px-8 uppercase py-2 transition-all duration-200 hover:bg-white hover:ring-2 hover:ring-primary-red hover:text-primary-red">Login</button>
      </div>
    </div>
  )
}

export default Navbar