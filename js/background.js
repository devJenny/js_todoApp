// color change practice
// const color = ["#d3d3d3","#ffefd5","#eee8aa","#e6e6fa","#b0e0e6","#ffe4e1"];
// const colorRandom = color[Math.floor(Math.random() * color.length)];
// bg.style.backgroundColor = colorRandom;

const bg = document.querySelector("body");
// img :: https://unsplash.com/
const images = ["https://images.unsplash.com/photo-1544212415-b269f18bf7ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80","https://images.unsplash.com/photo-1544212415-85fec3f52087?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80","https://images.unsplash.com/photo-1504578773124-6ad64f3c2a1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`

// document.body.appendChild(bgImage);

window.onload = function () {
    bg.style.backgroundImage = `url(${chosenImage})`
    bg.style.backgroundSize = "contain"
}

