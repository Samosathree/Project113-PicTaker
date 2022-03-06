function preload(){
}
 
function setup(){
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 4;
    ctx.arc(250, 210, 40, 0, 2 * Math.PI);
    ctx.stroke();
}
 
function draw(){
    image(video, 0, 0, 640, 480);
}
 
function take_snapshot(){
    save('HappyBday.png');
}
 

