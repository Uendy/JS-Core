let canvas = document.getElementById("can");
let ctx = canvas.getContext("2d");

// Get background 
let bgReady = false;
let background = new Image();

background.addEventListener("load", function(){
    bgready = true;
});

background.src = "./Images/background.png";

// Get hero 
let heroReady = false;
let heroSprite = new Image();

heroSprite.addEventListener("load", function(){
    heroSprite = true;
});

heroSprite.src = "./Images/hero.png";

// Get monster 
let monsterReady = false;
let monsterSprite = new Image();

monsterSprite.addEventListener("load", function(){
    monsterReady = true;
});

monsterSprite.src = "./Images/monster.png";

// Game objects
let hero = {
	speed: 100, // movement in pixels per second
	x: 0,
	y: 0
};
let monster = {
	x: 0,
	y: 0
};
let monstersCaught = 0;