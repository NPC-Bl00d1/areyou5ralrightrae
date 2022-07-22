var grace = "";
var scarynight = "";
var leftY = 0;
var leftX = 0;
var rightY = 0;
var rightX = 0;
var leftscore = 0;
var rightscore = 0;
var songplaying1 = "";
var songplaying2 = "";


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
leftscore = results[0].pose.keypoints[9].score;
console.log("left score = " + leftscore);
leftscore = results[0].pose.keypoints[10].score;
console.log("right score = " + rightscore);

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


    fill("#66a1ff");
    stroke("#66a1ff");


    songplaying1 = grace.isPlaying();
    songplaying2 = scarynight.isPlaying();

    if(leftscore > 0.2){
        circle(leftX, leftY, 20);
        scarynight.stop();

        if(songplaying1 = "true"){

            grace.play();
            document.getElementById("um").innerHTML = "Now Playing: Grace";

        }

    }

    if(rightscore > 0.2){

        circle(rightx, righty, 20);
        grace.stop();

        if(songplaying2 = "true"){

            scarynight.play();
            document.getElementById("um").innerHTML = "Now Playing: Scary Night";

        }

    }
    
    }