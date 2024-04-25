function ekofarmEnter() {
    document.getElementById("experience").style.backgroundImage = "url(./img/ekofarm.jpg)";
    document.getElementById("experience").style.backgroundPositionY = "top";
}

function ekofarmLeave() {
    document.getElementById("experience").style.backgroundImage = "none";
}

function logisticsEnter() {
    document.getElementById("experience").style.backgroundImage = "url(./img/logistics.jpg)";
    document.getElementById("experience").style.backgroundPositionY = "bottom";
}

function logisticsLeave() {
    document.getElementById("experience").style.backgroundImage = "none";
}

function gastronomyEnter() {
    document.getElementById("experience").style.backgroundImage = "url(./img/gastronomy.jpg)";
    document.getElementById("experience").style.backgroundSize = "cover";
    document.getElementById("experience").style.backgroundPositionY = "center";
}

function gastronomyLeave() {
    document.getElementById("experience").style.backgroundImage = "none";
}