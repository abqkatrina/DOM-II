const bod = document.querySelector("body");
const images = document.querySelectorAll("img");
// #1 mouseover
images[0].addEventListener("mouseover", () => {bod.style.backgroundColor= "turquoise"});
images[1].addEventListener("mouseover", () => {bod.style.backgroundColor= "orange"});
images[2].addEventListener("mouseover", () => {bod.style.backgroundColor= "hotpink"});
images[3].addEventListener("mouseover", () => {bod.style.backgroundColor= "yellow"});
//---------------------------------------------------------------------------------------
const tinybus = document.querySelector("img");
//#2 dblclick
tinybus.addEventListener("dblclick", () => {
    tinybus.style.transform ="scale(1.2)";
    tinybus.style.transition = "transform 0.3s";
});
//#3 mouseleave
tinybus.addEventListener("mouseleave", () => {
    tinybus.style.transform = "scale(1)";
});
//---------------------------------------------------------------------------------------
const navs = document.querySelector("header");
//#4 keydown
bod.addEventListener("keydown", () => {
    navs.style.border = "3px dotted red";
});
//---------------------------------------------------------------------------------------
//#5 keyup
bod.addEventListener("keyup", () => {
    navs.style.border = "none";
});
//---------------------------------------------------------------------------------------
const noGo = document.querySelectorAll("a");
//#6 click
noGo.forEach(el => {
    el.addEventListener("click", (x) => {
        x.preventDefault; 
        alert("nope")
    })
});
//---------------------------------------------------------------------------------------
const h2 = document.querySelector("h2");
//#7 wheel
window.addEventListener("wheel", (e) => {
    h2.style.color = "blue";});
//---------------------------------------------------------------------------------------
const field = document.createElement("input");
    field.type = "text";
    field.style.margin = "5px auto";
    field.style.display= "flex";
    field.style.alignSelf = "center";
const papa = document.querySelector("footer");
    papa.appendChild(field);
//#8 focus
field.addEventListener("focus", focusFunc, true);
//#9 blur
field.addEventListener("blur", blurFunc, true);
function focusFunc() {
    field.style.color = "red";
};
function blurFunc() {
    field.style.color = "blue";
};
//---------------------------------------------------------------------------------------
//#10 load
tinybus.addEventListener("load", back());
function back(){
    tinybus.style.zIndex = "-2";
    navs.style.zIndex = "5";
}
//--------------------------------------------------------------------------------------
const low = document.querySelector(".content-pick");
low.addEventListener("click", () => {
    low.style.backgroundColor = "coral";
    console.log("me last!");
})
const mid = document.querySelectorAll(".home .content-pick .destination");
mid[1].addEventListener("click", () => {
    mid[1].style.backgroundColor = "grey";
    console.log("me second!");
    event.stopPropagation();
})
const butts = document.querySelectorAll(".destination .btn");
butts[1].addEventListener("click", () => {butts[1].style.backgroundColor = "hotpink";
console.log("me first!");
event.stopPropagation();
})
