// var scaler = 10;
// var c0;
// var c1;
var creatures = [];
var input;
var amplitude;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  let fps = frameRate(15);

  // Gibber Audio
  drums = EDrums('x-x-x-x-');
  follow = Follow( drums );

  // Setup Drawing
  stroke(255, 120);

  // Create 10 Creatures, randomise parameters
  for (var i = 0; i < 10; i++) {
  creatures.push(new Creature(
      //x, y
      width * random(1), height * random(1),
      // width/2, height/2,
      // Scale
      2,
      // Multiple
      random(1),
      // Stroke Weight
      noise(random(10))));
  }
  // c1 = new Creature(3 * width/4, height/2, 2);
}

function draw() {
  background(0);
var audioScale = map(follow.getValue(), 0, 1, height, 0);
var scaleScale = map(follow.getValue(), 0, 1, 10, 30 );
// console.log(follow.getValue());
// Draw all Creatures in 'creatures' array, updating according to getLevel()
    for (var i = 0; i < creatures.length; i++) {
        creatures[i].update(width/2, audioScale, scaleScale);
        creatures[i].display();
    }   // c1.display();
}

// function mousePressed() {
// if (mousePressed) {
//
//
// }}
