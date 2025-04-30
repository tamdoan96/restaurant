import { useState } from "react";

function Text({
  urls,
  text1,
  text2,
  cssname,
  urlMap,
}: {
  urls: string;
  text1: string;
  text2: string;
  cssname: string;
  urlMap: string;
}) {
  return (
    <div className="tooltip">
      <div
        className="divs"
        onClick={() => {
          window.location.href = "/map/" + urlMap;
        }}
      >
        <div className={cssname} style={{ backgroundImage: `url(${urls}` }}>
          <h3>{text1}</h3>
          <p>{text2}</p>
        </div>
      </div>
      <span className="tooltiptext">Click here</span>
    </div>
  );
}

export default Text;
