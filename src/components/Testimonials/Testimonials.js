import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { TestimonialsData } from "../../utils/testimonials";

const Testimonials = () => {
  return (
    <div id="testimonials" className="  testimonials">
      <div className="paddings innerWidth wrapper">
        <div className="flexColStart container">
          <span className="primaryText">TOP RATED</span>
          <span className="secondaryText">
            Lorem, ipsum dolor sit amet consectetur <br />
            adipisicing elit. Inventore aliquid nihil numquam.
          </span>
        </div>

        <div className="flexColCenter container">
          <span className="orangeText">50k</span>
          <span className="orangeText">Happy Customers with us</span>
        </div>
      </div>

      <div className="flexCenter reviews">Reviews</div>

      <div className="paddings innerWidth carousel">
        <Swiper
          cssMode={true}
          navigation={true}
          modules={[Navigation]}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={20}
          className="tCarousel"
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide>
              <div className="flexColCenter c-container">
                <img src={testimonial.image} alt="" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
