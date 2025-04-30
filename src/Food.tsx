import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { slideItem } from "./js/menu";
function Food() {
  const [showFood, setShowFood] = useState(false);
  return (
    <div style={{ backgroundColor: "#F6EBEB" }}>
      <Header />
      <div
        onClick={() => {
          setShowFood(!showFood);
        }}
      >
        Food
      </div>
      {showFood &&
        slideItem.map((e, i) => {
          return (
            <div key={i}>
              <img src={e.src} />
              <div className="price">{e.price}</div>
              <div className="textslide">{e.content}</div>
            </div>
          );
        })}
      <Footer />
    </div>
  );
}
export default Food;
