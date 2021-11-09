noseX=0;
noseY=0;


function preload(){
    moustache=loadImage('https://i.postimg.cc/W4hsRb2h/m.png');
    }
    
    function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    }
    
    function modelLoaded(){
        console.log("poseNet has been initialised")
    }
    
    function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
    }
    
    }
    
    function draw(){
    image(video,0,0,300,300);
    image( moustache,noseX,noseY+10,30,30);
    }

    function save_img(){
        save('my_img_filter.png');
    }