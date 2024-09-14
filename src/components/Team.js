import React from "react";
import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import { team } from "../data/Data";

const Team = () => {
  return (
    <>
      <div className="container-fluid team pb-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <Heading
              title={"Our Team"}
              subtitle={"Meet Our Advisers"}
              description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.`}
            />
          </div>
          <div className="row g-4">
            {team.map((val, key) => (
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="team-item">
                  <div className="team-img">
                    <img src={val.img} className="img-fluid" alt="" />
                  </div>
                  <div className="team-title">
                    <h4 className="mb-0">{val.name}</h4>
                    <p className="mb-0">{val.profession}</p>
                  </div>
                  <div className="team-icon">
                    <Link
                      className="btn btn-primary btn-sm-square rounded-circle me-3"
                      to=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link
                      className="btn btn-primary btn-sm-square rounded-circle me-3"
                      to=""
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link
                      className="btn btn-primary btn-sm-square rounded-circle me-3"
                      to=""
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link
                      className="btn btn-primary btn-sm-square rounded-circle me-0"
                      to=""
                    >
                      <i className="fab fa-instagram"></i>
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

export default Team;
