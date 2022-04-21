import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: "#FFFFFF",
        position: "absolute",
        top: "0px",
        left: "80px",
        width: "1840px",
        height: "79px",
      }}
    >
      <ul
        className="navbar-nav me-auto mb-2 mb-lg-0"
        style={{ marginLeft: "24px" }}
      >
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pending
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Completed
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Recurring
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Transactions
          </a>
        </li>
      </ul>
      <div
        className="d-flex align-items-center"
        style={{ paddingRight: "42px" }}
      >
        <a className="nav-link" href="#">
          <img src=".\assets\images\Form.png" alt="Form" />
        </a>
        <a className="nav-link" href="#">
          <img src=".\assets\images\Patients.png" alt="Patients" />
        </a>
        <a className="nav-link" href="#">
          <img src=".\assets\images\Note.png" alt="Note" />
        </a>
        <a className="profile-icon" href="#">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              background: "rgba(152, 215, 222, 0.5)",
              height: "43px",
              width: "43px",
              borderRadius: "50%",
              color: "#04899D",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "22px",
              letterSpacing: "0em",
            }}
          >
            PB
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
