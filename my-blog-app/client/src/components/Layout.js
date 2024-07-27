import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div style={layoutStyle}>
    <Navbar />
    <div
      className="container mt-4"
      style={contentStyle}
    >
      <Outlet />
    </div>
    <Footer />
  </div>
);
const contentStyle = {
  paddingTop: "60px", // Adjust according to the height of your navbar
  paddingBottom: "60px", // Adjust according to the height of your footer
  // color: "black",
};

const layoutStyle = {
  backgroundImage:
    "url(https://64.media.tumblr.com/tumblr_llnn6jucE61qim7jao1_500.gifv)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed", // Ensure background image remains fixed while scrolling
  minHeight: "100vh", // Ensure the background covers the entire viewport height
  // padding: "20px",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "space-between",
};

export default Layout;
