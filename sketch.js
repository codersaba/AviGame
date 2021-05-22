const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,R,block1,block2,block3,block4,block5,block6,block7,block8,block8,block9,block10,plane;


function setup(){
    var canvas = createCanvas(300,500);
    engine = Engine.create();
    world = engine.world    


    plane = new Plane(150,495,height,5);
    
    if (R===1){
    block1 = new Block(random(50,250),100,30,30);
   
    }
    if (R===2){
    block2 = new Block(random(50,250),100,60,30);
   
    }
    if (R===3){
    block3 = new Block(random(50,250),100,30,60);
   
    }
    if (R===4){
    block4 = new Block(random(50,250),100,60,60);
   
    }
    if (R===5){
    block5 = new Block(random(50,250),100,90,90);
   
    }
    if (R===6){
    block6 = new Block(random(50,250),100,30,90);
   
        }
    if (R===7){
    block7 = new Block(random(50,250),100,90,30);
  
    }
    if (R===8){
    block8 = new Block(random(50,250),100,60,90);
   
    }
    if (R===9){
    block9 = new Block(random(50,250),100,90,90);
    
    }

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

plane.display();
   

    R=random(1,9);
    if (World.frameCount%100===0){
        blocks();
        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        block6.display();
        block7.display();
        block8.display();
        block9.display();
        
    }
   
      
}

function blocks(){
   
    }

