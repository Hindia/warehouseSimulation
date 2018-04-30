var canvas = document.getElementById('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c = canvas.getContext("2d");
var img = new Image();
img.src = "img/person.png";
 c.drawImage(img, 50, canvas.height-150,100,100);

c.font="30px papyrus";
c.fillText("VAMK + NOVIA", 10,30);

c.font="small-caps 20px Arial";
c.fillText("Warehouse Picking Basics: Pick and Learn!", 80,80);

c.font="20px Tw Cen MT";
c.fillText("Use the arrow keys to move around and click on the item to pick it!", canvas.width-1260,canvas.height-10);

//the warehouse
c.beginPath();
c.moveTo(10,100);
c.lineTo(canvas.width-200,100);
c.lineTo(canvas.width-200,100);
c.lineTo(canvas.width-200,canvas.height-50);
c.lineTo(10,canvas.height-50);
c.lineTo(10,100);
c.stroke();

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
c.fillText("Time Lapse", canvas.width-180,canvas.height-800);

c.font=" 20px Tw Cen MT";
c.fillText("Total Steps", canvas.width-180,canvas.height-700);

//pickup list
c.font="20px Tw Cen MT";
c.fillText("Pick up list", canvas.width-180,canvas.height-600);
