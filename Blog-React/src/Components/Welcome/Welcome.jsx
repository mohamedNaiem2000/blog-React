import React from "react";
import "./Welcome.css";
import video from "../../../public/images/quran.mp4";
function Welcome(props) {
  return (
    <div className="welcomeuser">
      <div className="data">
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          src="https://cdn.dribbble.com/uploads/39421/original/963b4f8739cbdf86ca3f3a23245efd18.mp4?1657824985"
        >
          Your browser does not support HTML5 video.
        </video>

        <div className="content">
          <h1 className="text-center font-bold">Welcome in my blog</h1>
          <p className="text-center">Iam very happy when you here</p>
          <p className="text-center">
          The Official Home of Correct Movie Opinions, Go behind the scenes of your favorite movies with on-set reporting
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
