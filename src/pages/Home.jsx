import React from "react";
import Collections from "./Collections";
import Services from "./Services";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        {/* <Contact /> */}
        <Collections />
        <Services />

        <Blogs />
      </div>
    </>
  );
};

export default Home;
