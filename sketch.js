const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball1,ball2;
var ball3,ball4,ball5;
var ball6,attackBall7;

var engine, world;

var score = 0;

function preload() {
   }

function setup(){
    var canvas = createCanvas(600,600);   
    engine = Engine.create();
    world = engine.world

    ball1 = new Ball1(300,80);
   
    ball2 = new Ball2(300,150);

    ball3 = new Ball3(300,250);

}

function draw(){
   background("green");
   
  Engine.update(engine);

  ball1.display();

  ball2.display();

  ball3.display();
}