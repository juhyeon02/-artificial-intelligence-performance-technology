var texts = "안녕하세요:)";
var char = [];
var up;
var down = 5;
var directionX;

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
  char = texts.split("");
  directionX - 1;
  // background(0, 255, 0);
  // textSize(12);
  // textFont('Georgia');
  // text(texts, 10, 23);
}

function draw() {
  background(0, 255, 0); //background가 없으면 글씨의 흔적이 따라다님
  textSize(25);
  if (pmouseX < mouseX) {
    directionX = -1;
  }
  if (pmouseX >= mouseX) {
    directionX = 1;
  }
  //text(char[0], mouseX, mouseY); //마우스를 따라다님
  for (var i = 0; i < char.length; i++) {
    text(char[i], mouseX + directionX * i * 30, random(mouseY - 7, mouseY + 7));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
