let $=document;

/* <!-- ***** Scroll Start ***** --> */
let customScroll=$.querySelector("#scroll");
window.addEventListener("scroll",()=>{
    let scrollTop=window.scrollY;//compelete size width of window
 
    let documentHeight= $.body.clientHeight;/* is compelete documen(body) height-size website(not depened to inpekt-window )  */
    /* with change size inspekt-window, change this size */
    let windowHeight= window.innerHeight; /* is compelete height-size website without part F12(inpekt-window) */
    let scrollPerzent=scrollTop/(documentHeight-windowHeight);

    let scrollPerzentRounded= Math.round(scrollPerzent*100);
    customScroll.style.width=scrollPerzentRounded+ "%"; 
})
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
let container= $.querySelector(".resoltionHEAD");
let inputRange= $.querySelector("#range");

function rangeChanger(event){
    let number=event.target.value;
    container.style.filter=`brightness(${number}%)`;
}
/* CHANGE KEY */
inputRange.addEventListener("change",rangeChanger);
/* reset value input-rang */
window.addEventListener("load",()=>{
    let rangInput=$.querySelector(".rang");
    rangInput.value=100;    
});
/* <!-- ***** Resolotion End ***** --> */

/* <!-- ***** Switch Start ***** --> */

const switchElement = document.querySelector('.switch')
switchElement.addEventListener('click', function () {
  
  // Hibnt: Add 'dark' class to body :))
  $.body.classList.toggle("dark");
  if($.body.className.includes("dark")){
    localStorage.setItem("thema","dark");
  }
  else{
    localStorage.setItem("thema","light");
  }
  
})

window.onload=function checkThema(){
  let check= localStorage.getItem("thema");
  if(check === "dark"){
    $.body.classList.add("dark")
  }
}

/* <!-- ***** Switch End ***** --> */


/* <!-- ***** Type Writer Start ***** --> */
var h1Elem = document.getElementById('typeWriter');

var h1Elemtypewriter = new Typewriter(h1Elem, {
    loop: true
});
// no symicolon
h1Elemtypewriter.typeString('Hello Everyone!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('The Best Design')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong> IDEA!</strong>')
    .pauseFor(2500)
    .start();
/* <!-- ***** Type Writer End ***** --> */

/* <!-- ***** Toast lib Start ***** --> */
iziToast.show({
    title: 'Hey',
    message: 'What can i for you ?',
    theme:"dark", //light
    position:"bottomCenter",

    timeout:10000,
    image:"./images/3x4foto.png",
});
/* <!-- ***** Toast lib End ***** --> */


/* <!-- ***** TIPPY lib START    ***** --> */

   // With the above scripts loaded, you can call `tippy()` with a CSS
      // selector and a `content` prop:
      tippy('#subscribEmail', {
        content: '<i>Subscribe now Please!</i>',//i ,is here italic//it is html form render.muss allow htlm true
        allowHTML:true,
        
      });
      tippy('#games', {
        content: 'What would you like?!',
        color:"blue"
      });
/* <!-- ***** TIPPY lib End ***** --> */

