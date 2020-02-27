import React from 'react'
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
        <Link to={{
          pathname: `/`,
          state: null
        }} className="navbar-brand mt-n1">
          Home
          </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-nav mr-auto">
              <form className="d-flex" onSubmit={props.onSubmit}>
                <input
                  className="form-control"
                  type="text"
                  onChange={props.handleChange}
                  placeholder="Search..."
                />
                <button type="submit" className="btn btn-outline-primary">
                  Go!
                  </button>
              </form>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <Link
                to={{
                  pathname: `/`,
                  state: { type: "login" }
                }}
                className="nav-link"
              >
                Login
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
