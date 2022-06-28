import React from "react";
import "../App_L.css";

export default function SubPage() {
  const seoul = "se\noul";
  return (
    <div className="map">
      <div className="back"></div>
      <div className="dark"></div>
      <div className="seoul">
        <p className="seoul_p">{seoul}</p>
      </div>
      <div className="seoulLine"></div>
      {/* seoul */}
      <div className="redDot"></div>
    </div>
  );
}
