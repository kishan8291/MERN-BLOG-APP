import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const ShowBlogPage = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await axios.get(`/api/blogs/${id}`);
      setBlog(res.data);
    };
    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`/api/blogs/${id}`);
    navigate("/");
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          fontFamily: "Arial, sans-serif", // Example of professional font
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "2.5rem", // Adjust font size as needed
            marginBottom: "20px",
          }}
        >
          {blog.title}
        </h1>
        {blog.imageUrl && (
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="img-fluid"
            style={{
              border: "3px solid black",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              marginBottom: "20px",
              width: "100%", // Makes the image fill the width of its container
              height: "auto", // Maintains aspect ratio
              objectFit: "cover", // Ensures the image covers the container without stretching
            }}
          />
        )}
        <p style={{ fontWeight: "bold" }}>{blog.content}</p>
        <div className="d-flex justify-content-between mt-3">
          <Link
            to={`/blogs/edit/${id}`}
            className="btn btn-primary"
            style={{
              backgroundColor: "#007bff", // Bootstrap primary color
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "1rem",
              fontWeight: "bold",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="btn btn-danger"
            style={{
              backgroundColor: "#dc3545", // Bootstrap danger color
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "1rem",
              fontWeight: "bold",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowBlogPage;
