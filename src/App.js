import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import CaseStudies from "./pages/CaseStudies";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>

      {/* Scroll to top on every route change */}
      <ScrollToTop />

      <div className="min-h-screen flex flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="flex-grow">

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/services"
              element={<Services />}
            />

            <Route
              path="/products"
              element={<Products />}
            />

            <Route
              path="/casestudies"
              element={<CaseStudies />}
            />

            <Route
              path="/contactus"
              element={<ContactUs />}
            />

          </Routes>

        </div>

        {/* Footer */}
        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;