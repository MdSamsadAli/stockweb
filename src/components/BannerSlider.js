import React from "react";
import { banner } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const BannerSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="header-carousel">
        <Slider {...settings}>
          {banner.map((val, key) => (
            <div className="header-carousel-item" key={key}>
              <img src={val.img} className="img-fluid w-100" alt="age" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row gy-0 gx-5">
                    <div className="col-lg-0 col-xl-5"></div>
                    <div className="col-xl-7 animated fadeInLeft">
                      <div className="text-sm-center text-md-end">
                        <h4 className="text-primary text-uppercase fw-bold mb-4">
                          Welcome To Stocker
                        </h4>
                        <h1 className="display-4 text-uppercase text-white mb-4">
                          Invest your money with higher return
                        </h1>
                        <p className="mb-5 fs-5">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy...
                        </p>
                        <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                          <Link
                            className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
                            href="#"
                          >
                            <i className="fas fa-play-circle me-2"></i> Watch
                            Video
                          </Link>
                          <Link
                            className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
                            href="#"
                          >
                            Learn More
                          </Link>
                        </div>
                        <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                          <h2 className="text-white me-2">Follow Us:</h2>
                          <div className="d-flex justify-content-end ms-2">
                            <Link
                              className="btn btn-md-square btn-light rounded-circle me-2"
                              href=""
                            >
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link
                              className="btn btn-md-square btn-light rounded-circle mx-2"
                              href=""
                            >
                              <i className="fab fa-twitter"></i>
                            </Link>
                            <Link
                              className="btn btn-md-square btn-light rounded-circle mx-2"
                              href=""
                            >
                              <i className="fab fa-instagram"></i>
                            </Link>
                            <Link
                              className="btn btn-md-square btn-light rounded-circle ms-2"
                              href=""
                            >
                              <i className="fab fa-linkedin-in"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BannerSlider;
