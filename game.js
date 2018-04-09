//settings
var playerX=2;
var playerY=2;
var height=20;
var width=24;
var speed=100;
var increment=2;

//game variables
var score =0;
var running=false;
var gameOver=false;
var direction=1;//right 1, left -1, down -2, up 2
var int;

//entry point of the game
function run(){
	init();
	int=setInterval(gameLoop,speed);
}

//initializing the game
function init(){
	createMap();
	createPlayer();
}

//generates the map for the player
function createMap(){
	document.write("<table>");
	for(var y = 0;y < height;y++){
		document.write("<tr>");
		for(var x = 0;x < width;x++){
			if(x == 0 || x == width-1 || y == 0 || y == height-1)
				document.write("<td class='wall' id='"+x+ "-" +y+"'></td>");	//marks the wall with red table cells
			else
				document.write("<td class='blank' id='"+x+ "-" +y+"'></td>");	//marks the inside with black(color for blank set in css file) table cells
		}
		document.write("</tr>");
	}
	document.write("</table>");
}

//generates a player
function createPlayer(){
	setType(playerX,playerY,"player");
}

//gets the x y coordinate values
function get(x,y){
	return document.getElementById(x+ "-" +y);
}

//sets the type of the table cell
function setType(x,y,value){
	if(get(x,y) != null )
		get(x,y).setAttribute("class",value);
}

//creates a random value between the min and max
function rand(min,max){
	return Math.floor(Math.random()*(max-min)+min);
}

//gets the type/class of the table cell at that position
function getType(x,y){
	return get(x,y).getAttribute("class");

}

//setting the key listeners
window.addEventListener("keydown", function (event){
	//W is up, S is down, A is left and D is right OR one can use the arrowkeys
	var key= event.code;	//variable for holding the key pressed
	if(direction != -2 && (key == "ArrowUp" || key == "KeyW")) direction=2;
	else if(direction != 2 && (key == "ArrowDown" || key == "KeyS")) direction=-2;
	else if(direction!= 1 && (key == "ArrowLeft" || key == "KeyA"))	direction=-1;
	else if(direction!=-1 && (key == "ArrowRight" || key == "KeyD"))	direction=1;
	if(!running) running=true;
	else if(key=="Space") running=false;	//pauses the game
}, true);


function gameLoop(){
	if(running && !gameOver)
		update();
	else if (gameOver){
		clearInterval(int);
		window.alert("GAME OVER! Score= "+ score);
	}
}

//constantly updates the position of the player
function update(){
	if(direction==2) playerY--;
	else if (direction==-2) playerY++;
	else if (direction==1) playerX++;
	else if (direction==-1) playerX--;
	setType(playerX,playerY,"player");
	if (playerX == 0 || playerX == width-1 || playerY == 0 || playerY == height-1)	//if it hits the wall
		gameOver=true;
	else
		score+=2;


	document.getElementById("score").innerHTML = "Score: "+ score;
}


run();