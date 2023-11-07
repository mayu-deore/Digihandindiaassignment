import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="menu">
        <ul>
          <li><Link to="/">Categories</Link></li>
          <li><Link to="/products">LUXE</Link></li>
          <li><Link to="/cart">CarBARGAINS</Link></li>
        </ul>
      </div>

      <div className="center-content">
        <span className="shoppers-spot">Shoppers Spot</span>
        <input type="text" className="search-bar" placeholder="Search" />
        <span className="search-symbol"><FaSearch /></span>
        <span className="like-symbol"><FaRegHeart /></span>
        <span className="cart-symbol"><FaShoppingCart /></span>
        <span className="contact-symbol"><FaPhone /></span>
      </div>
    </div>
  );
}

export default Navbar;
