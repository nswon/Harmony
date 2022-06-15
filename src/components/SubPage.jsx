import React from "react";
import "../App_L.css";
import Video from "../main1_L.mov";

export default function SubPage() {
  return (
    <div>
      <div class="jb-box">
        <video controls autoPlay loop muted>
          <source src={Video} type="video/mp4"></source>
        </video>
        <div class="jb-text">
          <p>Lorem Ipsum Door</p>
        </div>
      </div>
    </div>
  );
}
