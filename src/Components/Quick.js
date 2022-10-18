import React from "react";
import Pill from "./Pill";

/**
 * @author
 * @function Quick
 **/

const Quick = (props) => {
  return (
    <div className="text-left">
      <a href="https://instagram.com/imyt.io" target="blank">
        <Pill>Instagram</Pill>
      </a>
      <a href="https://github.com/imytdotio" target="blank">
        <Pill>Github</Pill>
      </a>
      <a href="https://instagram.com/imyt.io" target="blank">
        <Pill>One Percent Circle</Pill>
      </a>
    </div>
  );
};
export default Quick;
