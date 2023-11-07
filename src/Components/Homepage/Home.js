
// import React, { useState } from 'react';
// import './Home.css';

// function Home() {
//   const [isLoading, setIsLoading] = useState(false);

//   const handleHomeClick = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//   };

//   return (
//     <div className="home">
//       <header>
//         <nav>
//           <div className="logo">
//             <a href="/" onClick={handleHomeClick}>Shopping Site</a>
//           </div>
//           <ul className="menu">
//             <li><a href="/">Home</a></li>
//             <li><a href="/products">Products</a></li>
//             <li><a href="/cart">Cart</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </nav>
//       </header>

//       <section className="hero">
//         <div className="hero-content">
//           <h2>Welcome to our Online Store</h2>
//           <p>Discover the best deals on a wide range of products.</p>
//           <a href="/products" className="btn">Shop Now</a>
//         </div>
//       </section>

//       <section className="products">
//         <h2>Featured Products</h2>
//       </section>

//       {isLoading && (
//         <div className="loader">
//           Loading...
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;



import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { Carousel, Navbar, Container } from 'react-bootstrap'; 
// import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

const Home = () => {
  return (
    <div>
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
    
<div className='carousel-div'>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&usqp=CAU"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&usqp=CAU"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&usqp=CAU"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      </div>      
</div>
      
      
  );
};

export default Home;


