// Your code goes here
// let hoverEvent = document.getElementsByClassName('nav-link');
// hoverEvent.onclick = function()

let bgcolor = ["#e74c3c","#3498db","#2ecc71","#95a5a6","#f1c40f","#e74c3c"]
let i = 0;
document.querySelector("button").addEventListener("click", function(){
    i = i < bgcolor.length ? ++i : 0;
document.querySelector("html").style.background = bgcolor[i]
})

let imgMouseOver = document.getElementById('funBus');
imgMouseOver.addEventListener("mouseover", function() {
    this.src="img/new-fun-bus.jpg";
})

imgMouseOver.addEventListener("mouseleave", function() {
    this.src="img/fun-bus.jpg";
})