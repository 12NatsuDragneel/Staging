import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setShowMenu(false);  // Reset menu state when popup is toggled
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <nav className="navbar mt-4">
      <div className="navbar-container">
        <Link to='/'>
          <h1 className="navbar-logo text-5xl font-semibold">Staging <i className='font-bold'>.</i></h1>
        </Link>
        <ul className={`nav-menu ${showMenu ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Projects" className={`nav-link ${location.pathname === '/Projects' ? 'active' : ''}`}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className={`nav-link ${location.pathname === '/About' ? 'active' : ''}`}>
              About
            </Link>
          </li>
          <li className="nav-item nav-pages">
            <Link to="#" className={`nav-link ${location.pathname === '/Pages' ? 'active' : ''}`}>
              Pages
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Blog" className={`nav-link ${location.pathname === '/Blog' ? 'active' : ''}`}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className={`nav-link ${location.pathname === '/Contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </li>
          <div className="nav-pages1">
            <li className="nav-item1">
              <Link to="/ProjectDetail" className={`nav-link ${location.pathname === '/ProjectDetail' ? 'active' : ''}`}>
                Project Details
              </Link>
            </li>
            <li className="nav-item1">
              <Link to="/About" className={`nav-link ${location.pathname === '/About' ? 'active' : ''}`}>
                About
              </Link>
            </li>
            <li className="nav-item1">
              <Link to="/Services" className={`nav-link ${location.pathname === '/Services' ? 'active' : ''}`}>
                Services
              </Link>
            </li>
            <li className="nav-item1">
              <Link to="/Blog" className={`nav-link ${location.pathname === '/Blog' ? 'active' : ''}`}>
                Blog Details
              </Link>
            </li>
          </div>
        </ul>

        <div className="Nav1">
          <p className='text-gray-400'>Call us for any questions</p>
          <p className='text-orange-300 text-xl'>+01 123 456 789</p>
        </div>

        {/* Button for max-width: 500px */}
        <div className="popup-button" onClick={togglePopup}>
          <FontAwesomeIcon icon={showPopup ? faTimes : faBars} />
        </div>
      </div>

      {/* Popup from the right */}
      {showPopup && (
        <div className="popup-menu">
          <button className="close-popup-button" onClick={closePopup}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <button className="menu-button" onClick={toggleMenu}>
            Menu
          </button>
        

          {showMenu && (
            <ul className="popup-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Projects">Projects</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Blog">Blog</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
          )}
            <div className="Nav1012">
          <p className='text-gray-400'>Call us for any questions</p>
          <p className='text-orange-300 text-xl'>+01 123 456 789</p>
        </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
