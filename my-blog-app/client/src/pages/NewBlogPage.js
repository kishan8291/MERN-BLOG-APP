import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewBlogPage = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/blogs", { title, imageUrl, content });
    navigate("/");
  };

  const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "0 auto",
    marginTop: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
  };

  const labelStyle = {
    fontWeight: "bold",
    color: "#555",
  };

  const inputStyle = {
    marginBottom: "15px",
  };

  const buttonStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>New Blog</h1>
      <form onSubmit={handleSubmit}>
        <div
          className="mb-3"
          style={inputStyle}
        >
          <label
            className="form-label"
            style={labelStyle}
          >
            Title
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div
          className="mb-3"
          style={inputStyle}
        >
          <label
            className="form-label"
            style={labelStyle}
          >
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div
          className="mb-3"
          style={inputStyle}
        >
          <label
            className="form-label"
            style={labelStyle}
          >
            Content
          </label>
          <textarea
            className="form-control"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={buttonStyle}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewBlogPage;
