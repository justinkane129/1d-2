import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { RxCaretDown, RxQuestionMark } from "react-icons/rx";
import { RiSettings4Fill } from "react-icons/ri";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="logo">
        <GiHamburgerMenu />
        <p className="title">OneDrive</p>
      </div>
      <div className="search">
        <div className="search-icon">
          <FaSearch />
        </div>
        <input type="text" placeholder="Search" className="search-control" />
        <div className="search-selector">
          <p>All Files</p>
          <RxCaretDown />
        </div>
      </div>
      <div className="others">
        <RiSettings4Fill />
        <RxQuestionMark />
        <div className="user-icon">
            <p>R</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
