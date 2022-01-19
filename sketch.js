var parede1, parede2,parede3, parede4, parede5, parede6, parede7, parede8, parede9, parede10, parede11, parede12;


function preload(){

}



function setup(){
createCanvas(400,400);
parede1 = createSprite(50,87,100,25);
parede2 = createSprite(112,200,25,200);
parede3 = createSprite(12,250,25,325);
parede4 = createSprite(150,312,100,25);
parede5 = createSprite(125,387,225,25);
parede6 = createSprite(250,262,25,300);
parede7 = createSprite(187,187,25,225);
parede8 = createSprite(287,62,225,25);
parede9 = createSprite(300,125,100,25);
parede10 = createSprite(337,200,25,150);
parede11 = createSprite(312,312,40,75);
parede12 = createSprite(362,362,75,25);
}




function draw(){
background("red");

drawSprites();
}