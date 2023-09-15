import React from "react";
import { TbPlus } from "react-icons/tb";
import { RxCaretDown, RxGrid } from "react-icons/rx";
import { TfiDownload } from "react-icons/tfi";
import { ImEmbed2 } from "react-icons/im";
import { AiOutlineCopy } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { IoAlbumsOutline } from "react-icons/io5";
import { MdOutlineDriveFileMoveRtl } from "react-icons/md";
import { FaSortAmountDownAlt, FaRegShareSquare } from "react-icons/fa";

const TopHeader = ({ toggleModal }) => {
  return (
    <div className="top-header">
      <div className="ag-1">
        <div onClick={toggleModal}>
          <HeaderButton
            text="New"
            startIcon={<TbPlus />}
            endIcon={<RxCaretDown />}
          />
        </div>
        <div onClick={toggleModal}>
          <HeaderButton
            text="Upload"
            startIcon={<TfiDownload style={{ transform: "rotate(180deg)" }} />}
            endIcon={<RxCaretDown />}
          />
        </div>
        <div onClick={toggleModal}>
          <HeaderButton text="Share" startIcon={<FaRegShareSquare />} />
        </div>
        <div onClick={toggleModal}>
          <HeaderButton text="Download" startIcon={<TfiDownload />} />
        </div>
        <div onClick={toggleModal}>
          <HeaderButton
            text="Move to"
            startIcon={
              <MdOutlineDriveFileMoveRtl
                style={{ transform: "rotateY(180deg)" }}
              />
            }
          />
        </div>
        <div onClick={toggleModal}>
          <HeaderButton
            text="Copy to"
            startIcon={
              <AiOutlineCopy style={{ transform: "rotate(180deg)" }} />
            }
          />
        </div>
        <div onClick={toggleModal}>
          <HeaderButton text="Rename" startIcon={<BiPencil />} />
        </div>
        <div onClick={toggleModal}>
          <HeaderButton
            text="Create album from folder"
            startIcon={<IoAlbumsOutline />}
          />
        </div>
        <div onClick={toggleModal}>
          <HeaderButton text="Embed" startIcon={<ImEmbed2 />} />
        </div>
      </div>
      <div className="ag-2">
        <div onClick={toggleModal}>
          <HeaderButton
            text="Sort"
            startIcon={<FaSortAmountDownAlt />}
            endIcon={<RxCaretDown />}
          />
        </div>
        <div onClick={toggleModal}>
          <HeaderButton
            startIcon={<RxGrid />}
            endIcon={<RxCaretDown />}
          />
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
