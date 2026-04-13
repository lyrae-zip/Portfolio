    var root = document.querySelector(":root");

function load(){

    if (!document.cookie.includes("cookiesAccepted=true")) {
        showModalFor(document.getElementById("cookies"));

        num = Math.random(document.getElementsByClassName("theme").length - 1);
        num = Math.floor(num * document.getElementsByClassName("theme").length - 1);
        setTheme({currentTarget: document.getElementsByClassName("theme")[num]});
    } else {
        let theme = document.cookie.split("; ").find(row => row.startsWith("theme="));
        if (theme) {
            setTheme({currentTarget: document.getElementById(theme.split("=")[1])});
        } else {
            num = Math.random(document.getElementsByClassName("theme").length - 1);
            num = Math.floor(num * document.getElementsByClassName("theme").length - 1);
            setTheme({currentTarget: document.getElementsByClassName("theme")[num]});
        }
    }

    root.style.setProperty("--imageFade", "rgba(0, 0, 0, 0.0)");
}

function proceed() {
    if (document.getElementById("checked").checked) {
        document.cookie = "cookiesAccepted=true; max-age=31536000; path=/";
    }
    hideModal();
}


function removeSelected() {
    for(let i = 0; i < document.getElementsByClassName("theme").length; i++) {
        document.getElementsByClassName("theme")[i].classList.remove("selectedTheme");
    }
    const allItems = document.querySelectorAll("*");
    allItems.forEach(item => {
        item.classList.remove("butterdog");
    });
}

function rgbToHex(rgb) {
    const parts = rgb.match(/\d+/g);
    return "#" + parts.map(x => 
        parseInt(x).toString(16).padStart(2, "0")
    ).join("");
}

// https://gist.github.com/xenozauros/f6e185c8de2a04cdfecf?permalink_comment_id=4193442#gistcomment-4193442
function hexToCssHslAnalagous(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);

  r /= 255; g /= 255; b /= 255;

  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch(max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  let h1 = (h - 15 + 360) % 360;
  let h2 = (h + 15) % 360;

  return [
    `hsl(${h1}, ${s}%, ${l}%)`,
    `hsl(${h2}, ${s}%, ${l}%)`
  ];
}


function setTheme(event){
    removeSelected();

    var colourarray = [];
    colourarray.push(event.currentTarget.style.backgroundColor);

    const colours = event.currentTarget.querySelectorAll(".themeSample");
    
    const imageFade = document.querySelector(".selfie > div");
    if (imageFade) {
        imageFade.style.opacity = "0";
    }
    
    for (let i = 0; i < colours.length; i++) {
        if (i === 0){
            let baseColor = event.currentTarget.style.backgroundColor;

            let string = "linear-gradient(337deg, ";
            string += baseColor + " 0%, ";

            let hex = rgbToHex(baseColor);

            let [hsl1, hsl2] = hexToCssHslAnalagous(hex);

            string = "linear-gradient(337deg, ";
            string += hsl1 + " 0%, ";
            string += baseColor + " 50%, ";
            string += hsl2 + " 100%)";

            colourarray[0] = string;
        }
        colourarray.push(colours[i].style.backgroundColor);
    }
    event.currentTarget.classList.add("selectedTheme");
    root.style.setProperty("--backgroundColor", colourarray[0]);
    root.style.setProperty("--titleColor", colourarray[1]);
    root.style.setProperty("--gridColor", colourarray[2]);
    root.style.setProperty("--textColor", colourarray[3]);

    if (document.cookie.includes("cookiesAccepted=true")) {
        document.cookie = "theme=" + event.currentTarget.id + "; max-age=31536000; path=/";
    }
} 

function setbutterdog(){
    removeSelected();

    const imageFade = document.querySelector(".selfie > div");
    if (imageFade) {
        imageFade.style.opacity = "0";
    }

    const allItems = document.querySelectorAll("*");
    allItems.forEach(item => {
        item.classList.add("butterdog");
    });
} 

