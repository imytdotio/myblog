import React from "react";
import { BetBlock } from "../Components/BetBlock";

/**
 * @author
 * @function Bets
 **/

const Bets = (props) => {
  const Links =
    "text-indigo-600 underline hover:bg-imyt_blue hover:text-white duration-200 pr-1";
  return (
    <div>
      <div>
        <h1 className="text-left font-bold text-xl mb-4">What is a bet?</h1>
        <p className="text-left">
          The idea of bets is from{" "}
          <a className={Links} href="https://twitter.com/dvassallo">
            Daniel Vassalo
          </a>
          . Betting on small projects in a wise way and test out every ideas.
          That's what I'm doing right now.{" "}
          <a className={Links} href="https://instagram.com/imyt.io">
            ✍️ IMYT's Instagram
          </a>{" "}
          is a bet.{" "}
          <a className={Links} href="https://onepercentcircle.org">
            ⭕️ One Percent Circle
          </a>{" "}
          is a bet.{" "}
          <a className={Links} href="https://onepercentcircle.org/productivity">
            🚀 Ultimate productivity guide
          </a>{" "}
          is a bet.{" "}
          <a className={Links} href="https://github.com/imytdotio">
            👨‍💻 All my programming projects
          </a>{" "}
          are bets, which can as well train my programming skills.
        </p>

        <BetBlock title="hello" desc="bye" />
      </div>
    </div>
  );
};
export default Bets;
