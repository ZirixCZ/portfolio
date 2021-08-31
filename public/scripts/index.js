// I'm actually proud of this file, as I finally feel like I'm getting better
AOS.init({
    disable: 'phone'
});
function discordPopUp() {
    alert("Zirix#4222");
}
const red = document.querySelector(".changeBtn-red");
const blue = document.querySelector(".changeBtn-blue");
const green = document.querySelector(".changeBtn-green");

function changeRed() {
    const headerSpan = document.querySelector("#header-span");
    const aboutDiscord = document.querySelector("#aboutme-span-dc");
    const aboutEmail = document.querySelector("#aboutme-span-em");
    headerSpan.style.color = "rgb(216, 40, 40)";
    aboutDiscord.style.color = "rgb(216, 40, 40)";
    aboutEmail.style.color = "rgb(216, 40, 40)";
}
function changeBlue() {
    const headerSpan = document.querySelector("#header-span");
    const aboutDiscord = document.querySelector("#aboutme-span-dc");
    const aboutEmail = document.querySelector("#aboutme-span-em");
    headerSpan.style.color = "rgb(40, 131, 216)";
    aboutDiscord.style.color = "rgb(40, 131, 216)";
    aboutEmail.style.color = "rgb(40, 131, 216)";
}
function changeGreen() {
    const headerSpan = document.querySelector("#header-span");
    const aboutDiscord = document.querySelector("#aboutme-span-dc");
    const aboutEmail = document.querySelector("#aboutme-span-em");
    headerSpan.style.color = "rgb(40, 216, 55)";
    aboutDiscord.style.color = "rgb(40, 216, 55)";
    aboutEmail.style.color = "rgb(40, 216, 55)";
}