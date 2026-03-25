var root = document.querySelector(":root");


var mint = document.getElementById("mint");
function setMintTheme() {
    var mintTitle = "#05385b";
    var mintGrid = "#379683";
    var mintBackground = "#5cdb95";
    var mintText = "#edf5e1";
    root.style.setProperty("--titleColor", mintTitle);
    root.style.setProperty("--gridColor", mintGrid);
    root.style.setProperty("--backgroundColor", mintBackground);
    root.style.setProperty("--textColor", mintText);
}

var wine = document.getElementById("wine");
function setWineTheme() {
    var wineTitle = "#3A1717";
    var wineGrid = "#632D2D";
    var wineBackground = "#8F4848";
    var wineText = "white";
    root.style.setProperty("--titleColor", wineTitle);
    root.style.setProperty("--gridColor", wineGrid);
    root.style.setProperty("--backgroundColor", wineBackground);
    root.style.setProperty("--textColor", wineText);
}





