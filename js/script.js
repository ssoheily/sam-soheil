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

