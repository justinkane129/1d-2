import React from "react";
import TopHeader from "./TopHeader";
import ReactPortal from "./ReactPortal";
import Modal from "./Modal";
import {IoChevronForwardOutline} from "react-icons/io5"

const fileList = [
  {
    img: "./1.png",
    title: "File INDEX9505...",
    icon: "./pdf.png"
  },
  {
    img: "./2.png",
    title: "Shared Documen...",
    icon: "./pdf.png"
  },
  {
    img: "./3.png",
    title: "File 002INV812...",
    icon: "./pdf.png"
  },
  {
    img: "./4.png",
    title: "0363NT10 files...",
    icon: "./pdf.png"
  },
  {
    img: "./5.png",
    title: "Service PO_495...",
    icon: "./pdf.png"
  },
];

const MainContent = () => {
  const [open, setOpen] = React.useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };
  return (
    <div className="main-content">
      <TopHeader toggleModal={toggleModal} />
      <div className="content">
        <div className="title">My Files <IoChevronForwardOutline /> Company Business Files</div>
        <div className="files">
          {fileList.map((f) => (
            <div
              className="file"
              onClick={toggleModal}
              key={f.title}
              style={{ backgroundImage: `url(${f.img})` }}
            >
              <div className="caption">
                <img src={f.icon} alt={f.title} className="img" />
                <p className="title">{f.title}</p>
              </div>
            </div>
          ))}
        </div>
        {open && (
          <ReactPortal wrapperId="m-wr">
            <Modal toggle={toggleModal} open={open} />
          </ReactPortal>
        )}
      </div>
    </div>
  );
};

export default MainContent;
