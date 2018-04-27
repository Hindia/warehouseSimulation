var canvas = document.getElementById('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c = canvas.getContext("2d");
var img = new Image();
img.src = "person.png";
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

//counters
c.font="20px Tw Cen MT";
c.fillText("Time Lapse", canvas.width-150,canvas.height-600);

c.font=" 20px Tw Cen MT";
c.fillText("Total Steps", canvas.width-150,canvas.height-500);

//pickup list
c.font="20px Tw Cen MT";
c.fillText("Pick up list", canvas.width-150,canvas.height-400);
