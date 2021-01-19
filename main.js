function setup(){
canvas=createCanvas(300,280);
canvas.center();
video=createCapture(VIDEO);
video.hide();
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FyCMjwmo-/model.json", modelLoaded);
}
function draw(){
image(video, 0,0,300,280);
classifier.classify(video,gotResult);
}
function modelLoaded(){
    console.log("model loaded");
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
