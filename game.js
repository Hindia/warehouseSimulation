var canvas = document.getElementById('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c = canvas.getContext("2d");
var img = new Image();
img.src = "person.png";
 c.drawImage(img, 10, 10);

