import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../common/Heading";
import { blog } from "../data/Data";

const Blog = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    margin: 20,
  };
  return (
    <>
      <div className="container-fluid blog pb-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <Heading
              title={"Our Blog & News"}
              subtitle={"Articles For Pro Traders"}
              description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.`}
            />
          </div>
          <div className="blog" data-wow-delay="0.2s">
            <Slider {...settings}>
              {blog.map((data, index) => (
                <div className="blog-item p-4" key={index}>
                  <div className="blog-img mb-4">
                    <img
                      src={data.blog_img}
                      className="img-fluid w-100 rounded"
                      alt=""
                    />
                    <div className="blog-title">
                      <Link className="btn">{data.tag}</Link>
                    </div>
                  </div>
                  <Link className="h4 d-inline-block mb-3">{data.title}</Link>
                  <p className="mb-4">{data.description}</p>
                  <div className="d-flex align-items-center">
                    <img
                      src={data.created_img}
                      className="img-fluid rounded-circle"
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                    <div className="ms-3">
                      <h5>{data.created_by}</h5>
                      <p className="mb-0">{data.created_at}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="blog-item p-4">
                <div className="blog-img mb-4">
                  <img
                    src="img/service-1.jpg"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                  <div className="blog-title">
                    <Link to="/" className="btn">
                      Dividend Stocks
                    </Link>
                  </div>
                </div>
                <Link to="/" className="h4 d-inline-block mb-3">
                  Options Trading Business?
                </Link>
                <p className="mb-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore aut aliquam suscipit error corporis accusamus
                  labore....
                </p>
                <div className="d-flex align-items-center">
                  <img
                    src="img/testimonial-1.jpg"
                    className="img-fluid rounded-circle"
                    style={{ width: "60px", height: "60px" }}
                    alt=""
                  />
                  <div className="ms-3">
                    <h5>Admin</h5>
                    <p className="mb-0">October 9, 2025</p>
                  </div>
                </div>
              </div>

              <div className="blog-item p-4">
                <div className="blog-img mb-4">
                  <img
                    src="img/service-1.jpg"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                  <div className="blog-title">
                    <Link to="/" className="btn">
                      Dividend Stocks
                    </Link>
                  </div>
                </div>
                <Link to="/" className="h4 d-inline-block mb-3">
                  Options Trading Business?
                </Link>
                <p className="mb-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore aut aliquam suscipit error corporis accusamus
                  labore....
                </p>
                <div className="d-flex align-items-center">
                  <img
                    src="img/testimonial-1.jpg"
                    className="img-fluid rounded-circle"
                    style={{ width: "60px", height: "60px" }}
                    alt=""
                  />
                  <div className="ms-3">
                    <h5>Admin</h5>
                    <p className="mb-0">October 9, 2025</p>
                  </div>
                </div>
              </div> */}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
