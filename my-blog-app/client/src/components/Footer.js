import React from "react";

const Footer = () => (
  <footer
    className="footer mt-auto py-3 bg-light"
    style={footerStyle}
  >
    <div className="container">
      <span className="text-muted">
        &copy; 2024 BlogApp. All rights reserved.
      </span>
    </div>
  </footer>
);

const footerStyle = {
  position: "fixed",
  bottom: 0,
  width: "100%",
  backgroundColor: "#333",
  color: "white",
  textAlign: "center",
  padding: "10px",
  zIndex: 1000,
};

export default Footer;
