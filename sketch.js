var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
  database = firebase.database();
  console.log(database);
  
	dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(450,250,5,5)
  dog.addImage(dogImg)
  dog.scale = 0.2


  foodStock = database.ref('Food');
    foodStock.on("value",readStock);

    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(dogHappy);

    }
}


function draw() {  
background(46, 139, 87)
  drawSprites();
  

}

function readStock(data){
  foodS = data.val();

}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  }

  database.ref('/').update({
    Food:x
  })




