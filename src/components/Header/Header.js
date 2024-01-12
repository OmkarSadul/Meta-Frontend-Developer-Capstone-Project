import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./Asset16.png" alt="logo" width={170} />
            <div className="flexCenter h-menu">
                <a className='inside-menu' href="">Home</a>
                <a className='inside-menu' href="">About</a>
                <a className='inside-menu' href="">Menu</a>
                <a className='inside-menu' href="">Reservation</a>
                <a className='inside-menu' href="">Login</a>
                <button className='button'>
                    <a href="">Order Online</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Header