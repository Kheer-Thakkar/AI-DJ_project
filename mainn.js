var music = "";
function preload()
{
	music = loadSound("music.mp3");
}

function play()
{
     music.play();	
}

function draw(){
    image(video, 0, 0, 600, 500);

}

function setup(){
canvas=createCanvas(600, 500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}