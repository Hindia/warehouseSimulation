var canvas = document.getElementById('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c = canvas.getContext("2d");
var steps=0;
var playerX=50;
var playerY=canvas.height-200;

function putImage(X,Y,src)
{
	var img = new Image();
	img.src = src;
	c.drawImage(img, X, Y,30,30);
}

function drawRect(X0,Y0,X1,Y1){
	c.beginPath();
	c.moveTo(X0,Y0);
	c.lineTo(X1,Y0);//
	c.lineTo(X1,Y1);
	c.lineTo(X0,Y1);
	c.lineTo(X0,Y0);
	c.stroke();
}

function drawLine(X0,Y0,X1,Y1){
	c.beginPath();
	c.moveTo(X0,Y0);
	c.lineTo(X1,Y1);
	c.stroke();
}


putImage(playerX,playerY,"img/person.png");
c.font="20px Tw Cen MT";
c.fillText(steps, canvas.width-150,canvas.height-250);
 
 
 window.addEventListener("keydown", function (event){
	var key= event.code;	//variable for holding the key pressed
	if(playerY > 120 && (key == "ArrowUp")) {
			steps+=1;
			playerY -=10;
			c.clearRect(10,100, canvas.width-250,canvas.height-200);
			putImage(playerX,playerY,"img/person.png");
			c.clearRect(canvas.width-200,canvas.height-280, canvas.width,canvas.height-100);
			c.fillText(steps, canvas.width-150,canvas.height-250);
		}
	else if(playerY < canvas.height-200 && (key == "ArrowDown" )) {
			steps+=1;
			playerY +=10;
			c.clearRect(10,100, canvas.width-250,canvas.height-200);
			putImage(playerX,playerY,"img/person.png");
			c.clearRect(canvas.width-200,canvas.height-280, canvas.width,canvas.height-100);
			c.fillText(steps, canvas.width-150,canvas.height-250);
		}
		
	else if(playerX >10 && (key == "ArrowLeft" )){
			steps+=1;
			playerX -=10;
			c.clearRect(10,100, canvas.width-250,canvas.height-200);
			putImage(playerX,playerY,"img/person.png");
			c.clearRect(canvas.width-200,canvas.height-280, canvas.width,canvas.height-100);
			c.fillText(steps, canvas.width-150,canvas.height-250);
		}	
	else if(playerX < canvas.width-350 && (key == "ArrowRight")){
			steps+=1;
			playerX +=10;
			c.clearRect(10,100, canvas.width-250,canvas.height-200);
			putImage(playerX,playerY,"img/person.png");
			c.clearRect(canvas.width-200,canvas.height-280, canvas.width,canvas.height-100);
			c.fillText(steps, canvas.width-150,canvas.height-250);
		}	
}, true);

c.font="30px papyrus";
c.fillText("VAMK + NOVIA", 10,30);

c.font="small-caps 20px Arial";
c.fillText("Warehouse Picking Basics: Pick and Learn!", 80,80);

//the warehouse
drawRect(10,100,canvas.width-200,canvas.height-50);

//shelf 1-3
drawRect(50,150, 200,300);
drawRect(50,350,200,500);
drawRect(50,550,200,700);

//vertical compartments
drawLine(100,150,100,300);
drawLine(150,150,150,300);

drawLine(100,350,100,500);
drawLine(150,350,150,500);

drawLine(100,550,100,700);
drawLine(150,550,150,700);

//horizontal compartments
drawLine(50,200,200,200);
drawLine(50,250,200,250);

drawLine(50,400,200,400);
drawLine(50,450,200,450);

drawLine(50,600,200,600);
drawLine(50,650,200,650);

//-------------------------------------------------------------------------------

//shelf 4-6
drawRect(250,150,400,300);
drawRect(250,350,400,500);
drawRect(250,550,400,700);

//vertical compartments
drawLine(100,150,100,300);
drawLine(150,150,150,300);

//horizontal compartments
drawLine(50,200,200,200);
drawLine(50,250,200,250);

//------------------------------------------------------------------------------


//shelf 7-9
drawRect(450,150,600,300);
drawRect(450,350,600,500);
drawRect(450,550,600,700);

//------------------------------------------------------------------------------

//shelf 10-12
drawRect(650,150,800,300);
drawRect(650,350,800,500);
drawRect(650,550,800,700);

//------------------------------------------------------------------------------

//shelf 13-15
drawRect(850,150,1000,300);
drawRect(850,350,1000,500);
drawRect(850,550,1000,700);

//items in shelve 1
putImage(60,160,"img/tv.png");
putImage(110,160,"img/cycle.png");
putImage(160,160,"img/tv.png");

putImage(60,210,"img/cycle.png");
putImage(110,210,"img/tv.png");
putImage(160,210,"img/tv.png");

putImage(60,260,"img/tv.png");
putImage(110,260,"img/cycle.png");
putImage(160,260,"img/tv.png");

//items in shelve 2
putImage(60,360,"img/briefcase.png");
putImage(110,360,"img/briefcase.png");
putImage(160,360,"img/briefcase.png");

putImage(60,410,"img/briefcase.png");
putImage(110,410,"img/cycle.png");
putImage(160,410,"img/briefcase.png");

putImage(60,460,"img/briefcase.png");
putImage(110,460,"img/briefcase.png");
putImage(160,460,"img/cycle.png");

//items in shelve 3
putImage(60,560,"img/cycle.png");
putImage(110,560,"img/cycle.png");
putImage(160,560,"img/cycle.png");

putImage(60,610,"img/cycle.png");
putImage(110,610,"img/tv.png");
putImage(160,610,"img/tv.png");

putImage(60,660,"img/cycle.png");
putImage(110,660,"img/cycle.png");
putImage(160,660,"img/briefcase.png");

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
