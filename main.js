var grace = "";
var scarynight = "";
leftY = 0;
leftX = 0;
rightY = 0;
rightX = 0;


function preload(){

    grace = loadSound('Grace V1.mp3');
    scarynight = loadSound('Scary Night.mp3');

}

function setup(){

    canvas = createCanvas(600,500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

    }


function modelLoaded(){

    console.log("wow such load");

}

function gotPoses(results){

if(results.length > 0){

console.log(results);
leftY = results[0].pose.leftWrist.y;
leftX = results[0].pose.leftWrist.x;
rightY = results[0].pose.rightWrist.y;
rightX = results[0].pose.rightWrist.x;

console.log("left y = " + leftY  + " left x = " + leftX);
console.log(" right x = " + rightX + " right y = " + rightY)

}

}
   

function draw(){
    
    image(video, 0, 0, 600, 500);
    
    }