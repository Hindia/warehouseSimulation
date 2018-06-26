var steps=0;
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.c = this.canvas.getContext("2d");	//context
		this.c.font="20px Tw Cen MT";
		this.c.fillText(steps, canvas.width-150,canvas.height-250);
		this.c.fillStyle='black';
		this.c.fillText("Time Lapse", canvas.width-180,canvas.height-500);
		this.c.fillText("Total Steps", canvas.width-180,canvas.height-300);
		this.c.fillText("Pick up list", canvas.width-180,canvas.height-800);
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
	
}



function component(X,Y,src)
{
	var img = new Image();
	img.src = src;
	this.x = X;
    this.y = Y;  
	this.speedX = 0;
    this.speedY = 0;
	this.update = function() {
        var ctx = myGameArea.c;
		ctx.drawImage(img, this.x, this.y,30,30);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }     
}
var myPlayer;
var ball;

function startGame() {
	myPlayer = new component(50,canvas.height-200,"img/person.png");
	ball=new component(60,160,"img/ball.png");
	//items in shelve 1
putImage();
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
putImage(60,560,"img/headphone.png");
putImage(110,560,"img/camera.png");
putImage(160,560,"img/cycle.png");

putImage(60,610,"img/cycle.png");
putImage(110,610,"img/tv.png");
putImage(160,610,"img/tv.png");

putImage(60,660,"img/cycle.png");
putImage(110,660,"img/cycle.png");
putImage(160,660,"img/briefcase.png");

//items in shelve 4
putImage(260,160,"img/tv.png");
putImage(310,160,"img/cycle.png");
putImage(360,160,"img/camera.png");

putImage(260,210,"img/cycle.png");
putImage(310,210,"img/mic.png");
putImage(360,210,"img/mic.png");

putImage(260,260,"img/tv.png");
putImage(310,260,"img/cycle.png");
putImage(360,260,"img/camera.png");

//items in shelve 5
putImage(260,360,"img/mic.png");
putImage(310,360,"img/briefcase.png");
putImage(360,360,"img/mic.png");

putImage(260,410,"img/briefcase.png");
putImage(310,410,"img/cycle.png");
putImage(360,410,"img/briefcase.png");

putImage(260,460,"img/briefcase.png");
putImage(310,460,"img/briefcase.png");
putImage(360,460,"img/cycle.png");

//items in shelve 6
putImage(260,560,"img/cycle.png");
putImage(310,560,"img/cycle.png");
putImage(360,560,"img/cycle.png");

putImage(260,610,"img/cycle.png");
putImage(310,610,"img/tv.png");
putImage(360,610,"img/tv.png");

putImage(260,660,"img/cycle.png");
putImage(310,660,"img/cycle.png");
putImage(360,660,"img/briefcase.png");

//items in shelve 7
putImage(460,160,"img/tv.png");
putImage(510,160,"img/cycle.png");
putImage(560,160,"img/tv.png");

putImage(460,210,"img/cycle.png");
putImage(510,210,"img/tv.png");
putImage(560,210,"img/tv.png");

putImage(460,260,"img/tv.png");
putImage(510,260,"img/cycle.png");
putImage(560,260,"img/tv.png");

//items in shelve 8
putImage(460,360,"img/briefcase.png");
putImage(510,360,"img/briefcase.png");
putImage(560,360,"img/briefcase.png");

putImage(460,410,"img/briefcase.png");
putImage(510,410,"img/cycle.png");
putImage(560,410,"img/briefcase.png");

putImage(460,460,"img/pencil.png");
putImage(510,460,"img/pencil.png");
putImage(560,460,"img/cycle.png");

//items in shelve 9
putImage(460,560,"img/cycle.png");
putImage(510,560,"img/cycle.png");
putImage(560,560,"img/cycle.png");

putImage(460,610,"img/cycle.png");
putImage(510,610,"img/tv.png");
putImage(560,610,"img/tv.png");

putImage(460,660,"img/cycle.png");
putImage(510,660,"img/cycle.png");
putImage(560,660,"img/briefcase.png");

//items in shelve 10
putImage(660,160,"img/tv.png");
putImage(710,160,"img/cycle.png");
putImage(760,160,"img/tv.png");

putImage(660,210,"img/cycle.png");
putImage(710,210,"img/tv.png");
putImage(760,210,"img/tv.png");

putImage(660,260,"img/tv.png");
putImage(710,260,"img/cycle.png");
putImage(760,260,"img/tv.png");

//items in shelve 11
putImage(660,360,"img/pencil.png");
putImage(710,360,"img/briefcase.png");
putImage(760,360,"img/briefcase.png");

putImage(660,410,"img/briefcase.png");
putImage(710,410,"img/cycle.png");
putImage(760,410,"img/briefcase.png");

putImage(660,460,"img/camera.png");
putImage(710,460,"img/briefcase.png");
putImage(760,460,"img/cycle.png");

//items in shelve 12
putImage(660,560,"img/pencil.png");
putImage(710,560,"img/cycle.png");
putImage(760,560,"img/cycle.png");

putImage(660,610,"img/cycle.png");
putImage(710,610,"img/pencil.png");
putImage(760,610,"img/tv.png");

putImage(660,660,"img/cycle.png");
putImage(710,660,"img/cycle.png");
putImage(760,660,"img/briefcase.png");

//items in shelve 13
putImage(860,160,"img/tv.png");
putImage(910,160,"img/cycle.png");
putImage(960,160,"img/tv.png");

putImage(860,210,"img/cycle.png");
putImage(910,210,"img/pencil.png");
putImage(960,210,"img/tv.png");

putImage(860,260,"img/tv.png");
putImage(910,260,"img/cycle.png");
putImage(960,260,"img/tv.png");

//items in shelve 14
putImage(860,360,"img/briefcase.png");
putImage(910,360,"img/ball.png");
putImage(960,360,"img/briefcase.png");

putImage(860,410,"img/ball.png");
putImage(910,410,"img/ball.png");
putImage(960,410,"img/briefcase.png");

putImage(860,460,"img/briefcase.png");
putImage(910,460,"img/briefcase.png");
putImage(960,460,"img/ball.png");

//items in shelve 15
putImage(860,560,"img/ball.png");
putImage(910,560,"img/ball.png");
putImage(960,560,"img/headphone.png");

putImage(860,610,"img/headphone.png");
putImage(910,610,"img/tv.png");
putImage(960,610,"img/tv.png");

putImage(860,660,"img/headphone.png");
putImage(910,660,"img/headphone.png");
putImage(960,660,"img/headphone.png");
    myGameArea.start();
}
startGame();

