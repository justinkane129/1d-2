import React from "react";
import { VscSearch } from "react-icons/vsc";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <div className="search">
          <VscSearch /> <p>Search everything</p>
        </div>
        <p className="header">OneDrive</p>
        <ul>
          <li>My Files</li>
          <li>Recent</li>
          <li>Photos</li>
          <li>Shared</li>
          <li>Recycle Bin</li>
        </ul>
      </div>
      <div className="side-footer">
        <p>
          Get 1TB (1000 GB) of storage and the latest Office apps for PC or Mac
        </p>
        <p className="link">learn More</p>
        <button>
          <i className="fa fa-codepen" /> Go Premium
        </button>
        <p>103.1MB used of 5GB</p>
        <p className="link">Get the OneDrive Apps</p>
      </div>
    </div>
  );
};

export default Sidebar;
