import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import { offers } from "../data/Data";

const getUniqueOfferPills = (offers) => {
  const allPills = offers.map((offer) => offer.offer_pill);
  return [...new Set(allPills)];
};

const Offer = () => {
  const [offerItem, setOfferItem] = useState(offers);
  const [activeItem, setActiveItem] = useState(false);

  const offerPills = getUniqueOfferPills(offers);

  const filterItems = (item) => {
    setActiveItem(item);
    const filterOffer = offers.filter((data) => data.offer_pill === item);
    setOfferItem(filterOffer);
  };

  useEffect(() => {
    filterItems(offerPills[0]);
  }, []);

  return (
    <>
      <div className="container-fluid offer-section pb-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <Heading
              title={"Our Offer"}
              subtitle={"Benefits We Offer"}
              description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.`}
            />
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="nav nav-pills bg-light rounded p-5">
                {offerPills.map((pill, key) => (
                  <Link
                    key={key}
                    onClick={() => filterItems(pill)}
                    className={`accordion-link p-4 ${
                      activeItem === pill ? "active" : ""
                    } mb-4`}
                  >
                    <h5 className="mb-0">{pill}</h5>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.4s">
              <div className="tab-content">
                {offerItem.map((val, key) => (
                  <div
                    key={key}
                    id="collapseOne"
                    className="tab-pane fade show p-0 active"
                  >
                    <div className="row g-4">
                      <div className="col-md-7">
                        <img
                          src={val.img}
                          className="img-fluid w-100 rounded"
                          alt=""
                        />
                      </div>
                      <div className="col-md-5">
                        <h1 className="display-5 mb-4">{val.title}</h1>
                        <p className="mb-4">{val.description}</p>
                        <Link className="btn btn-primary rounded-pill py-2 px-4">
                          {val.btn}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {/* <div id="collapseTwo" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-md-7">
                      <img
                        src="img/offer-2.jpg"
                        className="img-fluid w-100 rounded"
                        alt=""
                      />
                    </div>
                    <div className="col-md-5">
                      <h1 className="display-5 mb-4">
                        The stock market provides a venue...
                      </h1>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis amet sequi molestiae tenetur eum mollitia,
                        blanditiis, magnam illo magni error dolore unde
                        perspiciatis tempore et totam corrupti dignissimos aut
                        praesentium?
                      </p>
                      <Link
                        className="btn btn-primary rounded-pill py-2 px-4"
                        href="#"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
                <div id="collapseThree" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-md-7">
                      <img
                        src="img/offer-3.jpg"
                        className="img-fluid w-100 rounded"
                        alt=""
                      />
                    </div>
                    <div className="col-md-5">
                      <h1 className="display-5 mb-4">
                        The stock market provides a venue...
                      </h1>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis amet sequi molestiae tenetur eum mollitia,
                        blanditiis, magnam illo magni error dolore unde
                        perspiciatis tempore et totam corrupti dignissimos aut
                        praesentium?
                      </p>
                      <Link
                        className="btn btn-primary rounded-pill py-2 px-4"
                        href="#"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
                <div id="collapseFour" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-md-7">
                      <img
                        src="img/offer-4.jpg"
                        className="img-fluid w-100 rounded"
                        alt=""
                      />
                    </div>
                    <div className="col-md-5">
                      <h1 className="display-5 mb-4">
                        The stock market provides a venue...
                      </h1>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis amet sequi molestiae tenetur eum mollitia,
                        blanditiis, magnam illo magni error dolore unde
                        perspiciatis tempore et totam corrupti dignissimos aut
                        praesentium?
                      </p>
                      <Link
                        className="btn btn-primary rounded-pill py-2 px-4"
                        href="#"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
