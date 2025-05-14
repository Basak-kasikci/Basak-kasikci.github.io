document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  let current = 0;

  function showSection(index) {
    sections.forEach((sec, i) => {
      sec.classList.toggle("active-section", i === index);
    });
  }

  showSection(current); // ilk gösterim

    // Klavye ok tuşlarına tepki verme
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {  // Sağ ok tuşu
      e.preventDefault();
      if (current < sections.length - 1) {
        current++;
        showSection(current);
      }
    } else if (e.key === "ArrowLeft") {  // Sol ok tuşu
      e.preventDefault();
      if (current > 0) {
        current--;
        showSection(current);
      }
    }
  });

  // Geri - İleri okları
  document.getElementById("nextBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    if (current < sections.length - 1) {
      current++;
      showSection(current);
    }
  });

  document.getElementById("prevBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    if (current > 0) {
      current--;
      showSection(current);
    }
  });

  // Kart büyüt/küçült
  window.toggleCard = function(clickedCard) {
    const allCards = document.querySelectorAll(".info-card");

    if (clickedCard.classList.contains("expanded")) {
      clickedCard.classList.remove("expanded");
      allCards.forEach(card => card.classList.remove("hide-card"));
      document.body.classList.remove("locked");
    } else {
      allCards.forEach(card => {
        if (card !== clickedCard) card.classList.add("hide-card");
      });
      clickedCard.classList.add("expanded");
      document.body.classList.add("locked");
    }
  }  
});


function toggleKarma(element, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const section = element.closest("section");
  if (!section || section.id !== "pazarlama-karmasi") return;

  const allCards = section.querySelectorAll('.kutu');
  const container = section.querySelector('.grid-4box');
  const title = section.querySelector('.center-title');

  const isAlreadyOpen = element.classList.contains('expanded');

  allCards.forEach(card => card.classList.remove('expanded'));
  container.classList.remove('expanded-view');
  title.classList.remove('hide-on-expand');

  if (!isAlreadyOpen) {
    element.classList.add('expanded');
    container.classList.add('expanded-view');
    title.classList.add('hide-on-expand');
  }
}

function expandSwot(card, event) {

  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const type = card.dataset.type;
  const detailPanel = document.getElementById("swotDetail");
  const allBlocks = document.querySelectorAll(".swot-block");

  // Paneli aç
  detailPanel.classList.add("open");

  // Tüm blokları gizle
  allBlocks.forEach(block => block.style.display = "none");

  // İlgili bloğu göster
  document.getElementById(`swot-${type}`).style.display = "block";
}

function closeSwot(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  document.getElementById("swotDetail").classList.remove("open");
}

document.addEventListener('click', function(e) {
  // Tıkladığın elemanın üstünde en yakın <summary> var mı diye bak
  const summary = e.target.closest('summary');
  if (!summary) return;      // summary değilse çık
  e.preventDefault();        // olası link navigasyonunu engelle
  e.stopPropagation();       // üstteki handler’lara iletme

  // <summary>'nin ebeveyni <details> olduğu için:
  const details = summary.parentElement;
  // natif toggle yerine manüel toggle
  details.open = !details.open;
});

document.addEventListener('DOMContentLoaded', () => {
  const circles = document.querySelectorAll('.bcg-circle');
  const tooltip = document.getElementById('tooltip');

  circles.forEach(circle => {
    circle.addEventListener('mouseenter', (e) => {
      const info = e.target.getAttribute('data-info');
      tooltip.innerText = info;
      tooltip.style.display = 'block';
    });

    circle.addEventListener('mousemove', (e) => {
      tooltip.style.left = `${e.pageX + 15}px`;
      tooltip.style.top = `${e.pageY + 15}px`;
    });

    circle.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
  });
});

function toggleRekabet(clickedBox) {
  const allBoxes = document.querySelectorAll('.rekabet-box');

  allBoxes.forEach(box => {
    if (box !== clickedBox) {
      box.classList.remove('active');
    }
  });

  clickedBox.classList.toggle('active');
}

const brandData = {
  "Kotex": "Kotex: Uluslararası marka, Türkiye’de orta-üst segmente hitap eder.",
  "Carrefour": "Carrefour Ped: Ekonomik market markası, düşük fiyatlı segmentte yer alır.",
  "Sleepy": "Sleepy: Doğal içerik ve çevreci yaklaşımla dikkat çeken marka.",
  "Migros": "Migros Ped: Zincir market ürünü, uygun fiyatlı alternatif sunar.",
  "Molped": "Molped: Geniş ürün gamı ile liderliğe yakın yerli marka.",
  "Orkid": "Orkid: Yüksek kaliteye sahip, pazarın lider markası.",
  "Beije": "Beije: Organik içerik ve sürdürülebilirlik odaklı premium marka.",
  "Natracare": "Natracare: Niş bir hedef kitleye hitap eden doğal içerikli premium marka."
};

function showBrandInfo(name) {
  const box = document.getElementById("brandInfo");
  document.getElementById("brandName").textContent = name;
  document.getElementById("brandDetails").textContent = brandData[name];
  box.style.display = "block";
}

function closeBrandInfo() {
  document.getElementById("brandInfo").style.display = "none";
}


const aksiyonVeri = {
  cephe: {
    img: "img94.png",
    metin: `
      <h4>Regl ile Tanışma Kampanyası</h4>
      <p>Genç kızlara özel tanışma kitleri ile regl tabusunu kırmak, özgüven kazandırmak amaçlanıyor. 
         Paketlerde bilgilendirici görseller ve motive edici cümleler bulunacak.</p>
    `
  },
  kusatma: {
    img: "img93.png",
    metin: `
      <h4>Orkid Purela – Kadın döngüsü doğa dengesinde</h4>
      <p>Organik ve sürdürülebilir içerikler ile hem doğaya hem kadın sağlığına saygı vurgusu yapılarak çevre imajı oluşturulması hedefleniyor.</p>
    `
  },
  gerilla: {
    img: "img95.png",
    metin: `
      <h4>Gerilla Saldırısı</h4>
      <p>Beklenmedik influencer iş birlikleri, sosyal medya çıkışları ve yaratıcı dijital kampanyalarla ses getirecek sürpriz stratejiler planlanıyor.</p>
    `
  }
};

function openAksiyon(tip) {
  const imgDiv = document.getElementById("aksiyonImages");
  const textDiv = document.getElementById("aksiyonMetin");

  imgDiv.innerHTML = "";
  textDiv.innerHTML = "";

  if (tip === "kanat") {
    imgDiv.innerHTML = `
      <img src="img91.png" alt="Anne-Kız 1">
      <img src="img92.png" alt="Anne-Kız 2">
    `;
    textDiv.innerHTML = `
      <h4>Anne-Kız Kampanyası</h4>
      <p>Regl ile tanışma sürecinde annelerle kurulan bağ üzerinden duygusal sadakat yaratılması hedefleniyor. 
         Farklı ambalaj tasarımları, podcast, video içerikler ve sosyal medya kampanyalarıyla desteklenerek benzersiz bir bağ kurulacak.</p>
    `;
  } else {
    const veri = aksiyonVeri[tip];
    imgDiv.innerHTML = `<img src="${veri.img}" alt="Aksiyon Görseli">`;
    textDiv.innerHTML = veri.metin;
  }

  document.getElementById("aksiyonDetay").style.display = "block";
}

function closeAksiyon() {
  document.getElementById("aksiyonDetay").style.display = "none";
}

