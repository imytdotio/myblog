import React from "react";
import SelfIntro from "../Components/SelfIntro";
import Products from "../Components/Products";
import Projects from "../Components/Projects";
import Quick from "../Components/Quick";
/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <div className="">
      <Quick />
      <SelfIntro />
      {/* <AssetTalentStack /> */}
      <Products />
      <Projects />
    </div>
  );
};
export default Home;
