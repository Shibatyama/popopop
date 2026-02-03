const colors = {
  "牡羊座": "#ff7675",
  "牡牛座": "#55efc4",
  "双子座": "#74b9ff",
  "蟹座": "#a29bfe",
  "獅子座": "#fdcb6e",
  "乙女座": "#81ecec",
  "天秤座": "#fab1a0",
  "蠍座": "#e17055",
  "射手座": "#00b894",
  "山羊座": "#636e72",
  "水瓶座": "#0984e3",
  "魚座": "#6c5ce7"
};

function showResult(sign, message, item) {
  document.querySelector(".card").style.border =
    `4px solid ${colors[sign]}`;

  resultDiv.innerHTML = `
    <div class="fortune" style="color:${colors[sign]}">${sign}</div>
    <p>${message}</p>
    <p>🎁 ラッキーアイテム：${item}</p>
  `;
}
