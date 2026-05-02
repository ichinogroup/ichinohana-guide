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
      [
  "House Rules",
`<div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; line-height: 1.6;">

  <h2 style="color: #1a3c6e; text-align: center; border-bottom: 3px solid #1a3c6e; padding-bottom: 10px;">
    Ichinohana House Rules
  </h2>

  <strong>Basic Rules</strong><br><br>

  • <strong>Check-in:</strong> 16:00 | <strong>Check-out:</strong> 10:00 <strong>(strictly enforced)</strong><br>
  • <strong>Smoking is strictly prohibited</strong> throughout the entire facility (inside, garden & entrance).<br><br>

  <strong>A. Regarding Use of the Facility</strong><br><br>

  1. <strong>No shoes</strong> inside the house. Do not roll wheeled suitcases on tatami mats.<br>
  2. Keep the entrance door <strong>locked at all times</strong>.<br>
  3. <strong>Smoking is completely prohibited.</strong> Penalty: <strong>¥30,000</strong> cleaning fee if detected inside.<br>
  4. Only registered guests allowed. <strong>¥7,000 penalty per extra/unauthorized person</strong>.<br>
  5. Do not use fire, candles or open flame for heating/cooking without permission. Use only provided utensils and wash dishes after use.<br>
  6. No business activities, parties, or events without permission.<br>
  7. Keep quiet, especially between <strong>22:00 – 07:00</strong>.<br>
  8. Do not remove any furnishings, fixtures or items (toilet paper, towels, etc.).<br>
  9. Use furniture and appliances with care.<br>
    • Full replacement cost for damage.<br>
    • <strong>Special fee: ¥50,000</strong> for damage due to vomiting.<br>
  10. Do not move furniture or modify the facility without permission.<br>
  11. Sort garbage correctly (Burnable / Non-burnable / Cans・Bottles・PET). Notify us when bins are full.<br>
  12. Long-term stays do not grant any legal residency rights.<br><br>

  <strong>B. When Going Out</strong><br><br>

  • Turn off all appliances (<strong>Air conditioner, TV, lights</strong>).<br>
  • <strong>Lock all doors and windows</strong> before leaving.<br>
  • Do not leave minors alone without parental permission.<br><br>

  <strong>C. Front Door Keypad</strong><br><br>

  • Always lock the facility when leaving.<br>
  • Do not share the keypad code with anyone other than registered guests.

</div>`
        ],
      ["Laundry", "Please use the QR codes near the washing machine for instructions."]
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
      [
      "ハウスルール",
`<div style="font-family: Arial, sans-serif; max-width: 850px; margin: 0 auto; line-height: 1.7;">

  <h2 style="color: #1a3c6e; text-align: center; border-bottom: 3px solid #1a3c6e; padding-bottom: 12px;">
    一花（いちはな）ハウスルール
  </h2>

  <strong>基本ルール</strong><br><br>

  • <strong>チェックイン：</strong>16:00　｜　<strong>チェックアウト：</strong>10:00　<strong>（厳守）</strong><br>
  • 施設内（建物内・庭・玄関周り含む）<strong>全面禁煙</strong>です。<br><br>

  <strong>A. 施設のご利用について</strong><br><br>

  1. 施設内は<strong>土足厳禁</strong>です。キャリーケース等の車輪は畳を傷めないようご注意ください。<br>
  2. 玄関ドアは常に<strong>施錠</strong>してください。<br>
  3. 館内禁煙です。館内で喫煙が発覚した場合、<strong>清掃費30,000円</strong>を申し受けます。<br>
  4. ご予約された方のみご宿泊いただけます。追加・無断宿泊は<strong>1名につき7,000円</strong>の追加料金を申し受けます。<br>
  5. 許可なく火気・ろうそく等の使用は禁止です。調理は当施設の器具のみご使用いただき、使用後は食器類を洗浄してください。<br>
  6. ビジネス利用・パーティー等のイベントは禁止です。<br>
  7. 特に<strong>22:00～07:00</strong>は静かにしてください。<br>
  8. 備品・設備・備え付けの物品（トイレットペーパー等）を持ち出さないでください。<br>
  9. 家具・家電・寝具等は大切にご使用ください。<br>
    ・破損・汚損時は新品交換相当額を請求いたします。<br>
    ・嘔吐等による汚損は<strong>特別料金50,000円</strong>を申し受けます。<br>
  10. 家具の移動や施設の改造・変更は禁止です。<br>
  11. ゴミは「燃えるゴミ」「燃えないゴミ」「缶・瓶・ペットボトル」に分別してください。ゴミ箱が満杯になったらお知らせください。<br>
  12. 長期滞在の場合でも、法的居住権は発生しません。<br><br>

  <strong>B. 外出される際</strong><br><br>

  • エアコン・テレビ・照明などの家電を<strong>必ず消してください</strong>。<br>
  • ドア・窓をすべて<strong>施錠</strong>してください。<br>
  • 未成年者のみのお留守番は禁止です。<br><br>

  <strong>C. 玄関ドアのキーパッドについて</strong><br><br>

  • 外出の際は必ず施錠してください。<br>
  • キーパッドの暗証番号は<strong>予約者以外に教えない</strong>でください。

</div>`
        ],
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
      [
      "房屋规则",
`<div style="font-family: Arial, sans-serif; max-width: 850px; margin: 0 auto; line-height: 1.8;">

  <h2 style="color: #1a3c6e; text-align: center; border-bottom: 3px solid #1a3c6e; padding-bottom: 12px;">
    一花民宿 房屋守则
  </h2>

  <strong>基本规则</strong><br><br>

  • <strong>入住时间：</strong>16:00 | <strong>退房时间：</strong>10:00 <strong>（严格遵守）</strong><br>
  • 设施内<strong>全面禁止吸烟</strong>（室内、庭院、入口处均禁止）。<br><br>

  <strong>1. 设施使用规定</strong><br><br>

  1. 室内<strong>严禁穿鞋</strong>。请勿在榻榻米上拖拉带轮行李箱。<br>
  2. 玄关门请随时保持<strong>上锁</strong>。<br>
  3. 馆内全面禁烟。若在室内吸烟，将收取<strong>¥30,000</strong>清洁费。<br>
  4. 仅限已登记的预约客人入住。额外或未经许可的客人，每人收取<strong>¥7,000</strong>罚款。<br>
  5. 未经许可禁止使用明火、蜡烛等。请使用本设施提供的厨具，烹饪后请清洗餐具。<br>
  6. 禁止用于商业活动、展会或举办派对等。<br>
  7. 请保持安静，尤其<strong>22:00 至 07:00</strong>期间。<br>
  8. 不得带走任何室内家具、设备或物品（例如卫生纸、毛巾等）。<br>
  9. 请爱护家具、家电及床上用品。<br>
    • 损坏需按新品价格赔偿。<br>
    • 因呕吐等造成的污损，收取<strong>特别费用 ¥50,000</strong>。<br>
  10. 未经许可不得移动家具或对设施进行改动。<br>
  11. 垃圾请分类投放（可燃垃圾 / 不可燃垃圾 / 罐瓶・塑料瓶）。垃圾桶满时请通知我们。<br>
  12. 长期住宿不产生任何法律居住权。<br><br>

  <strong>2. 外出时</strong><br><br>

  • 请关闭所有家电（<strong>空调、电视、灯光</strong>）。<br>
  • <strong>锁好所有门窗</strong>。<br>
  • 未成年人不得单独留宿。<br><br>

  <strong>3. 前门电子密码锁</strong><br><br>

  • 外出时请务必锁好设施。<br>
  • 密码仅限登记客人使用，请勿告知他人。

</div>`
        ],
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
