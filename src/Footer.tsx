import { useState } from "react";
import { useParams } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="restaurant">
        <strong>
          <a href="/">COMPANY</a>
        </strong>
      </div>
      <div className="restaurant">
        <strong>CONTACT US</strong>
      </div>
      <div className="restaurant">
        <a href="https://www.facebook.com/growHCMC?utm_source=chatgpt.com">
          <img src="../image/fabo.png" />
        </a>
        <a href="https://www.youtube.com/watch?v=wZGS7Zi6avc">
          <img src="../image/yot.png" />
        </a>
        <a href="https://www.instagram.com/grow.restaurant/">
          <img src="../image/inta.jpg" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
