import React from "react";
import SelfIntro from "../Components/SelfIntro";
import Projects from "../Components/Projects";
import ProductCarousel from "../Components/ProductCarousel";
import Quick from "../Components/Quick";
/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <div className="">
      <Quick className="invisible" />
      <SelfIntro />
      <ProductCarousel />
      {/* <AssetTalentStack /> */}
      <Projects />
    </div>
  );
};
export default Home;
