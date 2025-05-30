import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import brgyLogo from "../assets/images/brgy-logo.jpg";

function Homepage() {
  const navigate = useNavigate();

  // Smooth scroll + auto-close navbar
  const handleScroll = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });

    const toggler = document.querySelector(".navbar-toggler");
    if (toggler && window.getComputedStyle(toggler).display !== "none") {
      toggler.click();
    }
  };

  // Redirect to clearance page
  const goToClearance = () => {
    navigate("/clearance");
  };
  useEffect(() => {
    // In case links are clicked by other means, ensure collapse toggles
    const navLinks = document.querySelectorAll(".navbar-collapse .nav-link");
    const toggler = document.querySelector(".navbar-toggler");

    function onLinkClick() {
      if (toggler && window.getComputedStyle(toggler).display !== "none") {
        toggler.click();
      }
    }

    navLinks.forEach((link) => link.addEventListener("click", onLinkClick));
    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", onLinkClick)
      );
    };
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a
            className="navbar-brand d-flex align-items-center gap-2"
            href="#home"
            onClick={(e) => handleScroll(e, "home")}
          >
            <img
              src={brgyLogo}
              alt="Barangay Logo"
              style={{
                height: "40px",
                width: "40px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
            Barangay San Jose
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About Us" },
                { id: "services", label: "Services" },
                { id: "directory", label: "Directory" },
                { id: "contact", label: "Contact Us" },
              ].map(({ id, label }) => (
                <li key={id} className="nav-item">
                  <a
                    href={`#${id}`}
                    className={`nav-link${id === "home" ? " active" : ""}`}
                    onClick={(e) => handleScroll(e, id)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <section id="home" className="hero text-white text-center">
        <div className="container">
          <h1 className="display-4">Welcome to Barangay San Jose</h1>
          <p className="lead">Quick and Easy Document Requests Online</p>
        </div>
      </section>

      <section id="about" className="text-center">
        <div className="container">
          <h2>About Us</h2>
          <p className="brgydesc">
            Barangay San Jose is a vibrant and progressive community situated in
            the municipality of San Miguel, Iloilo. As of the 2020 Census, it is
            home to 5,800 residents, making it the most populous barangay in San
            Miguel, accounting for approximately 19.26% of the municipality's
            total population. Located just 17 kilometers from Iloilo City and
            strategically positioned within the Metro Iloilo area, Barangay San
            Jose benefits from both agricultural potential and growing
            industrial activity. Its location supports a healthy mix of
            residential, commercial, and light industrial development,
            contributing to employment and local economic growth. The barangay
            is committed to delivering excellent public services and ensuring a
            safe, inclusive, and empowered community. With strong local
            leadership, active civic participation, and ongoing improvements in
            infrastructure, health, and education, Barangay San Jose continues
            to thrive as a model of grassroots development in San Miguel. We
            envision a self-reliant and future-ready barangay where innovation
            and community values come together to build a better tomorrow.
          </p>
        </div>
      </section>

      <section id="services" className="text-center">
        <div className="container">
          <h2>Services</h2>
          <p>Select the document you wish to request:</p>
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            <button
              className="btn btn-outline-primary d-flex align-items-center gap-2 px-4 py-2"
              onClick={goToClearance}
            >
              <i className="bi bi-file-earmark-text-fill"></i>
              Barangay Clearance
            </button>
            <button className="btn btn-outline-success d-flex align-items-center gap-2 px-4 py-2">
              <i className="bi bi-house-door-fill"></i>
              Certificate of Residency
            </button>
            <button className="btn btn-outline-warning d-flex align-items-center gap-2 px-4 py-2">
              <i className="bi bi-person-badge-fill"></i>
              Certificate of Indigency
            </button>
            <button className="btn btn-outline-info d-flex align-items-center gap-2 px-4 py-2">
              <i className="bi bi-briefcase-fill"></i>
              Business Permit
            </button>
            <button className="btn btn-outline-secondary d-flex align-items-center gap-2 px-4 py-2">
              <i className="bi bi-three-dots"></i>
              Other
            </button>
          </div>
        </div>
      </section>

      <section id="directory" className="text-center">
        <div className="container">
          <h2>Directory</h2>
          <p>Contact information for key Barangay officials and departments:</p>
          <ul className="list-unstyled">
            <li>
              <strong>Barangay Captain:</strong> Juan Dela Cruz - 0917-123-4567
            </li>
            <li>
              <strong>Secretary:</strong> Maria Santos - 0917-987-6543
            </li>
            <li>
              <strong>Health Officer:</strong> Dr. Ana Reyes - 0917-456-7890
            </li>
          </ul>
        </div>
      </section>

      <section id="contact" className="text-center">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us with any questions or requests.</p>
          <p>Email: info@barangaysanjose.gov.ph</p>
          <p>Phone: (02) 1234-5678</p>
          <p>Address: Barangay San Jose Hall, Main St, Barangay San Jose</p>
        </div>
      </section>

      <footer className="footer text-center py-3 bg-dark text-white">
        <div className="container">
          <p className="mb-0">
            &copy; 2025 Barangay San Jose. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
