import { useState, useRef } from "react";

function OrderFood() {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [mealTime, setMealTime] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const toastRef = useRef<HTMLDivElement>(null);

  const handleOrder = () => {
    const newErrors: { [key: string]: string } = {};

    if (!userName.trim()) newErrors.userName = "お名前を入力してください。";
    if (!userPhone.trim()) newErrors.userPhone = "電話番号を入力してください。";
    if (!date.trim()) newErrors.date = "日付を選択してください。";
    if (!quantity.trim() || parseInt(quantity) <= 0)
      newErrors.quantity = "人数を入力してください。";
    if (!mealTime.trim()) newErrors.mealTime = "食事時を選択してください。";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      if (toastRef.current) {
        toastRef.current.style.visibility = "visible";
        setTimeout(() => {
          if (toastRef.current) toastRef.current.style.visibility = "hidden";
        }, 6000);
      }
    }
  };

  return (
    <div>
      <div className="welcome-3">
        お客様の名前：
        <input
          type="text"
          value={userName}
          placeholder="お客様のお名前を入力してください"
          onChange={(e) => setUserName(e.target.value)}
        />
        {errors.userName && (
          <div className="error-message">{errors.userName}</div>
        )}
        電話番号：
        <input
          type="text"
          value={userPhone}
          placeholder="お客様の電話番号を入力してください"
          onChange={(e) => setUserPhone(e.target.value)}
        />
        {errors.userPhone && (
          <div className="error-message">{errors.userPhone}</div>
        )}
        日付を選択してください：
        <input
          type="date"
          value={date}
          placeholder="日付を入力してください"
          onChange={(e) => setDate(e.target.value)}
          min="2024-01-01"
          max="2024-12-01"
        />
        {errors.date && <div className="error-message">{errors.date}</div>}
        人数：
        <input
          type="number"
          min="1"
          max="10"
          value={quantity}
          placeholder="人数を入力してください"
          onChange={(e) => setQuantity(e.target.value)}
        />
        {errors.quantity && (
          <div className="error-message">{errors.quantity}</div>
        )}
        食事時：
        <br />
        <input
          type="radio"
          id="va1"
          name="meal"
          value="1"
          checked={mealTime === "1"}
          onChange={(e) => setMealTime(e.target.value)}
        />
        <label htmlFor="va1">ランチ</label>
        <input
          type="radio"
          id="va2"
          name="meal"
          value="2"
          checked={mealTime === "2"}
          onChange={(e) => setMealTime(e.target.value)}
        />
        <label htmlFor="va2">ディナー</label>
        {errors.mealTime && (
          <div className="error-message">{errors.mealTime}</div>
        )}
      </div>
      <div style={{ marginTop: "16px" }}>
        <button onClick={handleOrder}>予約</button>
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
          ご予約
          <br />
          ありがとうございます！
        </div>
      </div>
    </div>
  );
}

export default OrderFood;
