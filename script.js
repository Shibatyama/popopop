const fortunes = {
  "牡羊座": { color:"#ff7675", love:["情熱的な展開！","素直さがカギ"], work:["挑戦が評価される","行動力◎"], money:["出費に注意","自己投資は吉"] },
  "牡牛座": { color:"#55efc4", love:["安定した関係","信頼が深まる"], work:["堅実さが評価","丁寧さ◎"], money:["貯金日和","無駄遣いNG"] },
  "双子座": { color:"#74b9ff", love:["会話が恋を呼ぶ","軽やかさ吉"], work:["情報収集が武器","連絡忘れ注意"], money:["臨時収入の予感","衝動買い注意"] },
  "蟹座": { color:"#a29bfe", love:["家庭運良好","優しさが吉"], work:["協力が鍵","助け合い◎"], money:["出費は控えめに","貯蓄チャンス"] },
  "獅子座": { color:"#fdcb6e", love:["注目される日","リーダーシップ吉"], work:["主導権を握る","発言力◎"], money:["交際費注意","投資は吉"] },
  "乙女座": { color:"#81ecec", love:["細やかな気配りが吉","整理整頓が愛を呼ぶ"], work:["計画性◎","書類整理吉"], money:["節約運◎","貯金日和"] },
  "天秤座": { color:"#fab1a0", love:["バランス良好","相手と歩調を合わせよう"], work:["交渉運良し","協調が吉"], money:["買い物運◎","浪費注意"] },
  "蠍座": { color:"#e17055", love:["深い愛情","直感が吉"], work:["集中力◎","分析力が評価"], money:["秘密の貯金吉","出費注意"] },
  "射手座": { color:"#00b894", love:["冒険心が恋を呼ぶ","軽やかさ吉"], work:["新しい挑戦吉","発想力◎"], money:["旅行費用吉","無駄遣い注意"] },
  "山羊座": { color:"#636e72", love:["真面目な愛情吉","信頼関係重視"], work:["努力が報われる","責任感◎"], money:["貯蓄運◎","堅実投資吉"] },
  "水瓶座": { color:"#0984e3", love:["自由な発想で吉","ユニークさが魅力"], work:["アイデアが光る","独創性◎"], money:["節約より投資吉","臨時収入◎"] },
  "魚座": { color:"#6c5ce7", love:["直感が恋を呼ぶ","優しさが吉"], work:["柔軟性◎","サポート役吉"], money:["貯金チャンス","浪費注意"] }
};

function drawFortune() {
  const birthday = document.getElementById("birthday").value;
  if (!birthday) { alert("誕生日を入力してね！"); return; }

  const sign = getZodiac(new Date(birthday));
  const data = fortunes[sign];

  const love = randomPick(data.love);
  const work = randomPick(data.work);
  const money = randomPick(data.money);

  const card = document.querySelector(".card");
  card.style.border = `4px solid ${data.color}`;
  card.style.boxShadow = `0 15px 35px ${data.color}88`; // カラーハイライト

  document.getElementById("result").innerHTML = `
    <div class="sign" style="color:${data.color}">${sign}</div>
    <div class="section">❤️ 恋愛運：${love}</div>
    <div class="section">💼 仕事運：${work}</div>
    <div class="section">💰 金運：${money}</div>
  `;

  addStars(5); // 星を5個ランダムに追加
}

function addStars(count) {
  const card = document.querySelector(".card");
  for (let i=0; i<count; i++) {
    const star = document.createElement("div");
    star.textContent = "⭐";
    star.classList.add("star");
    star.style.left = `${Math.random()*90}%`;
    star.style.top = `${Math.random()*90}%`;
    star.style.fontSize = `${10 + Math.random()*20}px`;
    card.appendChild(star);

    setTimeout(() => { 
      star.style.opacity = 1;
      star.style.top = `${Math.random()*50}%`;
    }, 50);

    setTimeout(() => { card.removeChild(star); }, 1500);
  }
}

// 背景に流れる星
function createBackgroundStars(num=100) {
  for (let i=0; i<num; i++) {
    const star = document.createElement("div");
    star.textContent = "⭐";
    star.classList.add("star");
    star.style.left = `${Math.random()*100}%`;
    star.style.top = `${Math.random()*100}%`;
    star.style.fontSize = `${5 + Math.random()*8}px`;
    star.style.opacity = Math.random();
    document.body.appendChild(star);

    animateStar(star);
  }
}

function animateStar(star) {
  const duration = 5000 + Math.random()*5000;
  const startTop = parseFloat(star.style.top);
  const endTop = -5;

  star.animate([
    { transform: `translateY(0px)` },
    { transform: `translateY(-${startTop + 10}vh)` }
  ], {
    duration: duration,
    iterations: Infinity,
    easing: 'linear'
  });
}

// 初回呼び出し
createBackgroundStars(80);
