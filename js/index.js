// select	Some text is being selected.
// mouseenter  A pointing device is moved onto the element that has the listener attached.
// mousemove	A pointing device is moved over an element. (Fired continously as the mouse moves.)
// dragstart	The user starts dragging an element or text selection.
// focus	An element has received focus (does not bubble).
// blur	An element has lost focus (does not bubble).
// scroll	The document view or an element has been scrolled.
const source = document.createElement("script");
source.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js";

const bod = document.querySelector("body");

const images = document.querySelectorAll("img");

images[0].addEventListener("mouseover", () => {bod.style.backgroundColor= "turquoise"});
images[1].addEventListener("mouseover", () => {bod.style.backgroundColor= "orange"});
images[2].addEventListener("mouseover", () => {bod.style.backgroundColor= "hotpink"});
images[3].addEventListener("mouseover", () => {bod.style.backgroundColor= "yellow"});

const tinybus = document.querySelector("img");

tinybus.style.zIndex = "5";

tinybus.addEventListener("dblclick", () => {
    tinybus.style.transform ="scale(1.2)";
    tinybus.style.transition = "transform 0.3s"});

tinybus.addEventListener("mouseleave", () => {
    tinybus.style.transform = "scale(1)"});

const navs = document.querySelector("header");

bod.addEventListener("keydown", () => {
    navs.style.border = "3px dotted red"});

bod.addEventListener("keyup", () => {
    navs.style.border = "none"});

const noGo = document.querySelectorAll("a");

noGo.forEach(addEventListener("click", (e) => {
  e.preventDefault();
  console.log("nope");}));

// const logo = document.getElementByClassName("logo-heading");

// bod.addEventListener("scroll", () => {
//     logo.style.transform = "skew(20deg,20deg)"
//     // var id = setInterval(change, 5);
//     // function change() {
//     //   if (logo.style.color = "blue") {
//     //     clearInterval(id);
//     //   } else {
//     //     logo.style.color = "red"
//     //   }
//     // }
// })

const imageResize = document.querySelector('.content-destination img');
    window.addEventListener('resize', () => {
        imageResize.scr = 'https://images.unsplash.com/photo-1578926288207-a90a5366759d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2022&q=80'
    })

// function myMove() {
//     var elem = document.getElementById("animate");
//     var pos = 0;
//     var id = setInterval(frame, 5);
//     function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       } else {
//         pos++;
//         elem.style.top = pos + 'px';
//         elem.style.left = pos + 'px';
//       }
//     }
//   }

var heart = document.getElementsByClassName('heart')[1],
    pfx = ["webkit", "moz", "MS", "o", ""],
    hovered = false;

function AnimationListener() {
    if(hovered)
    { 
      heart.classList.remove('animated'); 
      heart.style.webkitTransform = 'scale(2)';
      heart.style.MozTransform = 'scale(2)';
      heart.style.msTransform = 'scale(2)';
      heart.style.OTransform = 'scale(2)';
      heart.style.transform = 'scale(2)';
    }
}

function TransitionListener() {
  if(!hovered)
  {
    heart.classList.add('animated');
  }
}

function PrefixedEvent(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
        if (!pfx[p]) type = type.toLowerCase();
        element.addEventListener(pfx[p]+type, callback, false);
    }
}

PrefixedEvent(heart, "AnimationIteration", AnimationListener);

heart.onmouseover = function() {
  hovered = true;
}
heart.onmouseout = function() {
  setTimeout(function() { hovered = false; }, 500);
  PrefixedEvent(heart, "TransitionEnd", TransitionListener);
  heart.style.webkitTransform = 'scale(1)';
  heart.style.MozTransform = 'scale(1)';
  heart.style.msTransform = 'scale(1)';
  heart.style.OTransform = 'scale(1)';
  heart.style.transform = 'scale(1)';  
}