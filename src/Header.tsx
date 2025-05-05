import { useState } from "react";
import { useParams } from "react-router-dom";
function Header() {
  return (
    <div className="menu">
      <div
        className="name"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Smoke & Spice GROW’s
      </div>
      <div className="deader">
        <ul>
          <li>
            <a href="/">ホーム</a>
          </li>
          <li>
            <a href="/note">食べログについて</a>
          </li>
          <li>
            <a href="/food">メニュー</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
