import React from "react";
import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import { services } from "../data/Data";

const Services = () => {
  return (
    <>
      <div className="container-fluid service pb-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <Heading
              title={"Our Services"}
              subtitle={"We Services provided best offer"}
              description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.`}
            />
          </div>
          <div className="row g-4">
            {services.map((val, key) => (
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="service-item">
                  <div className="service-img">
                    <img
                      src={val.img}
                      className="img-fluid rounded-top w-100"
                      alt="agea"
                    />
                  </div>
                  <div className="rounded-bottom p-4">
                    <Link className="h4 d-inline-block mb-4">{val.title}</Link>
                    <p className="mb-4">{val.description}</p>
                    <Link
                      className="btn btn-primary rounded-pill py-2 px-4"
                      href="#"
                    >
                      {val.btn}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
