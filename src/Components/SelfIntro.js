import React from "react";

/**
 * @author
 * @function SelfIntro
 **/

const SelfIntro = (props) => {
  const Links =
    "text-indigo-600 underline hover:bg-indigo-600 hover:text-white duration-200 pr-1";
  return (
    <div className="md:p-8 text-left">
      <h1 className="font-bold text-5xl pt-4 pb-8">Hello, I'm YT</h1>
      <p className="leading-7">
        👋 Hello, 我是 YT, 現正修讀大學課程 - Data Science y/4, 同時自學
        <a className={Links} href="https://github.com/imytdotio">
          🧑‍💻 Programming
        </a>
        和
        <a className={Links} href="https://instagram.com/imyt.io">
          在 IG 分享內容。
        </a>{" "}
        由於我十分喜歡📚 閱讀和觀看「🚀 生產力、⛓ 習慣」相關的書本和內容。在{" "}
        <a className={Links} href="https://instagram.com/imyt.io">
          ✍️ IG
        </a>
        上都是分享有關「自我成長」類的內容。 <br /> 我 🕔 05:00 起床，每天 🍳
        煮早餐、📚 閱讀、學習 Programming, 然後上學。
        我很喜歡學習、閱讀、建立習慣、過有規律的生活。
      </p>
    </div>
  );
};
export default SelfIntro;
