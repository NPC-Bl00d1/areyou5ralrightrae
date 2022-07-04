var grace = "";
var scarynight = "";


function preload(){

    grace = loadSound('Grace V1.mp3');
    scarynight = loadSound('Scary Night.mp3');

}

function setup(){

    canvas = createCanvas(600,500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
    
    }
    
    function draw(){
    
    image(video, 0, 0, 600, 500);
    
    }