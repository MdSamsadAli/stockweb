// import { GrLinkNext } from "react-icons/gr";
// import { instagramfeed } from "../data/Data";
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div
          class="container py-5 border-start-0 border-end-0"
          style={{
            border: "1px solid",
            borderColor: "rgb(255, 255, 255, 0.08)",
          }}
        >
          <div class="row g-5">
            <div class="col-md-6 col-lg-6 col-xl-4">
              <div class="footer-item">
                <Link href="index.html" class="p-0">
                  <h4 class="text-white">
                    <i class="fas fa-search-dollar me-3"></i>Stocker
                  </h4>
                </Link>
                <p class="mb-4">
                  Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem
                  ipsum dolor sit amet, consectetur adipiscing...
                </p>
                <div class="d-flex">
                  <Link
                    to="#"
                    class="bg-primary d-flex rounded align-items-center py-2 px-3 me-2"
                  >
                    <i class="fas fa-apple-alt text-white"></i>
                    <div class="ms-3">
                      <small class="text-white">Download on the</small>
                      <h6 class="text-white">App Store</h6>
                    </div>
                  </Link>
                  <Link
                    to="#"
                    class="bg-dark d-flex rounded align-items-center py-2 px-3 ms-2"
                  >
                    <i class="fas fa-play text-primary"></i>
                    <div class="ms-3">
                      <small class="text-white">Get it on</small>
                      <h6 class="text-white">Google Play</h6>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-2">
              <div class="footer-item">
                <h4 class="text-white mb-4">Quick Links</h4>
                <Link to="/">
                  <i class="fas fa-angle-right me-2"></i> About Us
                </Link>
                <Link to="/">
                  <i class="fas fa-angle-right me-2"></i> Feature
                </Link>
                <Link to="/">
                  <i class="fas fa-angle-right me-2"></i> Attractions
                </Link>
                <Link to="/">
                  <i class="fas fa-angle-right me-2"></i> Tickets
                </Link>
                <Link to="/">
                  <i class="fas fa-angle-right me-2"></i> Blog
                </Link>
                <Link to="/">
                  <i class="fas fa-angle-right me-2"></i> Contact us
                </Link>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="footer-item">
                <h4 class="text-white mb-4">Support</h4>
                <Link to="/">
                  <i class="fas fa-angle-right me-2"></i> Privacy Policy
                </Link>
                <Link to="/">
                  <i class="fas fa-angle-right me-2"></i> Terms & Conditions
                </Link>
                <Link to="/">
                  <i class="fas fa-angle-right me-2"></i> Disclaimer
                </Link>
                <Link to="/">
                  <i class="fas fa-angle-right me-2"></i> Support
                </Link>
                <Link to="/">
                  <i class="fas fa-angle-right me-2"></i> FAQ
                </Link>
                <Link to="/">
                  <i class="fas fa-angle-right me-2"></i> Help
                </Link>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="footer-item">
                <h4 class="text-white mb-4">Contact Info</h4>
                <div class="d-flex align-items-center">
                  <i class="fas fa-map-marker-alt text-primary me-3"></i>
                  <p class="text-white mb-0">123 Street New York.USA</p>
                </div>
                <div class="d-flex align-items-center">
                  <i class="fas fa-envelope text-primary me-3"></i>
                  <p class="text-white mb-0">info@example.com</p>
                </div>
                <div class="d-flex align-items-center">
                  <i class="fa fa-phone-alt text-primary me-3"></i>
                  <p class="text-white mb-0">(+012) 3456 7890</p>
                </div>
                <div class="d-flex align-items-center mb-4">
                  <i class="fab fa-firefox-browser text-primary me-3"></i>
                  <p class="text-white mb-0">Yoursite@ex.com</p>
                </div>
                <div class="d-flex">
                  <Link
                    class="btn btn-primary btn-sm-square rounded-circle me-3"
                    href="#"
                  >
                    <i class="fab fa-facebook-f text-white"></i>
                  </Link>
                  <Link
                    class="btn btn-primary btn-sm-square rounded-circle me-3"
                    href="#"
                  >
                    <i class="fab fa-twitter text-white"></i>
                  </Link>
                  <Link
                    class="btn btn-primary btn-sm-square rounded-circle me-3"
                    href="#"
                  >
                    <i class="fab fa-instagram text-white"></i>
                  </Link>
                  <Link
                    class="btn btn-primary btn-sm-square rounded-circle me-0"
                    href="#"
                  >
                    <i class="fab fa-linkedin-in text-white"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
