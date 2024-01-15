import React from "react";
import "./Contact.css";
import { IoCall } from "react-icons/io5";
import { IoMdChatbubbles } from "react-icons/io";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter contact-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="primaryText">CONTACT US</span>
          <span className="secondaryText">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Ullam ducimus possimus sapiente quas sunt, earum omnis corporis
            minus.
          </span>

          <div className="paddings flexCenter contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <IoCall size={23} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">020 12341234</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <IoMdChatbubbles size={23} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">+91 9XXXXXXXXX</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>

            {/* seconds row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaEnvelope size={23} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email Us</span>
                    <span className="secondaryText">support@littlelemon.in</span>
                  </div>
                </div>
                <div className="flexCenter button">Email Now</div>
              </div>

              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaMapMarkerAlt size={23} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Address</span>
                    <span className="secondaryText">Little Lemon, Pune</span>
                  </div>
                </div>
                <div className="flexCenter button">Direction</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter c-right">
          <div className="image-container">
            <img src="./MarioA.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
