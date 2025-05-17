import React from "react";
import Hero from "./hero";
import Collections from "./Collections";
import Services from "./Services";
import Blogs from "./Blogs";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <Services />
        <Contact />
        <Collections />
        <Blogs />
      </div>
    </>
  );
};

export default Home;
