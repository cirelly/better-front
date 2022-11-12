import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Button from '../Button/Button';
import Logo from '../Logo/Logo';


const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);
  const navigate = useNavigate();
  const handleNavExpandedMenu = ( )=>{
    setIsNavExpanded(prev=>!prev);
  }
  return (
    <nav className='c-navHeader'>
        <div className='c-navHeader c-navHeader__container'>
          <Link to='/' style={{height: '55px',maxWidth: '141px'}} >
            <Logo />
          </Link>

          <ul className={isNavExpanded ? 'c-navHeader__expanded' : 'c-navHeader__list'}>
            <li>
              <Link className='active-nav' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='#'>
                About
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
          </ul>
          <Button id="request-button" onClick={() => navigate('/add-post')}>ADD POST</Button>
          <button onClick={handleNavExpandedMenu} className="c-navHeader__hamburger">

            {
              isNavExpanded ? 
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg></>
              :
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="white"
                  >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
            }
      </button>
        </div>

    </nav>
  )
}

export default NavBar