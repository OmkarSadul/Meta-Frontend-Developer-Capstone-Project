import React, { useState } from "react";
import "./Menu.css";
import { MenuData } from "../../utils/menu";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [MenuDatas, setMenuDatas] = useState(MenuData);

  const filter = (type)=>{
    setMenuDatas(MenuData.filter((product)=>product.type===type))
  }

  return (
    <div id="menu" className="flexColCenter paddings innerWidth menu-container">
      <h1>Our Menu</h1>

      <div className="menus">
        <ul className="menu">
          <li onClick={()=>setMenuDatas(MenuData)}>All</li>
          <li onClick={()=>filter("snack")}>Snacks</li>
          <li onClick={()=>filter("curry")}>Curry</li>
          <li onClick={()=>filter("rice")}>Rice</li>
          <li onClick={()=>filter("sweet")}>Dessert</li>
        </ul>

        <div className="menu-list">
          {MenuDatas.map((product, i) => (
            <div className="menu-product">
              <div className="flexCol menu-box">
                <div className="name">
                  <span className="menu-name">{product.name}</span><br />
                  <span className="menu-detail">{product.details}</span>
                </div>
                <div className="menu-price">
                  <span>₹{product.price}</span>
                  {/* <div>Order Now</div> */}
                </div>
              </div>

              <img src={product.img} alt="" className="img-menu" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
