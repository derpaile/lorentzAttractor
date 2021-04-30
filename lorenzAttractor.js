
var particles = [];
var rotationvalue = 0;

var slider_a;
var slider_b;
var slider_c;
var slider_scaling;

var rotOffset = 0.01;
var noiseOffset = 0.01;
var x_cam = 0;

var img;


function setup(){
  createCanvas(1920, 1080, WEBGL);
  fullscreen()
  createSliders();
  colorMode(HSB);
//  frameRate(1);


  button = createButton('Reset');
  button.mousePressed(reset);


  translate(width/2,height/2);
}



function draw(){

  background(10);

  getSlider();

if (particles.length < 50){
  createParticle();
  console.log(particles.length)

}



  rotateY(rotOffset);
  rotOffset += 0.01;
  translate(0,0,-80);
  scale(scaling)





  for (let j = 0; j< particles.length; j++){
    particles[j].update();
    particles[j].show();
    particles[j].adjust();


  }




}


function createParticle(){
  let x = 0.01;
  let y = 0.0;
  let z = 0.0;
  let a = 100;
  let b = 28;
  let c = 8.0/3.0;
  let dt = 0.003;

  let particle = new Particle(x+random(0,5),y+random(0,5),z+random(0,5),a,b,c,dt);
  particles.push(particle);




}




function createSliders(){
  slider_a = createSlider(0.1,100,100,0);
  slider_b = createSlider(0.1,100,28,0);
  slider_c = createSlider(0.1,10,8.0/3.0,0);
  slider_scaling = createSlider(1,20,10,0);
}

function getSlider(){
  a = slider_a.value();
  b = slider_b.value();
  c = slider_c.value();
  scaling = slider_scaling.value();
}

function reset(){
  particles = [];
  getSlider();
}

//  function mouseDragged(){
//   rotOffset += 0.02;
// }


function preload(){
  mars = loadImage('mars.jpg');
  moon = loadImage('moon.jpg')
}
