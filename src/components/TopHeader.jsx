import React from "react";
import { TbPlus } from "react-icons/tb";
import { RxCaretDown, RxGrid } from "react-icons/rx";
import { ImUpload3 } from "react-icons/im";
import { GoSync } from "react-icons/go";
import { MdBolt } from "react-icons/md";
import { FaSortAmountDownAlt } from "react-icons/fa";

const TopHeader = ({toggleModal}) => {
  
  return (
    <div className="top-header">
      <div className="ag-1">
        <div onClick={toggleModal}>
          <HeaderButton
            text="New"
            startIcon={<TbPlus />}
            endIcon={<RxCaretDown />}
            extraClass="primary"
          />
        </div>
        <div onClick={toggleModal}>
          <HeaderButton
            text="Upload"
            startIcon={<ImUpload3 />}
            endIcon={<RxCaretDown />}
          />
        </div>
        <div onClick={toggleModal}>
          <HeaderButton text="Sync" startIcon={<GoSync />} />
        </div>
        <div onClick={toggleModal}>
          <HeaderButton
            text="Automate"
            startIcon={<MdBolt />}
            endIcon={<RxCaretDown />}
          />
        </div>
      </div>
      <div className="ag-2">
        <div onClick={toggleModal}>
          <HeaderButton
            text="Sort"
            startIcon={<FaSortAmountDownAlt />}
            endIcon={<RxCaretDown />}
            extraClass="blue"
          />
        </div>
        <div onClick={toggleModal}>
          <HeaderButton startIcon={<RxGrid />} endIcon={<RxCaretDown />} extraClass="blue" />
        </div>
      </div>
    </div>
  );
};

function HeaderButton({ text, startIcon, endIcon, extraClass }) {
  return (
    <button className={`header-btn ${extraClass}`}>
      {startIcon} {text} {endIcon}
    </button>
  );
}

export default TopHeader;
