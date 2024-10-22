import React, { useState } from 'react';
import './Header.css';
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faTabletScreenButton, faMobileScreenButton, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';

// Add the icons to the library
library.add(faDesktop, faTabletScreenButton, faMobileScreenButton, faCartShopping, faXmark);

function Header() {
  const [mode, setMode] = useState('pc');

  const handleTabletMode = () => setMode('tablet');
  const handlePCMode = () => setMode('pc');
  const handleMobileMode = () => setMode('mobile');

  return (
    <div className={`app1 ${mode}`}>
      <div className="Header1 bg-zinc-800">
        <a href="#">colorlib<i className="font-bold">.</i></a>
        <button className="staging-button bg-zinc-900 text-zinc-400 h-16 w-36 p-0 m-0">+ STAGING</button>
        <ul className="icon-list">
          <li>
            <button className="Header-Button1 p-3 border-l-[1px] border-zinc-500" onClick={handlePCMode}>
              <FontAwesomeIcon icon="desktop" style={{ color: 'gray' }} />
            </button>
          </li>
          <li>
            <button className="Header-Button1 p-3 border-l-[1px] border-zinc-500 text-zinc-500" onClick={handleTabletMode}>
              <FontAwesomeIcon icon="tablet-screen-button" />
            </button>
          </li>
          <li>
            <button className="Header-Button1 p-3 border-l-[1px] border-zinc-500 text-zinc-500" onClick={handleMobileMode}>
              <FontAwesomeIcon icon="mobile-screen-button" />
            </button>
          </li>
          <li>
            <button className="Header-Button1 Header-Button2 p-3 border-l-[1px] border-zinc-500 text-zinc-100 bg-">
              <FontAwesomeIcon icon="cart-shopping" />
            </button>
          </li>
          <li>
            <button className="Header-Button1 p-3 border-l-[1px] border-zinc-500">
              <FontAwesomeIcon icon="xmark" className="text-4xl text-zinc-500" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
