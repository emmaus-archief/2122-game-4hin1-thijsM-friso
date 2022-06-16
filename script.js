/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library
   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 8;
var spelStatus = SPELEN;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_UP = 38;
const KEY_DOWN = 40;

var spelerX = 640; // x-positie van speler
var spelerY = 360; // y-positie van speler

var vijandX1 = 600;
var vijandY1 = 500;

var vijandX2 = 1000;
var vijandY2 = 900;

var vijandX3 = 1000;
var vijandY3 = 900;

var vijandX4 = 1000;
var vijandY4 = 900;

var vijandX5 = 1000;
var vijandY5 = 900;

var vijandX6 = 1000;
var vijandY6 = 900;



let img; //plaatje
let img2; //plaatje 2
let img3; //plaatje 3
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
 if (keyIsDown(KEY_LEFT)) {

  
  spelerX = spelerX -5;
 }
if (keyIsDown(KEY_RIGHT)) {

  spelerX = spelerX +5;
}
  if (keyIsDown(KEY_UP)) {

    spelerY = spelerY -5;
  }
  if (keyIsDown(KEY_DOWN)) {

    spelerY = spelerY +5;
  }
  // vijand
  
  vijandX1 = vijandX1 - 5;
if (vijandX1 && vijandX1 <0) { 
    vijandX1 = 1280
    vijandY1 = random(100,700);
  }

  vijandX2 = vijandX2 - 7;
if (vijandX2 && vijandX2 <0) { 
    vijandX2 = 1280
    vijandY2 = random(100,700);
  }

   vijandX3 = vijandX3 - 10;
if (vijandX3 && vijandX3 <0) { 
    vijandX3 = 1280
    vijandY3 = random(100,700);
  }

   vijandX4 = vijandX4 - 12;
if (vijandX4 && vijandX4 <0) { 
    vijandX4 = 1280
    vijandY4 = random(100,700);
  }

   vijandX5 = vijandX5 - 9;
if (vijandX5 && vijandX5 <0) { 
    vijandX5 = 1280
    vijandY5 = random(100,700);
  }

  vijandX6 = vijandX6 -8;
if (vijandX6 && vijandX6 <0) { 
    vijandX6 = 1280
    vijandY6 = random(100,700);
  }

 
  // kogel


};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
  if (spelerX - vijandX1 <50 &&
      spelerX - vijandX1 >-50 &&
      spelerY - vijandY1 <50 &&
      spelerY - vijandY1 >-50) {
      console.log("Botsing");
      }

  if (spelerX - vijandX2 <50 &&
      spelerX - vijandX2 >-50 &&
      spelerY - vijandY2 <50 &&
      spelerY - vijandY2 >-50) {
      console.log("Botsing");
      }

   
  if (spelerX - vijandX3 <50 &&
      spelerX - vijandX3 >-50 &&
      spelerY - vijandY3 <50 &&
      spelerY - vijandY3 >-50) {
      console.log("Botsing");
      }

  if (spelerX - vijandX4 <50 &&
      spelerX - vijandX4 >-50 &&
      spelerY - vijandY4 <50 &&
      spelerY - vijandY4 >-50) {
      console.log("Botsing");
      }

  if (spelerX - vijandX5 <50 &&
      spelerX - vijandX5 >-50 &&
      spelerY - vijandY5 <50 &&
      spelerY - vijandY5 >-50) {
      console.log("Botsing");
      }

  if (spelerX - vijandX6 <50 &&
      spelerX - vijandX6 >-50 &&
      spelerY - vijandY6 <50 &&
      spelerY - vijandY6 >-50) {
      console.log("Botsing");
      }
    
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill('black');
  rect(0, 0, 1280, 720);
  fill('white');
  rect(550, 310, 200, 50);
  fill('white');
  rect(100, 310, 200, 50);
  fill('white');
  rect(1000, 310, 200, 50);
  // vijand
  image(img, vijandX1-60, vijandY1-40, 100, 100);
  image(img, vijandX2-60, vijandY2-40, 100, 100);
  image(img, vijandX3-60, vijandY3-40, 100, 100);
  image(img, vijandX4-60, vijandY4-40, 100, 100);
  image(img, vijandX5-60, vijandY5-40, 100, 100);
  image(img, vijandX6-60, vijandY6-40, 100, 100);
  // kogel

  // speler
  

  image(img2, spelerX-60, spelerY-40, 100, 100);
  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  if (spelerX - vijandX1 <50 &&
      spelerX - vijandX1 >-50 &&
      spelerY - vijandY1 <50 &&
      spelerY - vijandY1 >-50) {
      console.log("Botsing");  
    return true;
  }
  if (spelerX - vijandX2 <50 &&
      spelerX - vijandX2 >-50 &&
      spelerY - vijandY2 <50 &&
      spelerY - vijandY2 >-50) {
      console.log("Botsing");  
    return true;
  } 
  if (spelerX - vijandX3 <50 &&
      spelerX - vijandX3 >-50 &&
      spelerY - vijandY3 <50 &&
      spelerY - vijandY3 >-50) {
      console.log("Botsing");  
    return true;
  }
  if (spelerX - vijandX4 <50 &&
      spelerX - vijandX4 >-50 &&
      spelerY - vijandY4 <50 &&
      spelerY - vijandY4 >-50) {
      console.log("Botsing");  
    return true;
  }
  if (spelerX - vijandX5 <50 &&
      spelerX - vijandX5 >-50 &&
      spelerY - vijandY5 <50 &&
      spelerY - vijandY5 >-50) {
      console.log("Botsing");  
    return true;
  }
  if (spelerX - vijandX6 <50 &&
      spelerX - vijandX6 >-50 &&
      spelerY - vijandY6 <50 &&
      spelerY - vijandY6 >-50) {
      console.log("Botsing");  
    return true;
  }
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */
function preload() {
  img = loadImage('car.png');
  img2 = loadImage('auto.png');
  img3 = loadImage('weg.png');
}
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
   background('black');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
    console.log("spelen");
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
console.log("game over");
 textSize(50);
fill("white");
    text("gecrashed, druk op spatie om opnieuw te proberen", 100, 250);
   if (keyIsDown(32)) {
     spelerX = 400;
     vijandX1 = 1280;
     vijandX2 = 1280;
     vijandX3 = 1280;
     vijandX4 = 1280;
     vijandX5 = 1280;
     vijandX6 = 1280;
     vijandY1 = random(100,700);
     vijandY2 = random(100,700);
     vijandY3 = random(100,700);
     vijandY4 = random(100,700);
     vijandY5 = random(100,700);
     vijandY6 = random(100,700);
     spelStatus = SPELEN;
   }
  }
if (spelStatus === UITLEG) {
  // teken uitleg game-over
console.log("UITLEG");


}
  

}
  
