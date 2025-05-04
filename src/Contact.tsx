import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import OrderFood from "./UseMap";
import { useState, useRef } from "react";

function ContactUs() {
  const [userMail, setUserMail] = useState("");
  const [userName, setUserName] = useState("");
  const [userComment, setUserComment] = useState("");
  const [mealTime, setMealTime] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const toastRef = useRef<HTMLDivElement>(null);
  const handleOrder = (type: string) => {
    const newErrors: { [key: string]: string } = {};

    if (!userMail.trim()) newErrors.userMail = "! This is a required question";
    if (!userName.trim()) newErrors.userName = "! This is a required question";
    if (!userComment.trim())
      newErrors.userComment = "! This is a required question";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      if (type == "button" && toastRef.current) {
        toastRef.current.style.visibility = "visible";
        setTimeout(() => {
          if (toastRef.current) toastRef.current.style.visibility = "hidden";
        }, 6000);
      }
    }
  };

  return (
    <div style={{ backgroundColor: "#F6EBEB" }}>
      <Header />

      <div className="contact1">
        <h2>Smoke & Spice GROW’s</h2>
        <h3>Restaurants 2025</h3>
      </div>
      <div className="contact4">
        <h2>Contact</h2>
        <p>以下フォームに必要事項をご入力の上、お問い合わせください。</p>
        <p>Please enter the required information in the form below.</p>
        <p>
          <span style={{ color: "red" }}>*Indicates required question</span>
        </p>
      </div>
      <div className="contact2">
        Email<span style={{ color: "red" }}>*</span>：
        <br />
        <br />
        <input
          type="email"
          value={userMail}
          placeholder="Your mail"
          onChange={(e) => setUserMail(e.target.value)}
        />
        {errors.userMail && <div className="error-text">{errors.userMail}</div>}
      </div>
      <div className="contact2">
        Name <span style={{ color: "red" }}>*</span>：
        <br />
        <br />
        <input
          type="text"
          value={userName}
          placeholder="Your answwer"
          onChange={(e) => setUserName(e.target.value)}
        />
        {errors.userName && <div className="error-text">{errors.userName}</div>}
      </div>
      <div className="contact2">
        Comment here<span style={{ color: "red" }}>*</span>：
        <br />
        <br />
        <input
          type="text"
          value={userComment}
          placeholder="Your answwer"
          onChange={(e) => setUserComment(e.target.value)}
        />
        {errors.userComment && (
          <div className="error-text">{errors.userComment}</div>
        )}
      </div>
      <div className="contact3">
        <p>
          Handling of personal information / 「個人情報の取り扱い」について * If
          you agree to our to privacy policy, please select “agree” and press
          send / 当社プライバシーポリシー
          に同意いただける方は「同意する」にチェックを付け「送信」ボタンをクリックしてください。
        </p>
        <p>
          <input type="checkbox" onClick={() => handleOrder("")} />
          Agree / 同意する
        </p>
      </div>
      <div style={{ marginTop: "16px" }}>
        <button onClick={() => handleOrder("button")} className="btn">
          送信
        </button>
      </div>
      <div
        ref={toastRef}
        style={{
          visibility: "hidden",
          minWidth: "250px",
          backgroundColor: "#b0151b",
          color: "#ffffff",
          textAlign: "center",
          borderRadius: "8px",
          padding: "16px",
          position: "fixed",
          zIndex: 1,
          left: "50%",
          bottom: "60px",
          transform: "translateX(-50%)",
          fontSize: "18px",
        }}
      >
        お問い合わせが送信されました。ありがとうございます。
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
