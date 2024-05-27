import React from "react";
import "./Exp_tesla.css";
import videoBG from "../../assets/video/Tesla Test Drive Experience.mp4";

function Exp_tesla() {
  return (
    <section className="Exp-detail">
      <div className="Exp">
        <video src={videoBG} autoPlay muted loop id="Video"></video>
        <div className="exp-main-text">
          <h1>Experience Tesla</h1>
          <p>Schedule a Test Drive Today</p>
        </div>

        <a href="#" className="test-drive-btn">
          Order Now
        </a>
      </div>
    </section>
  );
}

export default Exp_tesla;
