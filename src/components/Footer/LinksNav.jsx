import React from 'react'
import { Link } from 'react-router-dom'

const LinksNav = () => {
  return (
    <div className='c-footer__section2'>   
    <ul className=''>
    <li>
      <Link to='#'>
        About Us
      </Link>
    </li>
    <li>
      <Link to='#'>
        Contact
      </Link>
    </li>
    <li>
      <Link to='#'>
        Blog
      </Link>
    </li>
    <li>
      <Link to='#'>
        Careers
      </Link>
    </li>
    <li>
      <Link to='#'>
        Support
      </Link>
    </li>
    <li>
      <Link to='#'>
        Privacy Policy
      </Link>
    </li>
  </ul></div>
  )
}

export default LinksNav