import { useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./css/App.css";
import Image from "./Image";
import Text from "./Text";
import Header from "./Header";
import Footer from "./Footer";

// Try to add one comment

function App() {
  let slideIndex: number = 0;
  function CurrentSlide(num: number) {
    slideIndex = num;
    showSlides();
  }
  function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log(slideIndex, slides[slideIndex], slides);
    (slides[slideIndex] as HTMLElement).style.display = "block";
    dots[slideIndex].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
      slideIndex = 0;
    }
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 5000);
  }
  //mặc định hiển thị slide đầu tiên
  useEffect(() => {
    showSlides();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Image height={"100%"} url={"image/anhnen1.jpg"} text="" />
      <Text
        urls={"image/div4.jpg"}
        text1={"4 Chome-1 Minamisenba, Chuo Ward, Osaka"}
        text2={"092-752-8292"}
        cssname="texts1"
        urlMap={
          "pb=!1m18!1m12!1m3!1d3280.009157776749!2d135.4993214756592!3d34.675599872922804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e71382a92f17%3A0x86cf08b6589f6479!2s4%20Chome-1%20Minamisenba%2C%20Chuo%20Ward%2C%20Osaka%2C%20542-0081%2C%20Japan!5e0!3m2!1sen!2s!4v1714375821230!5m2!1sen!2s"
        }
      />
      <Text
        urls={"image/div3.avif"}
        text1={"11-1 Kaminochonishi, Kishiwada, Osaka 596-0048F"}
        text2={"072-437-2801"}
        cssname="texts2"
        urlMap={
          "pb=!1m18!1m12!1m3!1d3285.09132962421!2d135.37133437565542!3d34.46278219793496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000d2e2f2d3a7a5%3A0x7340bd541e452cb8!2s11-1%20Kaminochonishi%2C%20Kishiwada%2C%20Osaka%20596-0048%2C%20Japan!5e0!3m2!1sen!2s!4v1714376887201!5m2!1sen!2s"
        }
      />

      <div className="content">
        <div className="slinemenu">
          <h2>お店のこだわり</h2>
          <div className="mySlides fade">
            <img src="./image/anh1.jpg" />
            <div className="textslide">自慢の燻製盛り合わせ</div>
          </div>
          <div className="mySlides fade">
            <img src="./image/anh2.jpg" />
            <div className="textslide">シャトーブリアンブランド肉</div>
          </div>
          <div className="mySlides fade">
            <img src="./image/anh3.jpg" />
            <div className="textslide">200種類は常備している洋酒の数々</div>
          </div>
          <div className="mySlides fade">
            <img src="./image/anh4.jpg" />
            <div className="textslide">
              木の温もりを感じる落ち着いた大人の空間
            </div>
          </div>
          <br />

          <div style={{ textAlign: "center" }}>
            <span
              className="dot"
              onClick={() => {
                CurrentSlide(0);
              }}
            ></span>
            <span
              className="dot"
              onClick={() => {
                CurrentSlide(1);
              }}
            ></span>
            <span
              className="dot"
              onClick={() => {
                CurrentSlide(2);
              }}
            ></span>
            <span
              className="dot"
              onClick={() => {
                CurrentSlide(3);
              }}
            ></span>
          </div>
        </div>
        <div className="restext">
          <h2 style={{ color: "#31473A" }}>
            自慢の燻製と多彩な肉料理を中心に博多のグルメ人を舌鼓する17年目の大人の隠れバー‼
          </h2>
          <p>
            重厚な木製の扉を開けると広がる空間。一枚板のロングカウンター越しに現れる洋酒の数々はウイスキーを中心に約200種類‼これらのお酒を支えるのは名物の燻製料理。様々なスパイスとハーブを使って、しっかりと味付けして燻し、時間を掛けて熟成させる事によって深みのある味わいを作り出してます。更には、多彩な肉料理にサラダ、ピザ、パスタにアヒージョetc...ダイニングとして、バーとして記憶しておきたい一件です‼
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
