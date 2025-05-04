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
      <div className="hr"></div>
      <div className="t1">
        <h3>店舗情報（詳細）</h3>
        <table cellPadding={0} cellSpacing={0}>
          <tr>
            <th>店名</th>
            <td>Smoke & Spice GROW’s（グロウズ）</td>
          </tr>
          <tr>
            <th>予約・ お問い合わせ</th>
            <td>050-5589-5733</td>
          </tr>
          <tr>
            <th>営業時間</th>
            <td>
              月・火・水・木・金・土・祝日 19:00 - 07:00 日 定休日 ■ 営業時間
              【定休日】
              <br />
              日曜日※翌日が祝日の場合は営業し、翌月曜日にお休み頂きます。
              <br />
              ※営業時間外貸切可（15：00～貸切ＯＫ。）
            </td>
          </tr>
          <tr>
            <th>支払い方法</th>
            <td>
              カード可 <br /> （VISA、Master、JCB、AMEX、Diners） <br />
              電子マネー不可
            </td>
          </tr>
          <tr>
            <th>サービス料・ チャージ</th>
            <td>チャージ料￥300（スナック付）</td>
          </tr>
          <tr>
            <th>禁煙・喫煙</th>
            <td>
              全席喫煙可
              2020年4月1日より受動喫煙対策に関する法律（改正健康増進法）が施行されており、
              <br />{" "}
              最新の情報と異なる場合がございますので、ご来店前に店舗にご確認ください。
            </td>
          </tr>
        </table>
      </div>

      <Footer />
    </div>
  );
}
export default Map;
