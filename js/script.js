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
