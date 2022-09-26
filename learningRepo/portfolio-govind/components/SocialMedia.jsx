import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

export default function SocialMediaMobile({ childDivClassName, parentDivClassName }) {
  return (
    <div className={` flex items-center justify-between ${parentDivClassName}`}>
       <Link href={'https://www.linkedin.com/in/govind-patlolu-080192153/'} passHref > 
       <a target="_blank">
      <div className={` rounded-full shadow-lg shadow-gray-400 cursor-pointer ease-in duration-300 ${childDivClassName}`}>
        <FaLinkedinIn /> 
      </div>
      </a>
      </Link>
      <div className={` rounded-full shadow-lg shadow-gray-400 cursor-pointer ease-in duration-300 ${childDivClassName}`}>
        <FaGithub />
      </div>
      <div className={` rounded-full shadow-lg shadow-gray-400 cursor-pointer ease-in duration-300 ${childDivClassName}`}>
        <AiOutlineMail />
      </div>
      <div className={` rounded-full shadow-lg shadow-gray-400 cursor-pointer ease-in duration-300 ${childDivClassName}`}>
        <BsFillPersonLinesFill />
      </div>
    </div>
  );
}