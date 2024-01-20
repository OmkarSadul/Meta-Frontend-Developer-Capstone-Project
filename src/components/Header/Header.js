import React from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { Link as Link2 } from "react-router-dom";

const Header = () => {
  return (
    <section className="flexCenter paddings h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-62}
          duration={300}
          className="inside-img"
        >
          <img src="./Asset16.png" alt="logo" width={170} />
        </Link>
        <div className="flexCenter h-menu">
          <Link2 to="/">Home</Link2>
          {/* <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-59}
            duration={300}
            className="inside-menu"
          >
          </Link> */}
          <Link2 to='/about'>About</Link2>
          <Link2 to="/menu" className="inside-menu">
            Menu
          </Link2>
          <Link2 to="/reservation" className="inside-menu">
            Reservation
          </Link2>
          <Link
            activeClass="active"
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-59}
            duration={300}
            className="inside-menu"
          >
            Testimonials
          </Link>
          <Link2 to="/home/contact">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-59}
              duration={300}
              className="inside-menu"
            >
              Contact
            </Link>
          </Link2>
          <button className="button">
            <a href="">Order Online</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
