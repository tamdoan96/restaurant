import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import OrderFood from "./UseMap";
import { useState, useRef } from "react";

function NoteUs() {
  return (
    <div style={{ backgroundColor: "#F6EBEB" }}>
      <Header />
      <div className="note">
        <img src="./menu/textimg.png" />
      </div>
      <div className="nameTravel">
        <div className="dress">
          <img src="./menu/note/rice.png" />
          <br />
          <p>
            <i>
              「ごはんいこー！」の一言から生まれる笑顔がある、
              思い出がある、いい仕事がある、友情がある、夢がある。
              ひとりで、ふたりで、みんなで一緒に。
              お礼に、仲直りに、お祝いに、特に何もなくたって。
              「ごはんいこー！」の一言がもっと増えれば、
              その時間をもっと美味しく過ごせれば、
              世界はきっと、もっと幸せになる。
              食べログは20年間、そう信じて歩んできました。
              世の中がどんなに変わっても、 おいしいごはんは人を幸せにする。
              いままでも、これからもたくさんの素敵なお店で
              生まれ続けるずっと変わらない、その大切な時間を。
              食べログは応援していきたいのです。
            </i>
          </p>
        </div>
        <div className="dress">
          <img src="./menu/note/buffe.png" />
          <br />
          <p>
            <i>
              特別な人との、特別な日に。
              バースデー、記念日、とっておきのデート、大切な相手との会食。すべては、お店選びからはじまります。
              料理のクオリティはもちろん、雰囲気やサービスまで細やかにチェック。
              食べログが誇る膨大なデータベースから、利用シーンに合わせた理想のファインダイニングを厳選し、ご提案します。
              最上の舞台で、最高のひとときを。
            </i>
          </p>
        </div>
        <div className="dress">
          <img src="./menu/note/nomikai.jpg" />
          <br />
          <p>
            <i>
              社会人になると歓送迎会や期末の打ち上げなど「飲み会」が増える傾向があります。
              飲み会の幹事はやることが多くて大変……というイメージがあると思いますが、実は若手社員が自己アピールをするチャンス！飲み会を成功させれば社内の信頼や評価を得られるという大きなメリットがあります。
              今回は、これさえ読めば完璧な飲み会を段取りすることができる「保存版・幹事マニュアル」をご紹介します！
            </i>
          </p>
        </div>
      </div>
      <Footer />;
    </div>
  );
}

export default NoteUs;
