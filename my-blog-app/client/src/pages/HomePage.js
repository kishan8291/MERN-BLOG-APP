import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("/api/blogs");
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  const handleCardMouseOver = (event) => {
    event.target.style.transform = "scale(1.05)";
    event.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
  };

  const handleCardMouseOut = (event) => {
    event.target.style.transform = "scale(1)";
    event.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Home Page</h1>
      <div className="row">
        {blogs.map((blog) => (
          <div
            className="col-md-4"
            key={blog._id}
          >
            <div
              className="card mb-4"
              style={{
                border: "2px solid #FF0000", // Metallic red color for the border
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
              }}
              onMouseOver={handleCardMouseOver}
              onMouseOut={handleCardMouseOut}
            >
              <div
                className="card-img-container"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "2px",
                  backgroundColor: "#2C2C2C", // Metallic black color for the image container
                }}
              >
                <img
                  src={blog.imageUrl}
                  className="card-img-top"
                  alt={blog.title}
                  style={{
                    width: "396px",
                    height: "396px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                className="card-body"
                style={{
                  backgroundColor: "#2C2C2C", // Metallic black color
                  color: "white",
                }}
              >
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content.substring(0, 100)}...</p>
                <Link
                  to={`/blogs/${blog._id}`}
                  className="btn btn-primary btn-sm"
                  style={{
                    backgroundColor: "#FF6347", // Tomato red color
                    border: "none",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    transition: "all 0.3s ease",
                  }}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const pageStyle = {
  // backgroundImage:
  //   "url(https://64.media.tumblr.com/tumblr_llnn6jucE61qim7jao1_500.gifv)", // Replace with the path to your background image
  // backgroundSize: "cover",
  // backgroundPosition: "center",
  // backgroundAttachment: "fixed", // Ensure background image remains fixed while scrolling
  // minHeight: "100vh", // Ensure the background covers the entire viewport height
  // padding: "20px",
};

const titleStyle = {
  textAlign: "center",
  color: "white",
  padding: "20px 0",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for the title
  transition: "all 0.5s ease-in-out",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  borderRadius: "10px",
  cursor: "pointer",
  transform: "scale(1)",
  animation: "fadeIn 2s",
};

export default HomePage;
