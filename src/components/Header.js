import React from "react";
import logo from "./logo.png";
import { useNavigate, Link } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            onClick={() => navigate("/Header")}
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="Bootstrap" width="70" height="50" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => navigate("/Header")}
                  style={{ cursor: "pointer" }}
                >
                  <h4>Contact List</h4>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h3 className="text-center mt-5 ">
        <hr />
        <Link className="add" to="/AddContact">
          Click here to add contacts
        </Link>
        <hr />
      </h3>
      <h3 className="text-center">
        <Link className="card" to="/ContactCard">
          View added Contacts
        </Link>
      </h3>
    </>
  );
}
