import React from "react";
import TopHeader from "./TopHeader";
import ReactPortal from "./ReactPortal";
import Modal from "./Modal";

const fileList = [
  {
    img: "./1.png",
    title: "Company Profile...",
    time: "A Few Minutes ago",
  },
  {
    img: "./2.png",
    title: "Sample video",
    time: "A Few Minutes ago",
  },
  // {
  //   img: "./3.png",
  //   title: "File 002INV812...",
  //   time: "A Few Minutes ago",
  // },
  // {
  //   img: "./4.png",
  //   title: "0363NT10 files...",
  //   time: "A Few Minutes ago",
  // },
  {
    img: "./5.png",
    title: "Drawing & specifications...",
    time: "A Few Minutes ago",
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
        <div className="title">Shared Files</div>
        <div className="files">
          {fileList.map((f) => (
            <div
              className="file"
              onClick={toggleModal}
              key={f.title}
              style={{ backgroundImage: `url(${f.img})` }}
            >
              <div className="caption">
                <p className="title">{f.title}</p>
                <p className="time">{f.time}</p>
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
