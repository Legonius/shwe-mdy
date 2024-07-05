// Language Switching  Part
const lagnSwitch = document.getElementById("languageSwitcher");
lagnSwitch?.addEventListener("change", (event) => {
  const selectedLang = event.target.value;
  changeLanguage(selectedLang);
  if (event.target.value == "en") {
    document.getElementById("lang-img").src = "images/gb.webp";
    document.querySelector("#brand-box h6").style.fontSize = "1.28rem";
    document.querySelector("#brand-box h6").style.letterSpacing = "4.5px";
  } else {
    document.getElementById("lang-img").src = "images/myanmar.jpg";
    document.querySelector("#brand-box h6").style.fontSize = "1rem";
    document.querySelector("#brand-box h6").style.letterSpacing = "1px";
  }
});

function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang-key]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-lang-key");
    element.innerHTML = translations[lang][key];
  });
}
//gsap for hero image text
function heroGsap() {
  const quote = document.querySelector("#hero h2")?.innerText;
  const h2Line = document.querySelector("#hero h2");
  let splitQote = quote.split("");
  let finalQuote = "";
  splitQote.forEach((char) => {
    finalQuote += `<span class=stags>${char}</span>`;
  });
  h2Line.innerHTML = finalQuote;
  window.onload = function () {
    const hL = gsap.timeline();
    hL.from(".stags", {
      duration: 1.5,
      ease: "power2.out",
      x: -100,
      stagger: -0.08,
      opacity: 0,
    });
    hL.to(".stags", {
      color: "#ffbf00",
      stagger: 0.03,
    });
    hL.to(
      ".stags",
      {
        color: "#fff",
        stagger: 0.03,
        textShadow: "0 0 10px #ffbf00",
      },
      "-=0.5"
    );
    hL.from("#hero p", {
      opacity: 0,
      duration: 1,
    });
    hL.to("#hero p", {
      color: "#fff",
      textShadow: "0 0 10px black",
      duration: 4,
      repeat: -1,
      yoyo: true,
    });
    hL.from(
      "#scroll",
      {
        opacity: 0,
      },
      "-=3.5"
    );
    hL.to("#scroll i", {
      y: 20,
      yoyo: true,
      repeat: -1,
      duration: 1,
    });
  };
}
heroGsap();

//Number Counter
let activated = false;
const countMachine = () => {
  if (!activated) {
    activated = true;
    let counts = document.querySelectorAll(".nums span");
    counts.forEach((count) => {
      let startNum = 0;
      let endNum = count.dataset.val;
      let timer = Math.floor(3500 / endNum);

      function updateCount() {
        if (startNum < endNum) {
          startNum += 3;
          count.innerText = startNum;
        } else {
          count.innerText = endNum;
          clearInterval(counting);
        }
      }
      let counting = setInterval(updateCount, timer);
    });
  }
};

gsap.to("#nums-pad", {
  duration: 1.5,
  scrollTrigger: {
    trigger: "#nums-pad",
    start: "top 70%",
    end: "bottom top",
    onToggle: countMachine,
  },
});
