//settings
var snakeX=2;
var snakeY=2;
var height=20;
var width=24;
var speed=100;
var increment=2;

//game variables
var length =0;
var score =0;
var tailX=[snakeX];
var tailY=[snakeY];
var fX;
var fY;
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
	createSnake();
	createFruit();
}

//generates the map for the snake
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

//generates a snake
function createSnake(){
	setType(snakeX,snakeY,"snake");
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

//generates the fruits that pop randomly
function createFruit(){
	var found = false;
	while(!found && (length < (width-2) * (height-2) + 1)){
		var fruitX = rand(1, width-1);
		var fruitY = rand(1,height-1);
		if(getType(fruitX,fruitY) == "blank") found=true;
	}
	setType(fruitX,fruitY,"fruit");
	fX=fruitX;
	fY=fruitY;
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

//constantly updates the position of the snake
function update(){
	setType(fX, fY, "fruit");
	updateTail();
	setType(tailX[length], tailY[length], "blank");
	if(direction==2) snakeY--;
	else if (direction==-2) snakeY++;
	else if (direction==1) snakeX++;
	else if (direction==-1) snakeX--;
	setType(snakeX,snakeY,"snake");
	for(var i=tailX.length-1; i>= 0; i--){
		if(snakeX == tailX[i] && snakeY == tailY[i]){	//if it hits/eats itself
			gameOver=true;
			break;
		}
	}
	if (snakeX == 0 || snakeX == width-1 || snakeY == 0 || snakeY == height-1)	//if it hits the wall
		gameOver=true;
	else if(snakeX == fX && snakeY==fY){
		score+=2;
		createFruit();
		length+=increment;

	}
	document.getElementById("score").innerHTML = "Score: "+ score;
}

//updates the position of the tail of the snake
function updateTail(){
	for(var i=length; i>0 ;i--){
		tailX[i]=tailX[i-1];
		tailY[i]=tailY[i-1];
	}
	tailX[0]=snakeX;
	tailY[0]=snakeY;
}

run();