function updateGameArea() {
    myGameArea.clear();  
	myPlayer.newPos();
    myPlayer.update();
}

var c = myGameArea.c;

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
var sec=0;
var myVar=setInterval(myTimer,1000);

function myTimer(){
	sec+=1;
	this.c.fillText(sec, canvas.width-180,canvas.height-450);	
}

 
 
 window.addEventListener("keydown", function (event){
	var key= event.code;	//variable for holding the key pressed
	if(playerY > 120 && (key == "ArrowUp")) {
			steps+=1;
			myPlayer.speedY-=1;
			c.clearRect(canvas.width-200,canvas.height-280, canvas.width,canvas.height-100);
			c.fillText(steps, canvas.width-150,canvas.height-250);
		}
	else if(playerY < canvas.height-200 && (key == "ArrowDown" )) {
			steps+=1;
			myPlayer.speedY+=1;
			c.clearRect(canvas.width-200,canvas.height-280, canvas.width,canvas.height-100);
			c.fillText(steps, canvas.width-150,canvas.height-250);
		}
		
	else if(playerX >10 && (key == "ArrowLeft" )){
			steps+=1;
			myPlayer.speedX-=1;
			c.clearRect(canvas.width-200,canvas.height-280, canvas.width,canvas.height-100);
			c.fillText(steps, canvas.width-150,canvas.height-250);
		}	
	else if(playerX < canvas.width-350 && (key == "ArrowRight")){
			steps+=1;
			myPlayer.speedX+=1;
			c.clearRect(canvas.width-200,canvas.height-280, canvas.width,canvas.height-100);
			c.fillText(steps, canvas.width-150,canvas.height-250);
		}	
}, true);

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
drawLine(300,150,300,300);
drawLine(350,150,350,300);

drawLine(300,350,300,500);
drawLine(350,350,350,500);

drawLine(300,550,300,700);
drawLine(350,550,350,700);

//horizontal compartments
drawLine(250,200,400,200);
drawLine(250,250,400,250);

drawLine(250,400,400,400);
drawLine(250,450,400,450);

drawLine(250,600,400,600);
drawLine(250,650,400,650);

//------------------------------------------------------------------------------


//shelf 7-9
drawRect(450,150,600,300);
drawRect(450,350,600,500);
drawRect(450,550,600,700);

//vertical compartments
drawLine(500,150,500,300);
drawLine(550,150,550,300);

drawLine(500,350,500,500);
drawLine(550,350,550,500);

drawLine(500,550,500,700);
drawLine(550,550,550,700);

//horizontal compartments
drawLine(450,200,600,200);
drawLine(450,250,600,250);

drawLine(450,400,600,400);
drawLine(450,450,600,450);

drawLine(450,600,600,600);
drawLine(450,650,600,650);

//------------------------------------------------------------------------------

//shelf 10-12
drawRect(650,150,800,300);
drawRect(650,350,800,500);
drawRect(650,550,800,700);

//vertical compartments
drawLine(700,150,700,300);
drawLine(750,150,750,300);

drawLine(700,350,700,500);
drawLine(750,350,750,500);

drawLine(700,550,700,700);
drawLine(750,550,750,700);

//horizontal compartments
drawLine(650,200,800,200);
drawLine(650,250,800,250);

drawLine(650,400,800,400);
drawLine(650,450,800,450);

drawLine(650,600,800,600);
drawLine(650,650,800,650);


//------------------------------------------------------------------------------

//shelf 13-15
drawRect(850,150,1000,300);
drawRect(850,350,1000,500);
drawRect(850,550,1000,700);

//vertical compartments
drawLine(900,150,900,300);
drawLine(950,150,950,300);

drawLine(900,350,900,500);
drawLine(950,350,950,500);

drawLine(900,550,900,700);
drawLine(950,550,950,700);

//horizontal compartments
drawLine(850,200,1000,200);
drawLine(850,250,1000,250);

drawLine(850,400,1000,400);
drawLine(850,450,1000,450);

drawLine(850,600,1000,600);
drawLine(850,650,1000,650);



