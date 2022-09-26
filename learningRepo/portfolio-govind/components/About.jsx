import Image from "next/image";
import React from "react";


const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#2c69af]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">// I am not your normal developer</p>
          <p className="py-2 text-gray-600">
            In 2017, I started learning with HTML and CSS developing and designing
            some stick pages and making some minor changes on web browser's with
            the help of debugging and inspecting. After I started liking and
            interesting for programming side.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer"> Check out some of my latest projects</p>
        </div>
        <div className="rounded-xl w-full h-auto m-auto shadow-gray-400 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
          <Image className="rounded-xl"
            src={"https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687289/retina_500x200_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png"}
            alt="FD "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
