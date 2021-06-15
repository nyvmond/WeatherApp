import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';
import About from './About';


function Nav({onSearch}) {
  return (
    <div>
    <nav className=" nav">
      <Link to='/'>
        <span className="span">
          {/* <img id="logoHenry" src={Logo} width="30" height="30" alt="" /> */}
           Weather App
        </span>
      </Link>
      
        <Link to='/about'>
        <span className="span">About</span>
      </Link>
    </nav>
    <nav>  <SearchBar
    onSearch={onSearch}
  /></nav>
  </div>


  );
};

export default Nav;
