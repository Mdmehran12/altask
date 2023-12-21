import React from "react";
import "./uicomponent.css";

const Uicomponent = () => {
  return (
    <div className="main-sec">
      <div className="left-section">
        <h1 style={{ paddingBottom: "10px" }}>UI Componenst of Altask</h1>
        <h1 className="altask-main-heading">Altask Main Heading</h1>
        <h3 className="altask-sub-heading">Altask Sub Heading</h3>
      </div>
      <div className="right-section">
        <button className="altask-red-btn">Accept</button> <br /> <br />
        <button className="altask-black-btn">Reject</button>
      </div>
    </div>
  );
};

export default Uicomponent;
