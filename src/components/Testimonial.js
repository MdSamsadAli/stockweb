import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../common/Heading";
import { testimonial } from "../data/Data";

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container-fluid testimonial pb-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <Heading
              title={"Testimonial"}
              subtitle={"Our Clients Riviews"}
              description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.`}
            />
          </div>
          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <Slider {...settings}>
              {testimonial.map((val, key) => (
                <div className="testimonial-item" key={key}>
                  <div className="testimonial-quote-left">
                    <i className="fas fa-quote-left fa-2x"></i>
                  </div>
                  <div className="testimonial-img">
                    <img src={val.img} className="img-fluid" alt="myge" />
                  </div>
                  <div className="testimonial-text">
                    <p className="mb-0">{val.description}</p>
                  </div>
                  <div className="testimonial-title">
                    <div>
                      <h4 className="mb-0">{val.name}</h4>
                      <p className="mb-0">{val.profession}</p>
                    </div>
                    <div className="d-flex text-primary">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="testimonial-quote-right">
                    <i className="fas fa-quote-right fa-2x"></i>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
