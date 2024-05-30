import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ children, setOpenModal }) => {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      <div className="ModalContent">
        <span
          className="CloseButton"
          onClick={() => {
            setOpenModal(false);
          }}
        ></span>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export { Modal };
