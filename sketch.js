let table;
let sapling, deadflower, gravestone, pinkandwhite;

function preload() {
  table = loadTable('exquisite excel.csv','csv','header');
  sapling = loadImage('images/sapling.png');
  gravestone = loadImage('images/gravestone.png');
  deadflower = loadImage('images/deadflower.png');
  pinkandwhite = loadImage('images/pinkandwhite.jpg')
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  textAlign(CENTER,CENTER);

}

function draw() {
  background(0,0);
  nothingLasts();
  fill (random(0,255), random(0,255), random(0,255));
  textSize(60);
  text ("nothing lasts forever!", windowWidth/2, windowHeight/2);
}

function nothingLasts(){  
  
  for(x=0; x<table.getRowCount(); x ++){
    let row = table.getRow(x);
    let countExisting = row.get("existing");
    if (countExisting > 0 ){
      for (y = 0; y < countExisting; y++){
        image(sapling, random(windowWidth), random(windowHeight),80,80);
        sapling.resize(80,80);

      }
    }
    let countDisappearing = row.get("disappearing");
    if (countDisappearing > 0 ){
      for (y = 0; y < countDisappearing; y++){
        image(deadflower, random(windowWidth), random(windowHeight),80,80);
        deadflower.resize(80,80);
      
      }
    }
    let countLost = row.get("lost");
    if (countLost > 0 ){
      for (y = 0; y < countLost; y++){
        image(gravestone, random(windowWidth), random(windowHeight),80,80);
        gravestone.resize(80,80);
  
      }
    }
  }
}


