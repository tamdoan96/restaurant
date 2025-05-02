import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { slideItem } from "./js/menu";
function Food() {
  const [showFood, setShowFood] = useState(false);
  const [showDrink, setShowDrink] = useState(false);
  return (
    <div style={{ backgroundColor: "#F6EBEB" }}>
      <Header />
      <div
        className="creatton"
        onClick={() => {
          setShowFood(!showFood);
          // setShowDrink(showFood);
        }}
      >
        Food
      </div>
      <div
        className="creatton"
        onClick={() => {
          // setShowFood(showDrink);
          setShowDrink(!showDrink);
        }}
      >
        Drink
      </div>
      {showFood &&
        slideItem
          .filter((e) => e.type == "food")
          .map((e, i) => {
            return (
              <div className="creatton" key={i}>
                <img src={e.src} />

                <div className="price">{e.price}</div>
                <div className="textslide">
                  {e.content.split("、").map((f, j) => {
                    return <p key={j}>{f.replace("、", "")}</p>;
                  })}
                </div>
              </div>
            );
          })}

      {showDrink &&
        slideItem
          .filter((e) => e.type == "drink")
          .map((e, i) => {
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
