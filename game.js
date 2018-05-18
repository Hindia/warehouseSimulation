var canvas = document.getElementById('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c = canvas.getContext("2d");
var steps=0;
var playerX=50;
var playerY=canvas.height-200;
var img = new Image();
img.src = "img/person.png";
c.drawImage(img, playerX, playerY,100,100);
c.font="20px Tw Cen MT";
c.fillText(steps, canvas.width-150,canvas.height-250);
 
 
 window.addEventListener("keydown", function (event){
	var key= event.code;	//variable for holding the key pressed
	if(playerY > 120 && (key == "ArrowUp")) {
			steps+=1;
			playerY -=10;
			c.clearRect(10,100, canvas.width-250,canvas.height-200);
			c.drawImage(img, playerX, playerY,100,100);
			c.clearRect(canvas.width-200,canvas.height-280, canvas.width,canvas.height-100);
			c.fillText(steps, canvas.width-150,canvas.height-250);
		}
	else if(playerY < canvas.height-200 && (key == "ArrowDown" )) {
			steps+=1;
			playerY +=10;
			c.clearRect(10,100, canvas.width-250,canvas.height-200);
			c.drawImage(img, playerX, playerY,100,100);
			c.clearRect(canvas.width-200,canvas.height-280, canvas.width,canvas.height-100);
			c.fillText(steps, canvas.width-150,canvas.height-250);
		}
		
	else if(playerX >10 && (key == "ArrowLeft" )){
			steps+=1;
			playerX -=10;
			c.clearRect(10,100, canvas.width-250,canvas.height-200);
			c.drawImage(img, playerX, playerY,100,100);
			c.clearRect(canvas.width-200,canvas.height-280, canvas.width,canvas.height-100);
			c.fillText(steps, canvas.width-150,canvas.height-250);
		}	
	else if(playerX < canvas.width-350 && (key == "ArrowRight")){
			steps+=1;
			playerX +=10;
			c.clearRect(10,100, canvas.width-250,canvas.height-200);
			c.drawImage(img, playerX, playerY,100,100);
			c.clearRect(canvas.width-200,canvas.height-280, canvas.width,canvas.height-100);
			c.fillText(steps, canvas.width-150,canvas.height-250);
		}	
}, true);

c.font="30px papyrus";
c.fillText("VAMK + NOVIA", 10,30);

c.font="small-caps 20px Arial";
c.fillText("Warehouse Picking Basics: Pick and Learn!", 80,80);

function drawRect(X0,Y0,X1,Y1){
	c.beginPath();
	c.moveTo(X0,Y0);
	c.lineTo(X1,Y0);//
	c.lineTo(X1,Y1);
	c.lineTo(X0,Y1);
	c.lineTo(X0,Y0);
	c.stroke();
}
//the warehouse
drawRect(10,100,canvas.width-200,canvas.height-50);

//hints
var hintsArray =[
	'use arrow keys to move',
	'click the item to pick it',
	'doubleclick to swap',
	'clock is ticking!!',
	'Take the shortest route ',
	'You are almost done',
];

var colorArray =[
	'black',
	'green',
	'red',
	'blue',
	'purple ',
];

function animate(){
	
	setTimeout(function(){
		requestAnimationFrame(animate);
	},1300);
	c.clearRect(canvas.width-400,0, canvas.width,canvas.height-850);
	var message=hintsArray[Math.floor(Math.random()*hintsArray.length)];
	var color= colorArray[Math.floor(Math.random()*colorArray.length)];
	c.font="30px jokerman";
	c.fillStyle=color;
	c.fillText(message, canvas.width-400,canvas.height-900);
	

}
animate();
c.fillStyle='black';
//counters
c.font="20px Tw Cen MT";
c.fillText("Time Lapse", canvas.width-180,canvas.height-500);

c.fillText("Total Steps", canvas.width-180,canvas.height-300);

//pickup list

c.fillText("Pick up list", canvas.width-180,canvas.height-800);
