// script.js

const data = {
  en: {
    title: "House Manual",
    subtitle: "Find the information you need",
    items: [
      ["Wifi", "ID: ichinohana1<br>PW: 20241010"],

      [
        "Before Entering The House",
        `Please remove your shoes before entering.<br>
         Use the suitcase wheel covers to protect the tatami floor.<br><br>
         <img src='/ichinohana-guide/images/tatami-cover.jpg' style='width:100%; max-width:320px; border-radius:10px;'>"
      ],

      ["Light Switches", "Main switches are near the entrance and beside the bed."],
      ["Air Conditioner Remote", "Use the remote control. Cooling: 24°C, Heating: 26°C recommended."],
      ["Hot Water Panel", "Adjust the central water temperature carefully. Default is 42°C."],
      ["Coffee Machine", "Fill water tank, insert capsule, and press the start button."],
      ["Trash Disposal", "Separate burnable, plastic, and cans/bottles into labeled bins."],
      ["Other Notes", "Do not smoke indoors. Please lock doors when leaving."],
      ["House Rules", "No parties, no pets, and respect neighbors."],
      ["Laundry", "Please use the QR codes near the washing machine and dryer for instructions."]
    ]
  },

  jp: {
    title: "宿泊案内",
    subtitle: "必要な情報をお選びください",
    items: [
      ["Wifi", "ID: ichinohana1<br>PW: 20241010"],

      [
        "入室前",
        `入室前に靴をお脱ぎください。<br>
         畳を保護するため、スーツケースの車輪カバーをご使用ください。<br><br>
         <img src='/ichinohana-guide/images/tatami-cover.jpg' style='width:100%; max-width:320px; border-radius:10px;'>"
      ],

      ["電気スイッチ", "メインスイッチは入口とベッド横にあります。"],
      ["エアコン", "リモコンをご利用ください。冷房24°C、暖房26°C推奨。"],
      ["給湯温度", "中央給湯温度を調整できます。標準は42°Cです。"],
      ["コーヒーマシン", "水を入れ、カプセルをセットし、開始ボタンを押してください。"],
      ["ゴミ捨て方", "燃えるゴミ、プラスチック、缶・瓶を分別してください。"],
      ["その他注意", "室内禁煙。外出時は施錠してください。"],
      ["ハウスルール", "パーティー禁止、ペット禁止、近隣に配慮してください。"],
      ["洗濯機・乾燥機", "近くのQRコードを読み取って使い方をご確認ください。"]
    ]
  },

  cn: {
    title: "民宿指南",
    subtitle: "请选择您需要的信息",
    items: [
      ["Wifi", "ID: ichinohana1<br>PW: 20241010"],

      [
        "进入房屋前",
        `进入房间前请脱鞋。<br>
         为了保护榻榻米，请使用行李箱轮套。<br><br>
         <img src='/ichinohana-guide/images/tatami-cover.jpg' style='width:100%; max-width:320px; border-radius:10px;'>"
      ],

      ["电灯开关", "主开关在入口和床边。"],
      ["空调调节", "使用遥控器。建议制冷24°C，制热26°C。"],
      ["热水温度", "可调整中央热水器，默认42°C。"],
      ["咖啡机", "加水，放入胶囊，然后按启动按钮。"],
      ["如何丢垃圾", "请分类：可燃垃圾、塑料、瓶罐。"],
      ["其他注意事项", "室内禁止吸烟，离开时请锁门。"],
      ["房屋规则", "禁止聚会，禁止宠物，请尊重邻居。"],
      ["洗衣机和烘干机", "请扫描附近的二维码查看使用说明。"]
    ]
  }
};

function showGuide(lang) {
  document.getElementById("welcomePage").classList.remove("active");
  document.getElementById("guidePage").classList.add("active");

  document.getElementById("guideTitle").innerText = data[lang].title;
  document.getElementById("guideSubtitle").innerText = data[lang].subtitle;

  const menu = document.getElementById("menuContainer");
  menu.innerHTML = "";

  data[lang].items.forEach(item => {
    const box = document.createElement("div");
    box.className = "menu-item";

    box.innerHTML = `
      <div class="menu-title">${item[0]}</div>
      <div class="menu-content">${item[1]}</div>
    `;

    box.querySelector(".menu-title").onclick = () => {
      const content = box.querySelector(".menu-content");
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    };

    menu.appendChild(box);
  });
}

function goBack() {
  document.getElementById("guidePage").classList.remove("active");
  document.getElementById("welcomePage").classList.add("active");
}
