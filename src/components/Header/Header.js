import React, { useState } from "react";
import "./Header.css";
import {
  NavLink as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import * as Scroll from "react-scroll";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 300,
      smooth: true,
      offset: -60,
      spy: true,
    });
  };

  return (
    <section id="navigation" className="flexCenter paddings h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <div className="header-logo">
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
            duration={300}
          >
            <img src="./Asset16.png" alt="logo" width={170} />
          </ScrollLink>
        </div>

        <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
          {location !== ("reservation" || "orderOnline") ? (
            <>
              <li>
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={300}
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="menu"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={300}
                >
                  Menu
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={300}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={300}
                >
                  Testimonials
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={300}
                >
                  Contact
                </ScrollLink>
              </li>
              <li>
                <RouterLink to="/reservation">Reservation</RouterLink>
              </li>
              <li>
                <button className="button">
                  <RouterLink to="/orderOnline">Order Online</RouterLink>
                </button>
              </li>
            </>
          ) : (
            <>
              <li onClick={() => goToPageAndScroll("home")}>Home</li>
              <li onClick={() => goToPageAndScroll("menu")}>Menu</li>
              <li onClick={() => goToPageAndScroll("about")}>About</li>
              <li onClick={() => goToPageAndScroll("testimonials")}>
                Testimonials
              </li>
              <li onClick={() => goToPageAndScroll("contact")}>Contact</li>
              <li>
                <RouterLink to="/reservation">Reservation</RouterLink>
              </li>
              <li>
                <button className="button">
                  <RouterLink to="/orderOnline">Order Online</RouterLink>
                </button>
              </li>
            </>
          )}
          {/* <button className="button">
            <a href="orderOnline">Order Online</a>
          </button> */}
        </div>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <IoMenu size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
