import React from 'react'
import logoBookmark from '../assets/images/logo-bookmark.svg'
import hamburgerIcon from '../assets/images/icon-hamburger.svg'

const Navbar = ({toggleMenu, isMenuActive}) => {
  return (
    <div className={`flex justify-between items-center w-[85%] mx-auto mt-8 mb-24 ${isMenuActive && 'invisible'}`}>
      <img src={logoBookmark} alt="Bookmark Logo" className="h-8" />
      <img src={hamburgerIcon} alt="Hamburger Menu Icon" className="h-5" onClick={() => toggleMenu()} />
    </div>
  )
}

export default Navbar