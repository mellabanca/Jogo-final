var parede1, parede2, parede3, parede4, parede5, parede6, parede7, parede8, parede9, parede10, parede11, parede12,parede13,parede14,parede15,parede16;
var jogador, Pc1, Pc2;
var fundo1,fundo2,fundo3;
var luffy,Kaido;
var Grupoparede1, Grupoparede2;
var estado = "Fase1";
var Titan_Fundador,Titan_Blindado;
var borda;

function preload(){
fundo1 = loadImage("./Imagens/Tela de fundo 1.png");
fundo2 = loadImage("./Imagens/shingashina.jpg")
luffy = loadAnimation("./Imagens/Luffy.png");
Kaido = loadAnimation("./Imagens/Kaido.png");
Titan_Fundador = loadAnimation("./Imagens/Titã Eren.png");
Titan_Blindado = loadAnimation("./Imagens/Titã blindado.png");
}


function setup(){
createCanvas(400,400);

borda = createEdgeSprites();

Fase1();

jogador = createSprite(50,140,15,15);
jogador.addAnimation("Luffy", luffy);
jogador.addAnimation("Eren",Titan_Fundador);
jogador.scale = 0.07;

Pc1 = createSprite(120,50,15,15);
Pc1.addAnimation("Kaido", Kaido);
Pc1.scale = 0.1;

Pc2 = createSprite(350,300,15,15);
Pc2.addAnimation("Blindado",Titan_Blindado);
Pc2.scale = 0.08;
Pc2.velocityX = -2;
Pc2.velocityY = 3;
Pc2.visible = false;

}


function draw(){
if(estado ==="Fase1"){
    background(fundo1);
}

if(estado === "Fase2"){
    background(fundo2);
}

moveJogador();

jogador.bounceOff(borda);
Pc2.bounceOff(borda);

if(jogador.isTouching(Grupoparede1)){
    jogador.x = 50;
    jogador.y = 140;
}

if(jogador.isTouching(parede11)||jogador.isTouching(parede12)){
    jogador.x = 50;
    jogador.y = 50;
    Grupoparede1.destroyEach();
    parede11.destroy();
    parede12.destroy();
    Pc1.destroy();
    Pc2.visible = true;
    estado = "Fase2";
    Fase2();
}

if(estado === "Fase2"){
    jogador.changeAnimation("Eren",Titan_Fundador);
    jogador.scale = 0.2;
    Pc2.bounceOff(Grupoparede2)
}

drawSprites();
}

function moveJogador(){
    if(keyDown("UP")){
        jogador.y -=2;
    }
    
    if(keyDown("Down")){
        jogador.y +=2;
    }
    
    if(keyDown("LEFT")){
        jogador.x -=2;
    }
    
    if(keyDown("RIGHT")){
        jogador.x +=2;
    }
}

function Fase1(){
Grupoparede1 = createGroup();
/*parede1 = createSprite(50,87,100,25);
parede2 = createSprite(112,200,25,200);
parede3 = createSprite(12,250,25,325);
parede4 = createSprite(150,280,85,25);
parede5 = createSprite(125,387,225,25);
parede6 = createSprite(250,262,25,300);
parede7 = createSprite(170,150,25,225);
parede8 = createSprite(287,30,225,25);
parede9 = createSprite(300,125,100,25);
parede10 = createSprite(337,200,25,150);*/
parede11 = createSprite(312,312,40,75);
parede12 = createSprite(362,362,75,25);
/*Grupoparede1.add(parede1);
Grupoparede1.add(parede2);
Grupoparede1.add(parede3);
Grupoparede1.add(parede4);
Grupoparede1.add(parede5);
Grupoparede1.add(parede6);
Grupoparede1.add(parede7);
Grupoparede1.add(parede8);
Grupoparede1.add(parede9);
Grupoparede1.add(parede10);*/
}

function Fase2(){
Grupoparede2 = createGroup();
parede13 = createSprite(200,0,400,10);
parede14 = createSprite(400,200,10,400);
parede15 = createSprite(200,400,400,10);
parede16 = createSprite(0,200,10,400);
Grupoparede2.add(parede13);
Grupoparede2.add(parede14);
Grupoparede2.add(parede15);
Grupoparede2.add(parede16);
}