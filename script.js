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
         <img src='tatami-cover.jpg' style='width:100%; max-width:320px; border-radius:10px;'>`
      ],

      ["Light Switches", `<a href="switch-guide.pdf" target="_blank">Open PDF Guide</a>`],
      ["Air Conditioner Remote", `<a href="airconditionerremote.pdf" target="_blank">Open PDF Guide</a>`],
      ["Hot Water Panel", "There are two hot water control panels in the house.<br><br>◆ <b>Large bathroom panel</b>: Located on the wall inside the large bathroom.<br>◆ <b>Kitchen panel</b>: Located on the wall in the kitchen.<br><br><b>Important notes:</b><br><br>◆ If the temperature is accidentally set to <b>60°C</b>, water may stop flowing properly.<br>◆ If the water is not getting warm, please check whether the unit is turned <b>ON</b>.<br>◆ The system may turn itself off automatically after a period of inactivity.<br><br><img src='hot-water-panel.png' style='width:100%; max-width:320px; border-radius:10px;'>"],
      ["Coffee Machine", "Press the ON button to start.<br><br><img src='coffeemachine.png' style='width:100%; max-width:320px; border-radius:10px;'>"],
      ["Trash Disposal", "Please separate domestic waste and cans/bottles into labeled bins.<br>If the bin is full, remove the garbage from the bin, place it outside the front door, and contact the staff for collection.<br><br><img src='garbage.png' style='width:100%; max-width:320px; border-radius:10px;'>"],
      ["Other Notes", "◆ <b>Please turn on the range hood when cooking to prevent cooking smoke from triggering the fire alarm and causing odors to linger in the house.<br><img src='range-hood.png' style='width:100%; max-width:320px; border-radius:10px;'><br><br>◆ <b>Please use the prepared outdoor slippers when going into the garden. Do not use the indoor slippers for the garden.<br><img src='garden-slippers.png' style='width:100%; max-width:320px; border-radius:10px;'>"],
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
         <img src='tatami-cover.jpg' style='width:100%; max-width:320px; border-radius:10px;'>`
      ],

      [
        "エアコン", `冷房24°C、暖房26°C推奨。<br>
       いきなり暖房30度にしたら、エアコンが作動出来ませんので、25度ぐらいをすすめて、以後1時間ごと1度でアップするようにお願いいたします。`
       ],
      
      ["給湯温度", "家の中に給湯操作パネルが2か所あります。<br><br>◆ <b>大きい浴室のパネル</b>：大きい浴室の壁にあります。大きい浴室のお湯を操作します。<br>◆ <b>キッチンのパネル</b>：キッチンの壁にあります。小さい浴室とキッチンシンクのお湯を操作します。<br><br><b>ご注意ください：</b><br><br>◆ 誤って <b>60℃</b> に設定すると、お湯が正常に出なくなることがあります。温度を下げてください。<br>◆ お湯がぬるい、または温かくならない場合は、電源が <b>ON</b> になっているかご確認ください。<br>◆ しばらく使用しないと、自動的に電源が切れることがあります。<br><br><img src='給湯温度.png' style='width:100%; max-width:320px; border-radius:10px;'>"],
      ["コーヒーマシン", "電源ボタンを押してください。<br><br><img src='コーヒーメーカー.png' style='width:100%; max-width:320px; border-radius:10px;'>"],
      ["ゴミ捨て方", "燃えるゴミ、缶・瓶類は指定のラベル付きゴミ箱に分別してください。ゴミ箱がいっぱいになった場合は、ゴミを取り出して玄関の外に置き、回収スタッフに連絡してください。<br><br><img src='garbage.png' style='width:100%; max-width:320px; border-radius:10px;'>"],
      ["その他注意", "◆ <b>料理をする際は換気扇（レンジフード）を必ずつけてください。料理の煙が火災報知器を作動させたり、家の中に臭いが染み付いたりするのを防ぐためです。<br><img src='range-hood.png' style='width:100%; max-width:320px; border-radius:10px;'><br><br>◆ <b>庭に出る際は用意してある外用スリッパを使用してください。室内用のスリッパを庭に出るのに使わないようご注意ください。<br><img src='garden-slippers.png' style='width:100%; max-width:320px; border-radius:10px;'>"],
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
         <img src='tatami-cover.jpg' style='width:100%; max-width:320px; border-radius:10px;'>`
      ],

      ["电灯开关", `<a href="切换指南.pdf" target="_blank">Open PDF Guide</a>`],
      ["空调调节",`<a href="空调.pdf" target="_blank">Open PDF Guide</a>` ],
      ["热水温度", "屋内有两个热水控制面板。<br><br>◆ <b>大浴室面板</b>：安装在大浴室墙上，用于控制大浴室的热水。<br>◆ <b>厨房面板</b>：安装在厨房墙上，用于控制小浴室和厨房水槽的热水。<br><br><b>请注意：</b><br><br>◆ 如果误设为 <b>60℃</b>，热水可能无法正常流出，请将温度调低。<br>◆ 如果水不够热或没有变热，请确认设备是否已开启（<b>ON</b>）。<br>◆ 若一段时间未使用，设备可能会自动关闭。<br><br><img src='热水温度.png' style='width:100%; max-width:320px; border-radius:10px;'>"],
      ["咖啡机", "按开按钮。<br><br><img src='咖啡机.png' style='width:100%; max-width:320px; border-radius:10px;'>"],
      ["如何丢垃圾", "请将可燃垃圾、罐子/瓶子分类放入有标签的垃圾桶。如果垃圾桶满了，请将垃圾取出，放在房子前门外面，并联系工作人员前来收取。<br><br><img src='garbage.png' style='width:100%; max-width:320px; border-radius:10px;'>"],
      ["其他注意事项", "◆ <b>做饭时请打开抽油烟机，以免油烟触发火灾报警器，并防止气味残留在屋内。<br><img src='range-hood.png' style='width:100%; max-width:320px; border-radius:10px;'><br><br>◆ <b>去花园时请穿准备好的室外拖鞋，注意不要穿室内拖鞋去花园。<br><img src='garden-slippers.png' style='width:100%; max-width:320px; border-radius:10px;'>"],
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
