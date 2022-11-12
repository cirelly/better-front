import React from 'react'
import LinksNav from './LinksNav'
import Logo from '../Logo/Logo'

const Footer = () => {
  return (
    <footer className='c-footer'>
       <div className='c-footer__container'>
        <Logo />
       <LinksNav />
       </div>
    </footer>
  )
}

export default Footer;