img="";
stat=""
objectDector="";
objects = [];

function preload(){
img = loadImage('dog_cat.jpg');
}

function setup(){
canvas = createCanvas(600,400);
canvas.center();

objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Object dectecting";
}

function modelLoaded(){
    console.log('Model is loaded');
    stat = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }

    console.log(results);
    objects=results;
}

function draw(){
image(img,0,0,600,400);

if(stat==true){
for(i=0;i<objects.length; i++){
document.getElementById('status').innerHTML = "Status: Object dectected";


fill('red');
noFill();
stroke('red');
percent = floor(objects[i].confidence * 100);
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
text(objects[i].label+ " "+ percent+ " % ", objects[i].x +15 , objects[i].y +15);

}
}


}