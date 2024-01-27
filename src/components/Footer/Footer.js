import React from "react";
import "./Footer.css";
import Logo from "../../assets/Asset20.png";
import { FaSquareXTwitter, FaLocationDot, FaMobileRetro, FaGithub } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaFacebookSquare, FaEnvelope, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { NavLink as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="FooterWrapper">
      <div className="paddings innerWidth cFooter">
        <div className="Logo">
          <img src={Logo} alt="" />
        </div>

        <div className="footerBlock">
          <div className="detail">
            <span>Contact Us</span>
            <span className="pngLine">
              <FaLocationDot className="pngIcon"/>
              <span>101 North avenue Kothrud,Pune 411111</span>
            </span>
            <span className="pngLine">
              <IoCall className="pngIcon"/>
              <a href="tel:020-12341234">020 12341234</a>
            </span>
            <span className="pngLine">
              <FaMobileRetro className="pngIcon"/>
              <a href="tel:+91-9XXXXXXXXX">+91 9XXXXXXXXX</a>
            </span>
            <span className="pngLine">
              <FaEnvelope className="pngIcon"/>
              <a href="mailto:support@littlelemon.com">
                support@littlelemon.in
              </a>
            </span>
          </div>
        </div>

        <div className="footerBlock">
          <div className="detail">
            <span>Quick Link</span>
            <span className="pngLine">
              <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={300}
                >Home</ScrollLink>
            </span>
            <span className="pngLine">
              <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={300}>About</ScrollLink>
            </span>
            <span className="pngLine">
              <ScrollLink
                  to="menu"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={300}>Menu</ScrollLink>
            </span>
            <span className="pngLine">
              <RouterLink to="/reservation">Reservation</RouterLink>
            </span>
            <span className="pngLine">
              <span>Order Online</span>
            </span>
          </div>
        </div>

        <div className="footerBlock">
          <div className="detail">
            <span>Follow us</span>
            <span className="pngLine">
              <FaFacebookSquare className="facebook pngIcon" />
              <a href="https://www.facebook.com/" target="blank">Facebook</a>
            </span>
            <span className="pngLine">
              <FaInstagram className="instagram pngIcon"/>
              <a href="https://www.instagram.com/" target="blank">Instagram</a>
            </span>
            <span className="pngLine">
              <FaSquareXTwitter className="twitter pngIcon"/>
              <a href="https://twitter.com/?lang=en" target="blank">Twitter</a>
            </span>
            <span className="pngLine">
              <FaYoutube className="youtube pngIcon"/>
              <a href="https://www.youtube.com/" target="blank">YouTube</a>
            </span>
          </div>
        </div>

        <div className="footerBlock">
          <div className="detail">
            <span>Resource</span>
            <span className="pngLine">
              <FaGithub className="pngIcon"/>
              <a href="https://github.com/OmkarSadul/Meta-Frontend-Developer-Capstone-Project" target="blank">Git Hub</a>
            </span>
          </div>
        </div>
      </div>
      <div className=" flexColCenter innerWidth copyright">
            <hr />
          <span>Copyright © 2024 by Little Lemon Pvt.Ltd.</span>
          <span>All rights reserved.</span>
        </div>
    </div>
  );
};

export default Footer;
