import React, { useState } from "react";
import { faq } from "../data/Data";
import Heading from "../common/Heading";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="container-fluid faq-section pb-5">
        <div className="container pb-5 overflow-hidden">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <Heading
              title={"FAQs"}
              subtitle={"Frequently Asked Questions"}
              description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.`}
            />
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
              <div
                className="accordion accordion-flush bg-light rounded p-5"
                id="accordionFlushSection"
              >
                {faq.map((val, key) => (
                  <div className="accordion-item rounded-top" key={key}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          openIndex === key ? "" : "collapsed"
                        } rounded-top`}
                        type="button"
                        onClick={() => handleClick(key)}
                      >
                        {val.question}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${
                        openIndex === key ? "show" : ""
                      }`}
                      style={{
                        height: openIndex === key ? "auto" : "0",
                        opacity: openIndex === key ? "1" : "0",
                      }}
                    >
                      <div className="accordion-body">{val.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
              <div className="bg-primary rounded">
                <img src="img/about-2.png" className="img-fluid w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
