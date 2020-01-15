

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
function back() {
tinybus.style.zIndex = "-2";
navs.style.zIndex = "5";}
//-----------------------------------------------------------------------------------------------------------------


// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`

// ## Stretch Task:

// * [ ] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.

// const source = document.createElement("script");
// source.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"; 


// step 2: Stop propogation

// const body = document.querySelector('body');

// body.addEventListener("click", () => {
//   body.style.backgroundColor="papayawhip";
//   console.log("me last!")
// })

// const cardGroup = document.querySelector(".card-group");

// cardGroup.addEventListener("click", () => {
//   cardGroup.style.backgroundColor = "blue";
//   console.log("me second");
// })

// const card = document.querySelector(".card");

// card.addEventListener("click", (event) => {
//   // console.log(event.target)
  
//   card.style.backgroundColor = "pink";
//   console.log("me first")
//   event.stopPropagation();
// })



//HEART CODE
// var heart = document.getElementsByClassName('heart')[1],
//     pfx = ["webkit", "moz", "MS", "o", ""],
//     hovered = false;

// function AnimationListener() {
//     if(hovered)
//     { 
//       heart.classList.remove('animated'); 
//       heart.style.webkitTransform = 'scale(2)';
//       heart.style.MozTransform = 'scale(2)';
//       heart.style.msTransform = 'scale(2)';
//       heart.style.OTransform = 'scale(2)';
//       heart.style.transform = 'scale(2)';
//     }
// }

// function TransitionListener() {
//   if(!hovered)
//   {
//     heart.classList.add('animated');
//   }
// }

// function PrefixedEvent(element, type, callback) {
//     for (var p = 0; p < pfx.length; p++) {
//         if (!pfx[p]) type = type.toLowerCase();
//         element.addEventListener(pfx[p]+type, callback, false);
//     }
// }

// PrefixedEvent(heart, "AnimationIteration", AnimationListener);

// heart.onmouseover = function() {
//   hovered = true;
// }
// heart.onmouseout = function() {
//   setTimeout(function() { hovered = false; }, 500);
//   PrefixedEvent(heart, "TransitionEnd", TransitionListener);
//   heart.style.webkitTransform = 'scale(1)';
//   heart.style.MozTransform = 'scale(1)';
//   heart.style.msTransform = 'scale(1)';
//   heart.style.OTransform = 'scale(1)';
//   heart.style.transform = 'scale(1)';  
// } 
//END HEART CODE
