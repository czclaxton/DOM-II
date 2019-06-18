
let color = ["#e74c3c","#3498db","#2ecc71","#95a5a6","#f1c40f","#e74c3c"]
let i = 0;
document.querySelector("button").addEventListener("click", function(){
    i = i < color.length ? ++i : 0;
document.querySelector("html").style.background = color[i]
});

let imgMouseOver = document.getElementById('funBus');
imgMouseOver.addEventListener("mouseover", function() {
    this.src="img/new-fun-bus.jpg";
});

imgMouseOver.addEventListener("mouseleave", function() {
    this.src="img/fun-bus.jpg";
});

let imgMouseOver2 = document.getElementById('firstImage');
imgMouseOver2.addEventListener("mouseover", function() {
    this.src="img/fun.jpg";
});

imgMouseOver2.addEventListener("mouseleave", function() {
    this.src="img/adventure.jpg";
});

let imgMouseOver3 = document.getElementById('secondImage');
imgMouseOver3.addEventListener("mouseover", function() {
    this.src="img/adventure.jpg";
});

imgMouseOver3.addEventListener("mouseleave", function() {
    this.src="img/fun.jpg";
});

// let opacityDiv = document.getElementsByClassName("opacityDiv");
// let canvas = document.getElementsByTagName("html")

// canvas.addEventListener("scroll", function(){
//     opacityDiv.style.opacity = 1;
// });

document.querySelector("p").addEventListener("click", function(){
    i = i < color.length ? ++i : 0;
document.querySelector("p").style.color = color[i]
});

document.querySelector("h2").addEventListener("click", function(){
    i = i < color.length ? ++i : 0;
document.querySelector("h2").style.color = color[i]
});

document.querySelector("html").addEventListener("keydown", function(){
    i = i < color.length ? ++i : 0;
document.querySelector("html").style.color = color[i]
});

// let loadAnimation = document.querySelectorAll(".set img")
// loadAnimation.addEventListener("load", function(){
//     loadAnimation.forEach(function(a){
//         a.style.opacity="1";
// })

window.addEventListener('load', () => {
    return alert('page is fully loaded');
});

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';
  });

let navPrevent = document.getElementsByClassName("nav-link");
navPrevent.addEventListener('click', (event) => {
    event.preventDefault();
    event.returnValue = '';
  });

  window.addEventListener('online', () => {
    console.log("You are now connected to the network.");
});

window.addEventListener('offline', () => {
    console.log("The network connection has been lost.");
});

window.addEventListener('resize', () =>{return alert("STOP IT!")});

let x = document.querySelector(".opacityDiv");
let y = document.querySelector(".footer");

y.addEventListener("click", () => {
  console.log("did it");
})

x.addEventListener('click', () => {
  console.log("also did it");
  e.stopPropagation();
})