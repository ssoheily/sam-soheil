let $ = document;

/* <!-- ***** Scroll Start ***** --> */
let customScroll = $.querySelector("#scroll");
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY; //compelete size width of window

  let documentHeight =
    $.body
      .clientHeight; /* is compelete documen(body) height-size website(not depened to inpekt-window )  */
  /* with change size inspekt-window, change this size */
  let windowHeight =
    window.innerHeight; /* is compelete height-size website without part F12(inpekt-window) */
  let scrollPerzent = scrollTop / (documentHeight - windowHeight);

  let scrollPerzentRounded = Math.round(scrollPerzent * 100);
  customScroll.style.width = scrollPerzentRounded + "%";
});
/* <!-- ***** Scroll End ***** --> */

/* <!-- ***** Clock Start ***** --> */
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let seconds = document.querySelector("#seconds");

setInterval(function () {
  let dateToday = new Date();
  let h = dateToday.getHours();
  let m = dateToday.getMinutes();
  let s = dateToday.getSeconds();
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  hour.innerHTML = h;
  minute.innerHTML = m;
  seconds.innerHTML = s;
}, 1000);

/* <!-- ***** Clock End ***** --> */

/* <!-- ***** Resolotion Start ***** --> */
let container = $.querySelector(".resoltionHEAD");
let inputRange = $.querySelector("#range");

function rangeChanger(event) {
  let number = event.target.value;
  container.style.filter = `brightness(${number}%)`;
}
/* CHANGE KEY */
inputRange.addEventListener("change", rangeChanger);
/* reset value input-rang */
window.addEventListener("load", () => {
  let rangInput = $.querySelector(".rang");
  rangInput.value = 100;
});
/* <!-- ***** Resolotion End ***** --> */

/* <!-- ***** Switch Start ***** --> */

const switchElement = document.querySelector(".switch");
switchElement.addEventListener("click", function () {
  // Hibnt: Add 'dark' class to body :))
  $.body.classList.toggle("dark");
  if ($.body.className.includes("dark")) {
    localStorage.setItem("thema", "dark");
  } else {
    localStorage.setItem("thema", "light");
  }
});

window.onload = function checkThema() {
  let check = localStorage.getItem("thema");
  if (check === "dark") {
    $.body.classList.add("dark");
  }
};

/* <!-- ***** Switch End ***** --> */

/* <!-- ***** Type Writer Start ***** --> */
var h1Elem = document.getElementById("typeWriter");

var h1Elemtypewriter = new Typewriter(h1Elem, {
  loop: true,
});
// no symicolon
h1Elemtypewriter
  .typeString("Hello Everyone!")
  .pauseFor(2500)
  .deleteAll()
  .typeString("The Best Design")
  .pauseFor(2500)
  .deleteChars(7)
  .typeString("<strong> IDEA!</strong>")
  .pauseFor(2500)
  .start();
/* <!-- ***** Type Writer End ***** --> */

/* <!-- ***** Toast lib Start ***** --> */
iziToast.show({
  title: "Hey",
  message: "What can i for you ?",
  theme: "dark", //light
  position: "bottomLeft",

  timeout: 1000,
  image: "./images/3x4foto.png",
});
/* <!-- ***** Toast lib End ***** --> */

/* <!-- ***** TIPPY lib START    ***** --> */

// With the above scripts loaded, you can call `tippy()` with a CSS
// selector and a `content` prop:
tippy("#subscribEmail", {
  content: "<i>Subscribe now Please!</i>", //i ,is here italic//it is html form render. allow htlm true
  allowHTML: true,
});
tippy("#games", {
  content: "What would you like?!",
  color: "blue",
});
/* <!-- ***** TIPPY lib End ***** --> */

/* <!-- ***** secton3-Accorsion Start ***** --> */
//this is the button
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  //when one of the buttons are clicked run this function
  acc[i].onclick = function () {
    //variables
    var panel = this.nextElementSibling;
    var panelElem = document.getElementsByClassName("panel");
    var accordionActive = document.getElementsByClassName("accordion active");
    /* maxHeight =  height form content + overflow-content */
    /*if pannel is already open - minimize*/
    if (panel.style.maxHeight) {
      //minifies current pannel if already open
      panel.style.maxHeight = null;
      //removes the 'active' class as toggle didnt work on browsers minus chrome
      this.classList.remove("active");
    } else {
      //pannel isnt open...
      //goes through the buttons and removes the 'active' css (+ and -)
      for (var ii = 0; ii < accordionActive.length; ii++) {
        accordionActive[ii].classList.remove("active");
      }
      //Goes through and removes 'activ' from the css, also minifies any 'panels' that might be open
      for (var iii = 0; iii < panelElem.length; iii++) {
        this.classList.remove("active");
        panelElem[iii].style.maxHeight = null;
      }
      //opens the specified pannel
      panel.style.maxHeight = panel.scrollHeight + "px";
      //adds the 'active' addition to the css.
      this.classList.add("active");
    }
  }; //closing to the acc onclick function
} //closing to the for loop.

/* <!-- ***** secton3-Accorsion End ***** --> */

/* <!-- ***** sideBar Start ***** --> */
const menuBtn = $.querySelector(".ctrlbtn");
const sidebar = $.querySelector(".sidebar");
menuBtn.addEventListener("click", () => {
  /* last css is always as default (between open and close in style.css) */
  menuBtn.classList.toggle("open");
  sidebar.classList.toggle("show");
});
// btn sideBar hidden, if show btn goToTop 
/* <!-- ***** sideBar End ***** --> */

/* <!-- ***** button goToUp Start ***** --> */
//Get the button 
var gotopBtn = document.querySelector(".gotop");
var btn_Sidebar = document.querySelector(".btnSidebar");
gotopBtn.addEventListener("click", topFunction); //Functioned without the topFunction ?????

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", scrollFunction);
window.addEventListener("load", scrollFunction);

function scrollFunction() {
  //   Document.documentElement returns the   Element that is the root element  ex: <html>
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    gotopBtn.style.display = "block";
    btn_Sidebar.style.display="none"; //sideBar hidden
  } else {
    gotopBtn.style.display = "none";
    btn_Sidebar.style.display="block";

  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/* <!-- ***** button goToUp End ***** --> */
