import React from "react";
import Pill from "./Pill";
import { FiInstagram, FiGithub } from "react-icons/fi";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { AiOutlineRocket } from "react-icons/ai";
/**
 * @author
 * @function Quick
 **/

const Quick = (props) => {
  return (
    <div className="text-left">
      <a href="https://instagram.com/imyt.io" target="blank">
        <Pill>
          <FiInstagram className="inline mb-1" />
          <p className="inline"> Instagram</p>
        </Pill>
      </a>
      <a href="https://github.com/imytdotio" target="blank">
        <Pill>
          <FiGithub className="inline mb-1" />
          <p className="inline"> Github</p>
        </Pill>
      </a>
      <a href="http://onepercentcircle.org/" target="blank">
        <Pill>
          {" "}
          <BsFillRecordCircleFill className="inline mb-1" />
          <p className="inline"> One Percent Circle</p>
        </Pill>
      </a>
      <a href="https://onepercentcircle.org/productivity" target="blank">
        <Pill>
          <AiOutlineRocket className="inline mb-1" />
          <p className="inline"> Ultimate Productivity Guide</p>
        </Pill>
      </a>
    </div>
  );
};
export default Quick;
