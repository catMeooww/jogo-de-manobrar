canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
backgroundImgTag = new Image();
backgroundImgTag.onload = uploadBackground;
backgroundImgTag.src = backgroundImage;

greencarImgTag = new Image();
greencarImgTag.onload = uploadGreenCar;
greencarImgTag.src = greencarImage;
}

function uploadBackground() {
ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height);

}

function uploadGreenCar() {
	ctx.drawImage(greencarImgTag,greencar_x,greencar_y,greencar_width,greencar_height);

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greencar_y >=0){
		greencar_y = greencar_y - 10;
		console.log("x = "+ greencar_x +" y = "+ greencar_y);
		uploadBackground();
		uploadGreenCar();
		win();
	}
}

function down()
{
	if (greencar_y <=300){
		greencar_y = greencar_y + 10;
		console.log("x = "+ greencar_x +" y = "+ greencar_y);
		uploadBackground();
		uploadGreenCar();
		win();
	}
}

function left()
{
	if (greencar_x >=0){
		greencar_x = greencar_x - 10;
		console.log("x = "+ greencar_x +" y = "+ greencar_y);
		uploadBackground();
		uploadGreenCar();
		win();
	}
}

function right()
{
	if (greencar_x <=710){
		greencar_x = greencar_x + 10;
		console.log("x = "+ greencar_x +" y = "+ greencar_y);
		uploadBackground();
		uploadGreenCar();
		win();
	}
}
function win(){
 if (greencar_x >= 405 && greencar_x <=455 && greencar_y <=95 && greencar_y >=75){
	document.getElementById("victory").innerHTML = "você venceu!"
 }
}