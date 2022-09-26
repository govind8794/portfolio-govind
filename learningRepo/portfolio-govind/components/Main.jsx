import React from "react";
import SocialMediaMobile from "./SocialMedia";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            {`LET'S BUILD SOMETHING TOGETHER`}
          </p>
          <h1 className="py-4 text-gray-700">
            {`I'm `}<span className="text-[#2c69af]">Govind Reddy Patlolu</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Developer</h1>
          {/* <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front-end developer specializing in building exceptional
            digital experiences. Currently, I'm focused on building responsive
            front-end web application while learning back-end technologies.
          </p> */}
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I have 4+ years of experience in designing and developing software.
            Currently, I love to work on web application using technologies like
            React JS, Next JS, Redux, Tailwind, and GraphQL.
          </p>
          <SocialMediaMobile
            childDivClassName={" p-6 hover:scale-110"}
            parentDivClassName={"max-w-[330px] m-auto py-4"}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
