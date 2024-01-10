import React from "react";
import ReactPlayer from "react-player";
import "./Aboutus.css";
import Navbar from "../../navbar/navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/Footer";

function Aboutus() {
  const notify = () => {
    toast.success("clicked from about us section ");
  };
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="video-box">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ruX4Le0kBng"
            height={300}
            width={400}
          />
        </div>

        <div className="content-box">
          <h2 class="heading-about">About us</h2>
          <p>
            Cardiovascular Health: Regular exercise helps improve heart health,
            reducing the risk of heart diseases and improving cardiovascular
            function. Weight Management: Gym workouts contribute to weight
            control by burning calories.
          </p>
          <button onClick={notify} className="learn-button">
            Learn more
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Aboutus;
