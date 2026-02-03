const fortunes = {
  "牡羊座": {
    color: "#ff7675",
    love: ["情熱的な展開！", "素直さがカギ"],
    work: ["挑戦が評価される", "行動力◎"],
    money: ["出費に注意", "自己投資は吉"]
  },
  "牡牛座": {
    color: "#55efc4",
    love: ["安定した関係", "信頼が深まる"],
    work: ["堅実さが評価", "丁寧さ◎"],
    money: ["貯金日和", "無駄遣いNG"]
  },
  "双子座": {
    color: "#74b9ff",
    love: ["会話が恋を呼ぶ", "軽やかさ吉"],
    work: ["情報収集が武器", "連絡忘れ注意"],
    money: ["臨時収入の予感", "衝動買い注意"]
  }
  // 👉 他の星座も同じ形式で追加できる
};

function drawFortune() {
  const birthday = document.getElementById("birthday").value;
  if (!birthday) {
    alert("誕生日を入力してね！");
    return;
  }

  const sign = getZodiac(new Date(birthday));
  const data = fortunes[sign];

  const love = randomPick(data.love);
  const work = randomPick(data.work);
  const money = randomPick(data.money);

  const card = document.querySelector(".card");
  card.style.border = `4px solid ${data.color}`;

  document.getElementById("result").innerHTML = `
    <div class="sign" style="color:${data.color}">${sign}</div>

    <div class="section">❤️ 恋愛運：${love}</div>
    <div class="section">💼 仕事運：${work}</div>
    <div class="section">💰 金運：${money}</div>
  `;
}

function randomPick(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getZodiac(date) {
  const m = date.getMonth() + 1;
  const d = date.getDate();

  if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) return "牡羊座";
  if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) return "牡牛座";
  if ((m === 5 && d >= 21) || (m === 6 && d <= 21)) return "双子座";
  if ((m === 6 && d >= 22) || (m === 7 && d <= 22)) return "蟹座";
  if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) return "獅子座";
  if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) return "乙女座";
  if ((m === 9 && d >= 23) || (m === 10 && d <= 23)) return "天秤座";
  if ((m === 10 && d >= 24) || (m === 11 && d <= 22)) return "蠍座";
  if ((m === 11 && d >= 23) || (m === 12 && d <= 21)) return "射手座";
  if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) return "山羊座";
  if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) return "水瓶座";
  return "魚座";
}
