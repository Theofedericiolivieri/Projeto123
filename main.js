difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
video=createCapture(VIDEO);
video.size(550, 500);
canvas=createCanvas(550,500);
canvas.position(560,150);
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!')
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference= floor(leftWristX- rightWristX);
        console.log("leftWristX = " + leftWristX+ "rightWristX = "+ rightWristX+ "difference= "+ difference);
    }
}
function draw(){
    background('white');
    document.getElementById("text").innerHTML="Largura e altura serão = "+ difference+"px";
    fill("#008C8C");
    textSize(difference);
    text("Théo", 275, 250);
}