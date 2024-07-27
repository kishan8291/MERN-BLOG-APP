import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  // <nav
  //   className="navbar navbar-expand-lg navbar-light bg-light"
  //   style={navbarStyle}
  // >
  //   <div className="container-fluid">
  //     <Link
  //       className="navbar-brand"
  //       to="/"
  //     >
  //       BlogApp
  //     </Link>
  //     <div
  //       className="collapse navbar-collapse"
  //       id="navbarNav"
  //     >
  //       <ul className="navbar-nav">
  //         <li className="nav-item">
  //           <Link
  //             className="nav-link"
  //             to="/"
  //           >
  //             Home
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link
  //             className="nav-link"
  //             to="/new"
  //           >
  //             New Blog
  //           </Link>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>

  <nav
    className="navbar navbar-expand-lg navbar-dark fixed-top"
    style={{
      background:
        "linear-gradient(to right, rgba(196, 113, 245, 1), rgba(250, 113, 205, 1))",
    }}
  >
    <div className="container-fluid">
      <NavLink
        className="navbar-brand"
        to="/"
        onClick={handleClick}
      >
        <img
          src="https://thumbs.dreamstime.com/b/initial-kv-letter-logo-design-vector-illustration-abstract-173828466.jpg"
          className="img-fluid rounded-top"
          alt=""
          style={{ height: 40, width: 40, maxHeight: 100 }}
        />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-light"></i>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
          <li className="nav-item text-center mx-2 mx-lg-1">
            <NavLink
              className="nav-link btn"
              to="/new"
            >
              <div>
                <i className="fas fa-edit fa-lg mb-1"></i>
              </div>
              New Blog
            </NavLink>
          </li>
          {/* <li className="nav-item text-center mx-2 mx-lg-1">
            <NavLink
              className="nav-link btn"
              to="/edit-blog"
            >
              <div>
                <i className="fas fa-edit fa-lg mb-1"></i>
              </div>
              Edit Blog
            </NavLink>
          </li> */}
        </ul>
        <form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
          <NavLink
            className="btn btn-outline-white"
            type="button"
            to="/"
            style={{ padding: ".45rem 1.5rem .35rem" }}
          >
            <i className="fas fa-home fa-lg"></i>
            Home
          </NavLink>
          <input
            type="search"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-white"
            type="button"
            data-mdb-ripple-color="dark"
            style={{ padding: ".45rem 1.5rem .35rem" }}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
);

// const navbarStyle = {
//   position: "fixed",
//   top: 0,
//   width: "100%",
//   backgroundColor: "#333",
//   color: "white",
//   padding: "10px",
//   zIndex: 1000,
// };

const handleClick = (e) => {
  e.preventDefault();
  const contactMethod = window.prompt(
    'Contact me on WhatsApp or Instagram. Type "WhatsApp" or "Instagram":'
  );

  if (contactMethod && contactMethod.toLowerCase() === "whatsapp") {
    window.location.href = "https://wa.me/8291740575";
  } else if (contactMethod && contactMethod.toLowerCase() === "instagram") {
    window.location.href = "https://www.instagram.com/kv_maybe_";
  } else {
    alert('Invalid input. Please type "WhatsApp" or "Instagram".');
  }
};

export default Navbar;
