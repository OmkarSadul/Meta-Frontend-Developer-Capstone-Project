import React, { useState } from "react";
import "./Reservation.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  function onSubmit() {
    alert(
      "Dear " +
        name +
        ", We are pleased to inform you that your booking is confirmed"
    );
  }
  return (
    <section id="reservation" className="reservation-wrapper">
      <div className="paddings innerWidth flexCenter reservation-container">
        {/* left side */}
        <div className="reservation-left">
          <div className="image-container">
            <img src="./restaurant.jpg" alt="" />
          </div>
        </div>

        {/* right side */}
        <div>
          <span className="primaryText">BOOK A TABLE</span>
          <div className="paddings r-form">
            <form form="r-form" className="flexColStart">
              <label className="r-label" htmlFor="name">
                Name:
              </label>
              <label className="r-label" htmlFor="email">
                Email:
              </label>
              <label className="r-label" htmlFor="mobile">
                Mobile No.:
              </label>
              <label className="r-label" htmlFor="date">
                Date:
              </label>
              <label className="r-label" htmlFor="time">
                Time:
              </label>
              <label className="r-label" htmlFor="guest">
                Number of Guest:
              </label>
              <label className="r-label" htmlFor="time">
                Occasion:
              </label>
            </form>
            <form
              onSubmit={onSubmit}
              id="r-form"
              className="flexColStart"
              action={onSubmit}
            >
              <input
                className="input-box"
                type="text"
                minLength={6}
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="input-box"
                type="email"
                placeholder="email@abc.com"
                required
              />
              <input
                className="input-box"
                type="tel"
                minLength={10}
                placeholder="9XXXX XXXXX"
                required
              />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/YYYY"
                minDate={new Date()}
                maxDate={new Date().setHours(144)}
                className="input-box"
                placeholder="Select Date"
              />
              <select
                name="time"
                id="time"
                className="input-box input-box2"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="" disabled selected>
                  Select Time
                </option>
                <option value="11:00">11:00</option>
                <option value="11:30">11:30</option>
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
                <option value="13:00">13:00</option>
                <option value="13:30">13:30</option>
                <option value="14:00">14:00</option>
                <option value="14:30">14:30</option>
                <option value="15:00">15:00</option>
                <option value="15:30">15:30</option>
                <option value="16:00">16:00</option>
                <option value="16:30">16:30</option>
                <option value="17:00">17:00</option>
                <option value="17:30">17:30</option>
                <option value="18:00">18:00</option>
                <option value="18:30">18:30</option>
                <option value="19:00">19:00</option>
                <option value="19:30">19:30</option>
                <option value="20:00">20:00</option>
                <option value="20:30">20:30</option>
                <option value="21:00">21:00</option>
                <option value="21:30">21:30</option>
                <option value="22:00">22:00</option>
              </select>
              <select
                name="Guest"
                id="guest"
                className="input-box input-box2"
                required
              >
                <option value="" selected disabled>
                  Select
                </option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
              </select>
              <select name="" id="" className="input-box input-box2" required>
                <option value="" selected disabled>
                  Select Occasion
                </option>
                <option value="">Birthday</option>
                <option value="">Anniversary</option>
                <option value="">Other</option>
              </select>
              {/* <input className="button r-button" type="submit" value="Submit" /> */}
            </form>
            <input
              form="r-form"
              className="button r-button"
              type="submit"
              value="CONFIRM MY RESERVATION"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
