import React from "react";
import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import { features } from "../data/Data";

const Features = () => {
  return (
    <>
      <div className="container-fluid feature pb-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <Heading
              title={"Our Features"}
              subtitle={
                "Connecting businesses, ideas, and people for greater impact."
              }
              description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.`}
            />
          </div>
          <div className="row g-4">
            {features.map((val, key) => (
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="feature-item p-4">
                  <div className="feature-icon p-4 mb-4">{val.img}</div>
                  <h4>{val.title}</h4>
                  <p className="mb-4">{val.description}</p>
                  <Link
                    className="btn btn-primary rounded-pill py-2 px-4"
                    href="#"
                  >
                    {val.btn}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
