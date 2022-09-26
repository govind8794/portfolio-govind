import React from "react";
import Link from "next/link";

export const NavBarLinks = ({ classNameUL, links, liClassName, mobile, clickHandler, linkColor }) => {
  return (
    <ul style={{'color': `${linkColor}`}} className={classNameUL}>
      {links.map((data, index) => {
        return (
          <Link href={data.href} key={index}>
            { mobile ? <li onClick={clickHandler} className={liClassName}>{data.name}</li> : <li className={liClassName}>{data.name}</li>}
          </Link>
        );
      })}
    </ul>
  );
};
