import React from "react";
import Experience from "./common/Experience";


const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">{`My name's Govind Reddy. I'm a web developer based in Dallas, TX, US.`}</p>
          <p className="py-2 text-gray-600">
            {`            Results-driven developer with ${<Experience startDate="11-01-2015" />}+ years of experience in leading cross-functional teams to create and deliver cutting-edge solutions for diverse markets. Specialize in crafting high-quality React components that enhance user experiences and elevate application performance. Strong track record of delivering high-quality web applications and leading teams for successful project completion, on both the front-end and back-end. Deep understanding of web development concepts such as RESTful API design, microservices, and cloud computing couple with proficiency in Agile methodologies
`}          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer"> Check out some of my latest projects</p>
        </div>
        <div className="rounded-xl w-full h-auto m-auto shadow-gray-400 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
          <img className="rounded-xl"
            src={"https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687289/retina_500x200_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png"}
            alt="FD "
          />
        </div>
      </div>
    </div>
  );
};

export default About;