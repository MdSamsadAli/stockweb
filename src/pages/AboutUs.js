import React from "react";
import Banner from "../common/Banner";
import About from "../components/About";

const AboutUs = () => {
  return (
    <div>
      <div>
        <Banner title={"About Us"} to={"Home"} current={"About"} />
      </div>
      <About />
    </div>
  );
};

export default AboutUs;
