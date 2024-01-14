import React from "react";
import "./TodaySpecials.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const TodaySpecials = () => {
  return (
    <section className="todaySpecial-wrapper">
      <div className="paddings innerWidth todaySpecial-container">
        <div className="todaySpecial-head flexColStart">
          <span className="primaryText">TODAY'S SPECIALS!</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButton/>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart todaySpecial-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText todaySpecial-price">
                  <span style={{color:"orange"}}>₹</span>
                  <span>{card.price}</span>
                </span>
                <span className="orangeText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TodaySpecials;

const SliderButton =()=>{
  const swiper = useSwiper();
  return(
    <div className="flexCenter todaySpecial-buttons">
      <button onClick={()=> swiper.slidePrev()}>&lt;</button>
      <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  )
}