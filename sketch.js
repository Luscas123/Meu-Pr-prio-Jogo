var background 
var playerImg, playerSideImg, playerBackImg
var player
var pistol, frontPistol, sidePistol, backPistol
var balas,bala, balaImg
var shotDirection = null

function preload(){

backgroundImg = loadImage ("./character/Cenario/Canario.jpg")
playerImg = loadImage("./character/player/frontGif.gif")
playerSideImg = loadImage("./character/player/sideGif.gif")
playerBackImg = loadImage("./character/player/backGif.gif")
playerIdleImg = loadImage("./character/player/idle.png")
playerIdleSideImg = loadImage("./character/player/idleside.png")
playerIdleBackImg = loadImage("./character/player/idleback.png")
frontPistol = loadImage("./Gun/FrontPistol.png")
sidePistol = loadImage("./Gun/SidePistol.png")
backPistol = loadImage("./Gun/BackPistol.png")
balaImg = loadImage("./Bullet/bullet.png");

}

function setup(){
createCanvas(1500,700);
player = createSprite(960,750,200,200);
player.addImage("front",playerIdleImg);
player.addImage("frente",playerImg);
player.addImage("lado",playerSideImg);
player.addImage("costas",playerBackImg);
player.addImage("side",playerIdleSideImg);
player.addImage("back",playerIdleBackImg);
player.scale= 2

pistol = createSprite(800,800,200,200)
pistol.addImage("sideP", sidePistol)
pistol.addImage("frontP", frontPistol)
pistol.addImage("backP", backPistol)

pistol.scale = 0.06



}

function draw() {
   background("black");
    image(backgroundImg,0,0,2400,2000);


    console.log(shotDirection);

    controles();
    drawSprites();


    
}

function controles(){

    if (keyIsDown(RIGHT_ARROW)){
        player.x += 5
        player.changeImage("lado")
        pistol.changeImage("sideP")
        pistol.x = player.x+40;
        pistol.y = player.y+ 20;
        player.mirrorX(-1);
        pistol.mirrorX(+1);
        pistol.scale = 0.06
        pistol.depth = 99
        shotDirection = "Right"
    }
    if (keyIsDown(LEFT_ARROW)){
        player.x -= 5
        player.changeImage("lado")
        pistol.changeImage("sideP")
        pistol.x = player.x-40;
        pistol.y = player.y+ 20;
        player.mirrorX(+1);
        pistol.mirrorX(-1);
        pistol.scale = 0.06
        pistol.depth = 99


        shotDirection = "Left"
    }
    if (keyIsDown(UP_ARROW)){
        player.y -= 5
        player.changeImage("costas")
        pistol.changeImage("backP")
        pistol.x = player.x;
        pistol.y = player.y - 20;
        pistol.mirrorX(+1)
        pistol.scale = 0.09
        pistol.depth = 99
        shotDirection = "Up"

    }

    if (keyIsDown(UP_ARROW)&& keyIsDown(LEFT_ARROW)){
        player.x -= 5
        player.y -= 5
        player.changeImage("lado")
        pistol.changeImage("sideP")
        player.shotDirection = "NO"
        pistol.x = player.x-40;
        pistol.y = player.y+ 20;
        player.mirrorX(+1);
        pistol.mirrorX(-1);
        pistol.scale = 0.06
        pistol.depth = 99
        
    }

    if (keyIsDown(DOWN_ARROW)){
        player.y += 5
        player.changeImage("frente")
        pistol.changeImage("frontP")
        pistol.x = player.x+7;
        pistol.y = player.y+ 30
        pistol.mirrorX(+1)
        pistol.scale = 1
        pistol.depth = 101
        shotDirection = "Down"
    }

    if (player.x < 750){
        camera.position.x = 750
    } else if (player.x>1650){
        camera.position.x = 1650
    } else {
    camera.position.x = player.x;
    
    }
    if (player.y < 355){
        camera.position.y = 355
    } else if (player.y>1650){
        camera.position.y = 1650
    } else {
    camera.position.y = player.y;
    }

    

    player.depth = 100
}


function keyReleased(){
    if (keyCode===UP_ARROW ) {
        player.changeImage("back")
    }
    if (keyCode===RIGHT_ARROW ) {
        player.changeImage("side")
    }
    if (keyCode===LEFT_ARROW ) {
        player.changeImage("side")
    }
    if (keyCode===DOWN_ARROW ) {
        player.changeImage("front")
    }
    if (keyCode===UP_ARROW && LEFT_ARROW){
        shotDirection = "NO"
    }

}

function keyPressed(){
    if(keyCode===32){
        bala = createSprite(pistol.x, pistol.y - 6)
        bala.addImage("bullet", balaImg)
        bala.scale= 0.09

        bala.depth = -1000
        
        if (shotDirection==="Up"){
            bala.velocityY = -10
            bala.rotation = 270
            bala.y = pistol.y - 6
            bala.depth = -1000
        } else if(shotDirection==="Down"){
            bala.velocityY= 10
            bala.rotation = 90
            
            bala.y = pistol.y - 16

            bala.depth = 102;
        } else if(shotDirection==="Left"){
            bala.velocityX = -10
            bala.rotation = 180
            bala.depth = -1000
        } else if(shotDirection === "Right"){
            bala.velocityX= 10
            bala.rotation = 0
            bala.depth = -1000
        } else if(shotDirection === "NO"){
            bala.velocityX = -10
            bala.velocityY = -10
            bala.rotation = 225
            bala.depth = -1000
        }
    }

}
