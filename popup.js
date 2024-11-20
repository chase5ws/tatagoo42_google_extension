// 電商網站列表，新增 VIP 現金回饋數據
const ecommerceLinks = [
    { name: "PChome 24h", url: "https://www.pchome.com.tw", img: "icon.png", cashback: "1%", vipCashback: "2%" },
    { name: "Booking.com", url: "https://www.booking.com", img: "icon.png", cashback: "6%", vipCashback: "8%" },
    { name: "Agoda", url: "https://www.agoda.com", img: "icon.png", cashback: "7%", vipCashback: "10%" },
    { name: "天貓", url: "https://www.tmall.com", img: "icon.png", cashback: "11%", vipCashback: "15%" },
    { name: "淘寶", url: "https://www.taobao.com", img: "icon.png", cashback: "11%", vipCashback: "15%" },
    { name: "Yahoo購物", url: "https://tw.buy.yahoo.com", img: "icon.png", cashback: "8%", vipCashback: "10%" }
];

// 動態生成卡片
const linksContainer = document.getElementById("links-container");

ecommerceLinks.forEach(link => {
    const card = document.createElement("div");
    card.className = "card";

    const imgElement = document.createElement("img");
    imgElement.src = link.img;
    imgElement.alt = link.name;
    card.appendChild(imgElement);

    const linkElement = document.createElement("a");
    linkElement.href = link.url;
    linkElement.target = "_blank";
    linkElement.textContent = link.name;
    card.appendChild(linkElement);

    const percentageElement = document.createElement("div");
    percentageElement.className = "percentage";
    percentageElement.textContent = `現金回饋 ${link.cashback} `;
    card.appendChild(percentageElement);

    // 新增 VIP 現金回饋行
    const vipElement = document.createElement("div");
    vipElement.className = "vip-percentage";
    vipElement.textContent = `VIP回饋 ${link.vipCashback}`;
    card.appendChild(vipElement);

    linksContainer.appendChild(card);
});
