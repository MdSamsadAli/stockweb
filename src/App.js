import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./common/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./common/Footer";
import TopHeader from "./common/TopHeader";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <>
      <Router>
        <TopHeader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
