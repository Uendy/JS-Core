let canvas = document.getElementById("can");
let ctx = canvas.getContext("2d");

let image = new Image();
image.src = "./portrait.jpg";
image.addEventListener("load", () => ctx.drawImage(image, 50, 50, 300, 450));
