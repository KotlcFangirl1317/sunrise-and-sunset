const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    background(0)
    image(bg,0,0,1200,700)
    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var d = new Date();
    var n = d.getHours();
    if(n>4 && n<6){
        bg = loadImage("sunrise1.png")
    }
    else if(n>5 && n<7){
        bg = loadImage("sunrsie2.png")
    }
    else if(n>6 && n<8){
        bg = loadImage("sunrise3.png")
    }
    else if(n>17 && n<19){
        bg = loadImage("sunset7.png")
    }
    else if(n>18 && n< 20){
        bg = loadimage("sunset8.png")
    }
} 
