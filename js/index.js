
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


