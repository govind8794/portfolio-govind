import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MobileNavBar } from "./MobileNavBar";
import { AiOutlineMenu } from "react-icons/ai";
import { linksData } from "../public/assets/MockData/LinksMockData";
import { NavBarLinks } from "./NavBarLinks";
import Link from "next/link";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter()

  useEffect(() =>{

    if(router.asPath === '/Blog' || 
    router.asPath === '/TeleCom' ||
    router.asPath === '/E-Commerce' ||
    router.asPath === '/HealthCare' 
    ){
    setNavBg('transparent')
    setLinkColor('#ecf0f3')
    } else{
      setNavBg('#ecf0f3')
      setLinkColor('#1f2937')
    }
  },[router])

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const shadowHandler = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      }else{
        setShadow(false);
      }
    };
    window.addEventListener("scroll", shadowHandler);
  }, []);
  return (
    <div  style={{'backgroundColor' : `${navBg}`}}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href={'/'}>
        <Image
          src="/../public/assets/logos/GP.png"
          alt="GP"
          width="65"
          height="55"
        />
        </Link>
        <div>
          <NavBarLinks classNameUL={"hidden md:flex"} links={linksData} liClassName='ml-10 text-sm uppercase hover:border-b' linkColor={linkColor} />
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu style={{'color': `${linkColor}`}} size={30} />
          </div>
        </div>
      </div>
      <MobileNavBar navHandler={handleNav} nav={nav} />
    </div>
  );
};
export default NavBar;
