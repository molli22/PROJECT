import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBArData } from "./SideBarData";

function SideBAr() {
  const [sidebar, setSidebar] = useState(false);

  const ShowSideBar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="sidebar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={ShowSideBar} />
        </Link>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}></nav>
      <ul className="nav-menu-items">
        <li className="navbar-toggle">
          <Link to="#" className="menu-bars">
            <AiIcons.AiOutlineClose />
          </Link>
        </li>
        {SideBArData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SideBAr;
