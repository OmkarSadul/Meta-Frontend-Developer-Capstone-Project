import React from "react";
import "./Header.css";
import {
  NavLink as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import * as Scroll from "react-scroll";

const Header = () => {
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
        <>
          <img src="./Asset16.png" alt="logo" width={170} />
        </>

        <div className="flexCenter h-menu">
          {location !== "menu" ? (
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
                <RouterLink to="/menu">Menu</RouterLink>
              </li>
              <li>
                <RouterLink to="/reservation">Reservation</RouterLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <button onClick={() => goToPageAndScroll("home")}>Home</button>
              </li>
              <li>
                <button onClick={() => goToPageAndScroll("about")}>
                  About
                </button>
              </li>
              <li>
                <button onClick={() => goToPageAndScroll("testimonials")}>
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => goToPageAndScroll("contact")}>
                  Contact
                </button>
              </li>
              <li>
                <RouterLink to="/test">Menu</RouterLink>
              </li>
              <li>
                <RouterLink to="/reservation">Reservation</RouterLink>
              </li>
            </>
          )}
          <button className="button">
            <a href="">Order Online</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
