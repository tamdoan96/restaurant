import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import OrderFood from "./UseMap";
function Map() {
  const params = useParams();
  return (
    <div style={{ backgroundColor: "#F6EBEB" }}>
      <Header />
      <div className="title">
        <h1>連絡</h1>
        <div className="welcome">
          <div className="welcome-1">
            <iframe
              src={"https://www.google.com/maps/embed?" + params.abc}
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="welcome-2">
            <OrderFood />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Map;
