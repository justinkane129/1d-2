import React from "react";
import { BsFolderFill } from "react-icons/bs";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { AiOutlinePicture } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { TbRecycle } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <BsFolderFill /> My Files
        </li>
        <li>
          <RxCounterClockwiseClock /> Recent
        </li>
        <li>
          <AiOutlinePicture />
          Photos
        </li>
        <li>
          <FiUsers />
          Shared
        </li>
        <li>
          <TbRecycle />
          Recycle Bin
        </li>
      </ul>
      <div className="side-footer">
        <p>
          Get 1TB (1000 GB) of storage and the latest Office apps for PC or Mac
        </p>
        <p className="link">learn More</p>
        <button>
          <i className="fa fa-codepen" /> Go Premium
        </button>
        <p>1.1MB used of 5GB</p>
        <p className="link">Get the OneDrive Apps</p>
      </div>
    </div>
  );
};

export default Sidebar;
