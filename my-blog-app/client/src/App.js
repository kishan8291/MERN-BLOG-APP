import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import NewBlogPage from "./pages/NewBlogPage";
import ShowBlogPage from "./pages/ShowBlogPage";
import EditBlogPage from "./pages/EditBlogPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="new"
          element={<NewBlogPage />}
        />
        <Route
          path="blogs/:id"
          element={<ShowBlogPage />}
        />
        <Route
          path="blogs/edit/:id"
          element={<EditBlogPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
