function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FyCMjwmo-/model.json", modelLoaded);
}
function draw(){
image(video, 0,0,300,300);
classifier.classify(video,gotResult);
}
function modelLoaded(){
    console.log("model loaded");
}
