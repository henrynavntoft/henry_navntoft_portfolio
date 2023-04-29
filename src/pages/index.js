import React from "react";
import Layout from "../components/Layout";
import About from "../components/About";
import Projects from "../components/Projects";
import Resume from "../components/Resume";

const HomePage = ({ projects }) => {
  return (
    <>
      <About />
      <Projects projects={projects} />
      <Resume />
    </>
  );
};

// Keep the getStaticProps function as is

export default HomePage;
