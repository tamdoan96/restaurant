import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { slideItem } from "./js/menu";
function Food() {
  const [showFood, setShowFood] = useState(false);
  const [showDrink, setShowDrink] = useState(false);
  const [listItem, setListItem] = useState({});
  useEffect(() => {
    let arr = {};
    slideItem.map((e: any, i) => {
      if (!arr[e.type]) {
        arr[e.type] = {};
      }
      if (!arr[e.type][e.subType]) {
        arr[e.type][e.subType] = [];
      }
      arr[e.type][e.subType].push(e);
    });
    setListItem(arr);
    console.log(arr);
  }, []);

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
        Object.keys(listItem["food"]).map((key) => {
          return (
            <div>
              <div className="keys">●●●●●●●{key}●●●●●●●</div>
              <div className="foods">
                {listItem["food"][key].map((e, i) => (
                  <div key={i} className="food">
                    <div className="menu-image">
                      <img src={e.src} />
                    </div>

                    <div className="menu-text">
                      <strong>
                        {e.title}
                        <br />
                        {e.price}
                      </strong>
                      <br />
                      {e.content?.split("\n").map((r, index) => {
                        return (
                          <p key={index} className="moji">
                            {r}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

      {showDrink &&
        Object.keys(listItem["drink"]).map((key) => {
          return (
            <div>
              <div className="keys">●●●●●●●{key}●●●●●●●</div>
              <div className="foods">
                {listItem["drink"][key].map((e, i) => (
                  <div key={i} className="food">
                    <div className="menu-image">
                      <img src={e.src} />
                    </div>

                    <div className="menu-text">
                      <strong>
                        {e.title}
                        <br />
                        {e.price}
                      </strong>
                      <br />
                      {e.content?.split("\n").map((r, index) => {
                        return (
                          <p key={index} className="moji">
                            {r}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

      <section className="beginner-app-install">
        <div className="beginner-app-install__inner">
          <img
            width="240"
            height="333"
            alt=""
            src="https://tblg.k-img.com/images/help/beginner/beginner_sp_image.png"
          />
          <div className="beginner-app-install__main">
            <h3 className="beginner-app-install__heading">
              より便利になったアプリで
              <br />
              快適にお店探し
            </h3>
            <p className="beginner-app-install__detail">
              クイックな現在地検索。検索が快適に
            </p>
            <p className="beginner-app-install__detail">
              予約も簡単。空席をスムーズに検索
            </p>
            <p className="beginner-app-install__detail">
              会員登録なし。すぐに利用開始
            </p>
            <div className="beginner-app-install__btn">
              <a
                className="app-install-btn app-install-btn--ios js-analytics"
                data-analytics-btn="/rst/help/beginner:footer_ios_btn"
                href="https://itunes.apple.com/jp/app/id763377066?mt=8"
                target="_blank"
              >
                <img
                  width="157"
                  height="50"
                  className="app-install-btn__img"
                  alt="APP Storeからダウンロード"
                  src="https://tblg.k-img.com/images/help/beginner/app_store_badge.png"
                />
              </a>
              <a
                className="app-install-btn js-analytics"
                data-analytics-btn="/rst/help/beginner:footer_android_btn"
                href="https://play.google.com/store/apps/details?id=com.kakaku.tabelog"
                target="_blank"
              >
                <img
                  width="168"
                  height="50"
                  className="app-install-btn__img"
                  alt="Google Playで手に入れよう"
                  src="https://tblg.k-img.com/images/help/beginner/google_play_badge.png"
                />
              </a>
            </div>
            <p className="beginner-app-install__text">
              アプリなら1ヶ月無料でランキング検索！
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default Food;
