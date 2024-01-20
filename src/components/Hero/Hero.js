import React from "react";
import "./Hero.css";
import { StarIcon } from "@heroicons/react/24/solid";
import CountUp from "react-countup";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="home" className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left section */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            {/* <div className="yellow-circle"/> */}
            <h1>LITTLE LEMON</h1>
            <h3>Kothrud, Pune</h3>
          </div>

          <div className="flexColStart hero-dec">
            <span className="secondaryText2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <span className="secondaryText2">
              Dicta dolores voluptates excepturi cupiditate repellendus
              dignissimos.
            </span>
          </div>

          <div className="flexStart search-bar">
            {/* <MapPinIcon color="var(--blue)" height={30} width={30} /> */}
            {/* <input type="text" /> */}
            <Link
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={-62}
              duration={300}
              className="h-link"
            >
              <button className="button">Book a Table</button>
            </Link>
            <Link
              activeClass="active"
              to="todaySpecial"
              spy={true}
              smooth={true}
              offset={-62}
              duration={300}
              className="h-link"
            >
              <button className="button h-button">Today's Special</button>
            </Link>
            <Link
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={-62}
              duration={300}
              className="h-link"
            >
              <button className="button h-button">Get Direction</button>
            </Link>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={4985} end={5000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText2">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={27} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText2">Award Winning</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                {/* <span>4</span> */}
                <CountUp end={4} duration={4} />
                <span>.</span>
                <CountUp end={6} duration={4} />
                <span>
                  <StarIcon height={23} width={23} />
                </span>
              </span>
              <span className="secondaryText2">Our Rating</span>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="hero-right">
          <div className="image-container">
            <img src="hero-image.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
