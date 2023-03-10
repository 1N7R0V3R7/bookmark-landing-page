import React from 'react'
import Logo from './Logo'
import hamburgerIcon from '../assets/images/icon-hamburger.svg'

const Navbar = ({toggleMenu, isMenuActive}) => {
  return (
    <div className={`flex justify-between items-center w-[85%] mx-auto mt-8 mb-24 ${isMenuActive && 'invisible'}`}>
      <Logo circle='#5267DF' text='#242A45' bookmark='#fff' />
      <img src={hamburgerIcon} alt="Hamburger Menu Icon" className="h-5" onClick={() => toggleMenu()} />
    </div>
  )
}

export default Navbar