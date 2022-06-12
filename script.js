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

var vijandX = 600;
var vijandY = 500;

let img; //plaatje
let img2; //plaatje 2
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

  // kogel


};
0
/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
  if (spelerX - vijandX <50 &&
      spelerX - vijandX >-50 &&
      spelerY - vijandY <50 &&
      spelerY - vijandY >-50) {
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
 fill('blue')
  rect(0,0,1280,720);
  // vijand

  image(img, vijandX-40, vijandY-60, 100, 100);
  // kogel

  // speler
  

  image(img2, spelerX-90, spelerY-40, 130, 80);
  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  if (spelerX - vijandX <50 &&
      spelerX - vijandX >-50 &&
      spelerY - vijandY <50 &&
      spelerY - vijandY >-50) {
      console.log("Botsing");  
    return true;
  }
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */
function preload() {
  img = loadImage('steen.png');
  img2 = loadImage('auto.png');
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
  background('green');
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
 textSize(69);
fill("white");
    text("game over, druk spatie voor start", 190, 300);
   if (keyIsDown(32)) {
     spelerX = 400;
     spelStatus = SPELEN;
   }
  }
if (spelStatus === UITLEG) {
  // teken uitleg game-over
console.log("UITLEG");


}
  

}
  
