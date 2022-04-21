import React, { useEffect } from "react";
import Styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={Styles.sidebar}>
      <ul className={Styles[`sidebar-list`]}>
        <li className={Styles[`list-item`]}>
          <a href="#">
            <img src=".\assets\images\logo.png" alt="Logo" />
          </a>
        </li>
        <li className={Styles[`list-item`]}>
          <a href="#">
            <img src=".\assets\images\Analytics.png" alt="Analytics" />
          </a>
        </li>
        <li className={Styles[`list-item`]}>
          <a href="/">
            <img src=".\assets\images\Collections.png" alt="Collections" />
          </a>
        </li>
        <li className={Styles[`list-item`]}>
          <a href="/">
            <img src=".\assets\images\Eligibility.png" alt="Eligibility" />
          </a>
        </li>
        <li className={Styles[`list-item`]}>
          <a href="/">
            <img src=".\assets\images\User.png" alt="Users" />
          </a>
        </li>
        <li className={Styles[`list-item`]}>
          <a href="/">
            <img src=".\assets\images\Messaging.png" alt="Messaging" />
          </a>
        </li>
        <li className={`${Styles["list-item"]} ${Styles.active}`}>
          <a href="/">
            <img src=".\assets\images\Details.png" alt="Details" />
          </a>
        </li>
        <li className={Styles[`list-item`]}>
          <a href="/">
            <img src=".\assets\images\Star.png" alt="Star" />
          </a>
        </li>
        <li className={Styles[`list-item`]}>
          <a href="/">
            <img src=".\assets\images\Calender.png" alt="Calender" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
