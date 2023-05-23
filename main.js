var nosex=0;
var nosey=0;
function preload(){

}
function setup(){
  canvas=createCanvas(600,400);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(600,400);
  video.hide();

  posenet=ml5.poseNet(video,modelLoaded);
  posenet.on('pose',gotPoses);

  function modelLoaded(){
    console.log('posenet');
  }
}
function draw(){
image(video,0,0,600,400);
fill('red');
stroke('white');

}
function takePicture(){
    save("myPicture.png");
}
function gotPoses(results){
  if(results.length>0){
    console.log(results);
    console.log("nosex"+results[0].pose.nose.x);
    console.log("nosey"+results[0].pose.nose.y);
    nosex=results[0].pose.nose.x
    nosey=results[0].pose.nose.y
  }
}