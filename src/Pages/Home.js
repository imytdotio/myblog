import React from "react";
import SelfIntro from "../Components/SelfIntro";
import Products from "../Components/Products";
import Projects from "../Components/Projects";
/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <div className="w-4/5 md:w-3/5 xl:w-2/5 mx-auto">
      <SelfIntro />
      <Products />
      <Projects />
    </div>
  );
};
export default Home;
