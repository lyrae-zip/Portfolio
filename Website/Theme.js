var root = document.querySelector(":root");

function load(){

    if (!document.cookie.includes("cookiesAccepted=true")) {
        showModalFor(document.getElementById("cookies"));

        num = Math.random(document.getElementsByClassName("theme").length);
        num = Math.floor(num * document.getElementsByClassName("theme").length);
        setTheme({currentTarget: document.getElementsByClassName("theme")[num]});
    } else {
        let theme = document.cookie.split("; ").find(row => row.startsWith("theme="));
        if (theme) {
            setTheme({currentTarget: document.getElementById(theme.split("=")[1])});
        } else {
            num = Math.random(document.getElementsByClassName("theme").length);
            num = Math.floor(num * document.getElementsByClassName("theme").length);
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
