// for slide fade
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide1", {
    type: "loop", // slide loop fade
    perPage: 1,
    autoplay: true,
    interval: 5000,
  }).mount();
});




function handleHide(){
  var widht = document.querySelector(".widht")
  widht.style.transition = "all 0.8s ease";
  widht.style.left="-100%"
  widht.style.width = "0";
  widht.style.overflow = "hidden";
  
  }
  
  
  function handleShow(){
    var widht = document.querySelector(".widht")
    widht.style.transition = "all 0.5s ease";
    widht.style.left="0"
    widht.style.width = "100%";
    widht.style.overflow = "visible";
  
    
    }
  
