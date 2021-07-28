var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, redBubbleGroup, bulletGroup;

var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2

  blast= createSprite(100, height/2, 50,50)
  blast.addImage(blastImg)
  blast.lifetime = 20;

  bulletGroup.destroyEach()
  bubbleGroup.destroyEach()
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   

  heading= createElement("h1")
  scoreboard= createElement("h1")
  
  
}

function draw() {
  background("#BDA297");

  //display Score and number of lifes
  scoreboard.html("Score: "+score )
  scoreboard.style('colour:red');
  scoreboard.position(width-200,20);


  if(gameState===1){
    gun.y=mouseY  

    if(keyDown("space")) {
     shoot.Bullet();
    }

    if(blueBubbleGroup.collide(bulletGroup)){
        handleBubbleCollision(blueBubbleGroup);
    }
    if(blueBubbleGroup.collide(backBoard)){
       handleGameover(blueBubbleGroup)
    }
   
   
    drawSprites();

    
  }
     
}

function shootBullet() {

  bullet= createSprite(100, height/2, 50,50);
  bullet.addImage(bulletImg)
  bullet.scale=0.2 
  bullet.velocityX  += 5;
}

function drawblueBubble (){
  
  bluebubble = createSprite(800,random(20,780),40,40);
  bluebubble.addImage(blueBubbleImg);
  bluebubble.scale = 0.1;
  bluebubble.velocityX = -8;
  bluebubble.lifetime = 400;
  blueBubbleGroup.add(bluebubble);  
}

function handleBubbleCollision(bubbleGroup){
    if(life > 0){
        score=score+1;
    }
}

 handleGameOver(bubbleGroup) 
 swal({
 title: `Game Over`,
 text: "Oops you lost the game....!!!",
 text: "Your Score is" + score,
 imageUrl:
 "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios1",
 imageSize: "100x100",
 confirmButtonText: "Thanks For Playing"
 })

 