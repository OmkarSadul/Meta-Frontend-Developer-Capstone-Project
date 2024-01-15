import React from "react";
import "./Footer.css";
import Logo from "../../assets/Asset20.png";
import { FaSquareXTwitter, FaLocationDot, FaMobileRetro, FaLink } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaFacebookSquare, FaEnvelope, FaInstagram, FaYoutube } from "react-icons/fa";

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
              <span>Home</span>
            </span>
            <span className="pngLine">
              <span>About</span>
            </span>
            <span className="pngLine">
              <span>Menu</span>
            </span>
            <span className="pngLine">
              <span>Reservation</span>
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
              <span>Facebook</span>
            </span>
            <span className="pngLine">
              <FaInstagram className="instagram pngIcon"/>
              <span>Instagram</span>
            </span>
            <span className="pngLine">
              <FaSquareXTwitter className="twitter pngIcon"/>
              <span>Twitter</span>
            </span>
            <span className="pngLine">
              <FaYoutube className="youtube pngIcon"/>
              <span>YouTube</span>
            </span>
          </div>
        </div>

        <div className="footerBlock">
          <div className="detail">
            <span>Resource</span>
            <span className="pngLine">
              <FaLink className="pngIcon"/>
              <span>Safety Privacy & Terms</span>
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
