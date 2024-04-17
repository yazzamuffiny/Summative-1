

//menu hide show
const faveButton = document.getElementById("faveButton");
const luxButton = document.getElementById("luxButton");
const mockButton = document.getElementById("mockButton");

let houseFaves = document.getElementById("houseFaves");
let luxury = document.getElementById("luxury");
let mocktail = document.getElementById("mocktail");

const menuEvent = (fave, lux, mock) => {
    houseFaves.style.display = fave;
    luxury.style.display = lux;
    mocktail.style.display = mock;
};

faveButton.addEventListener('click', () => menuEvent("grid", "none", "none"));
luxButton.addEventListener('click', () => menuEvent("none", "grid", "none"));
mockButton.addEventListener('click', () => menuEvent("none", "none", "grid"));


//menu modals

const openBlueberry = document.getElementById("openBlueberry");
const closeBlueberry = document.getElementById("closeBlueberry");
const modalBlueberry = document.getElementById("modalBlueberry");

openBlueberry.addEventListener('click', function() {
    modalBlueberry.showModal();
});
closeBlueberry.addEventListener('click', function() {
    modalBlueberry.close();
});

const openPink = document.getElementById("openPink");
const closePink = document.getElementById("closePink");
const modalPink = document.getElementById("modalPink");

openPink.addEventListener('click', function() {
    modalPink.showModal();
});
closePink.addEventListener('click', function() {
    modalPink.close();
});

const openGold = document.getElementById("openGold");
const closeGold = document.getElementById("closeGold");
const modalGold = document.getElementById("modalGold");

openGold.addEventListener('click', function() {
    modalGold.showModal();
});
closeGold.addEventListener('click', function() {
    modalGold.close();
});