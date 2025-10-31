import React, { useState } from "react";
import { RxHamburgerMenu, RxAvatar } from "react-icons/rx";
import { CiSearch, CiHeart, CiBellOn } from "react-icons/ci";
import { IoMoonOutline, IoMoonSharp, IoAppsOutline } from "react-icons/io5";

const Header = () => {
  const [dark, setDark] = useState(false);

  return (
    <nav className="flex justify-between py-4  items-center mx-auto">
      <div className="left gap-4 flex ">
        <RxHamburgerMenu size={23} />
        <IoAppsOutline size={23} />
      </div>
      <div className="right flex gap-3">
        <CiSearch size={23} />
        {dark ? <IoMoonSharp size={23} /> : <IoMoonOutline size={23} />}

        <div className="relative">
          <CiHeart size={23} />
          <span className="absolute bottom-3 left-3 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-blue-600 rounded-full">
            4
          </span>
        </div>
        <div className="relative">
          <CiBellOn size={23} />
          <span className="absolute bottom-3 left-3 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full">
            4
          </span>
        </div>
        <RxAvatar size={23} />
      </div>
    </nav>
  );
};

export default Header;
