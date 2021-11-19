var start, startImage

var car, carImage

var obstacle, obstacleImage

var road, roadImage



function preload(){
   
  
  
   startImage = loadImage("start.gif");
   carImage = loadImage("car.png");
   obstacleImage = loadImage("Obstacle.png")
   roadImage = loadImage("Road.png")



}

function setup() {
  createCanvas(600, 400)
  
  start = createSprite(250, 200)
  start.addImage(startImage)
  start.scale = 3
  start.visible = true

  road = createSprite(400, 150, 800, 400)
  road.addImage(roadImage)
  road.scale = 8
  road.depth = 0.1
  road.visible = false  
  road.x = road.width  ;
  
  car = createSprite(200, 200)
  car.addImage(carImage)
  car.scale = 1.2
  car.visible = false

  obstacle = createSprite(600, 200 )
  obstacle.addImage(obstacleImage)
  obstacle.scale = 2
  obstacle.velocityX = -3  
  obstacle.visible = false
  obstacle.debug = true
  obstacle.setCollider("circle", 0, -20, 10)
  
  
  road.velocityX = -1 
 
  
}

function draw() {
    background(200)
    
    

    if (road.x < 300){
      road.x = 600 ;
    }
    road.velocityX = -1 
    
    if(mousePressedOver(start)){
     start.visible = false
    car.visible = true
    road.visible = true
    obstacle.visible = true
    
    }

    car.y = World.mouseY
    
    

    if(frameCount % 100 == 0 ){

      obstacle.y = Math.round(random(10,350));
    }


    
   
    if(obstacle.x < 0){
     obstacle.x = 600
    }


   if(car.isTouching(obstacle)){
     start.visible = true
     car.visible = false
     road.visible = false
     obstacle.visible = false
 
    
    }

    
    text("Cartastrophe", 250, 10)
    
    
    drawSprites()
}