import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/homee/Home";
import AboutMe from "./components/about/Aboutme";
import ContactMe from "./components/contact/Contactme";
import Projects from "./components/projects/Projects";
import ProjectDetails from "./components/projects/Projectdet";
import Blogs from "./components/blog/Blogs";
import BlogDetails from "./components/blog/Blogsdet";
import Footer from "./components/footer/Footer";
import Header from "./Header";

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
