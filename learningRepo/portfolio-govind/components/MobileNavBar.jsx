import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { linksData } from "../public/assets/MockData/LinksMockData";
import { NavBarLinks } from "./NavBarLinks";
import SocialMedia from "./SocialMedia";

export const MobileNavBar = ({ nav, navHandler }) => {
  return (
    <div
      className={
        nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
      }
    >
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between">
            <Link  href={'/'}>
            <Image
              src="/../public/assets/logos/GP.png"
              alt="GP"
              width="65"
              height="55"
              onClick={navHandler}
            />
            </Link>
            <div
              onClick={navHandler}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4"></div>
        </div>
        <div className="py-4 flex flex-col">
          <NavBarLinks classNameUL={"uppercase"} links={linksData} liClassName='py-4 text-sm' clickHandler={navHandler} mobile/>
          <div className="pt-40">
            <p className="uppercase tracking-widest text-[#5651e5]">
              {`Let's Connect`}
            </p>
            <SocialMedia
              parentDivClassName={" my-4 w-full sm:w-[80%]"}
              childDivClassName={" p-3 hover:scale-105"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
