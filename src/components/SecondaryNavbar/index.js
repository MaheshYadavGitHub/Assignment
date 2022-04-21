import React from "react";

const SecondaryNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: "rgba(243, 244, 246, 0.5)",
        backdropFilter: "blur(65px)",
        position: "absolute",
        top: "79px",
        left: "80px",
        width: "1840px",
        height: "80px",
      }}
    >
      <ul
        className="navbar-nav me-auto mb-2 mb-lg-0"
        style={{ marginLeft: "48px" }}
      >
        <form className="d-flex">
          <div className="search-box">
            <img className="fa-search" src=".\assets\images\Search.png" />
            <input
              className="search-input"
              type="search"
              placeholder="Search for a patient"
              aria-label="Search"
            />
          </div>
          <select id="practices" className="dropdown" name="practices">
            <option value="" defaultValue="selected">
              All Practices
            </option>
            <option value="S">Surgery</option>
            <option value="C">Cleaning</option>
          </select>
          <select id="monthYear" className="dropdown" name="month year">
            <option value="A22" defaultValue="selected">
              Apr, 2022
            </option>
            <option value="M22">May,2022</option>
            <option value="J22">June,2022</option>
          </select>
        </form>
      </ul>
      <div
        className="d-flex align-items-center"
        style={{ paddingRight: "42px" }}
      >
        <input type="button" value="Create Plan" className="create_plan_btn" />
        <button className="sec_nav_btn">
          <img src=".\assets\images\Stats.png" alt="Stats" />
        </button>
        <button className="sec_nav_btn">
          <img src=".\assets\images\Sort.png" alt="Sort" />
        </button>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
