import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import {  RxQuestionMark } from "react-icons/rx";
import { RiSettings4Fill } from "react-icons/ri";
import { SlDiamond } from "react-icons/sl";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="logo">
        <CgMenuGridR />
        <p className="title">OneDrive</p>
      </div>
      
      <div className="others">
        <SlDiamond />
        <RiSettings4Fill />
        <RxQuestionMark />
        <div className="user-icon">
            <p>L</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
