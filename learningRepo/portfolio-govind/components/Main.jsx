import React from "react";
import SocialMediaMobile from "./SocialMedia";
import Experience from "./common/Experience.jsx";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-sm tracking-widest text-gray-600">
            Full Stack Web Developer
          </p>
          <h1 className="py-4 text-gray-700">
            <span className="text-[#2c69af]">Govind Reddy</span>
          </h1>
          {/* <h1 className="py-2 text-gray-700">A Front-End Developer</h1> */}
          {/* <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front-end developer specializing in building exceptional
            digital experiences. Currently, I'm focused on building responsive
            front-end web application while learning back-end technologies.
          </p> */}
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Building bridges between pixels and people, with innovation at the core. Full stack web development expertise tailored to elevate your online presence.
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
