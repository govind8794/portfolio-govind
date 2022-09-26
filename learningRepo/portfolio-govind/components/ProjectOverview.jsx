import Image from "next/image";
import Link from "next/link";
import React from "react";
import Technologies from "./Technologies";
import Overview from './Overview'
import { HiChevronDoubleLeft } from "react-icons/hi";

const ProjectOverview = ({ projectImg, titleName, toolNames }) => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute z-10 top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={projectImg}
          alt="/"
        />
        <div className="absolute top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] -translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{titleName}</h2>
          <h3>{toolNames}</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <Overview/>
        <Technologies />
        <Link href={'/#projects'}>
        <p className="underline cursor-pointer flex items-center "> <HiChevronDoubleLeft className="text-[#2c69af] pr-1" />Back</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectOverview;
