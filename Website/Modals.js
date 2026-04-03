var modal = document.getElementById("modal");
var modalContent = document.querySelector(".modalContent");
var span = document.getElementsByClassName("close")[0];

var resume = document.getElementById("resume");
var maddysmachines = document.getElementById("maddysmachines");
var emberfall = document.getElementById("emberfall");
var spintegration = document.getElementById("spintegration");
var printer = document.getElementById("printer");
var portfoliowebsite = document.getElementById("portfoliowebsite");
var learnmore = document.getElementById("learnmore");
var computerBuild = document.getElementById("computerBuild");

var themepicker = document.getElementById("themepicker");
var themepickerModal = document.getElementById("themepickerModal");

var resumeModal = document.getElementById("resumeModal");
var maddysmachinesModal = document.getElementById("maddysmachinesModal");
var emberfallModal = document.getElementById("emberfallModal");
var spintegrationModal = document.getElementById("spintegrationModal");
var printerModal = document.getElementById("printerModal");
var portfoliowebsiteModal = document.getElementById("portfoliowebsiteModal");
var learnmoreModal = document.getElementById("learnmoreModal");
var cookies = document.getElementById("cookies");
var computerBuildModal = document.getElementById("computerBuildModal");
var clickerGameModal = document.getElementById("clickerGameModal");


var animationDuration = 250;

function hideModal() {
    modal.classList.remove("fade-in");
    modal.classList.add("fade-out");
    modalContent.classList.remove("fade-in");
    modalContent.classList.add("fade-out");

    setTimeout(function() {
        modal.style.display = "none";
    }, animationDuration);
}

function showModalFor(element) {
    modal.style.display = "block";
    modal.classList.remove("fade-out");
    modal.classList.add("fade-in");
    modalContent.classList.remove("fade-out");
    modalContent.classList.add("fade-in");

    resumeModal.style.display = "none";
    maddysmachinesModal.style.display = "none";
    emberfallModal.style.display = "none";
    spintegrationModal.style.display = "none";
    printerModal.style.display = "none";
    portfoliowebsiteModal.style.display = "none";
    learnmoreModal.style.display = "none";
    themepickerModal.style.display = "none";
    computerBuildModal.style.display = "none";
    clickerGameModal.style.display = "none";
    cookies.style.display = "none";

    switch (element.id) {
        case "learnmore":
            learnmoreModal.style.display = "block";
            break;
        case "resume":
            resumeModal.style.display = "block";
            break;
        case "maddysmachines":
            maddysmachinesModal.style.display = "block";
            break;
        case "emberfall":
            emberfallModal.style.display = "block";
            break;
        case "spintegration":
            spintegrationModal.style.display = "block";
            break;
        case "printer":
            printerModal.style.display = "block";
            break;
        case "portfoliowebsite":
            portfoliowebsiteModal.style.display = "block";
            break;
        case "themepicker":
            themepickerModal.style.display = "block";
            break;
        case "computerBuild":
            computerBuildModal.style.display = "block";
            break;
        case "clickerGame":
            clickerGameModal.style.display = "block";
            break;
        case "cookies":
            cookies.style.display = "flex";
            break;
        default:
            break;
    }
}

resume.onclick = function() { showModalFor(this); };
maddysmachines.onclick = function() { showModalFor(this); };
emberfall.onclick = function() { showModalFor(this); };
spintegration.onclick = function() { showModalFor(this); };
printer.onclick = function() { showModalFor(this); };
portfoliowebsite.onclick = function() { showModalFor(this); };
learnmore.onclick = function() { showModalFor(this); };
themepicker.onclick = function() { showModalFor(this); };
computerBuild.onclick = function() { showModalFor(this); };
clickerGame.onclick = function() { showModalFor(this); };

span.onclick = hideModal;

window.onclick = function(event) {
    if (event.target == modal) {
        hideModal();
    }
}
