let canvas = document.getElementById("can");
var ctx = canvas.getContext("2d");

// Get background 
let backgroundReady = false;
let background = new Image();

background.addEventListener("load", function(){
    backgroundReady = true;
});

background.src = "./Images/background.png";

// Get hero 
let heroReady = false;
let heroSprite = new Image();

heroSprite.addEventListener("load", function(){
    heroReady = true;
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
	speed: 5, // movement in pixels per second
	x: 0,
	y: 0
};
let monster = {
	x: 0,
	y: 0
};
let monstersCaught = 0;

// Handle keyboard controls
let keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
});

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
});

// Reset the game when the player catches a monster
let reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Throw the monster somewhere on the screen randomly
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
};

// Update game objects
let update = function () {
	if (38 in keysDown) { // Player holding up
		hero.y -= hero.speed;
	}
	if (40 in keysDown) { // Player holding down
		hero.y += hero.speed;
	}
	if (37 in keysDown) { // Player holding left
		hero.x -= hero.speed;
	}
	if (39 in keysDown) { // Player holding right
		hero.x += hero.speed;
	}

    if(hero.y < 0){
        hero.y = 460;
    }

    if(hero.y > 460){
        hero.y = 10;
    }

    if(hero.x < 0){
        hero.x = 500;
    }

    if(hero.x > 500){
        hero.x = 0;
    }

	// Are they touching?
	if (
		hero.x <= (monster.x + 32)
		& monster.x <= (hero.x + 32)
		& hero.y <= (monster.y + 32)
		& monster.y <= (hero.y + 32)
	) {
		++monstersCaught;
		reset();
	}
};

// Draw everything
let render = function () {
	if (backgroundReady) {
		ctx.drawImage(background, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroSprite, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterSprite, monster.x, monster.y);
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Monster's caught: " + monstersCaught, 32, 32);
};

// The main game loop
let main = function () {
	update();
	render();

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
let w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
reset();
main();