
// Jitter class
class Particle {
  constructor(x_,y_,z_,a_,b_,c_,dt_) {
    this.radius = random(0.01,0.5);
    this.dt = 0.001;
    this.dx = 0;
    this.dy = 0;
    this.dz = 0;


    this.a = a_ + random(1,10);
    this.b = b_ + random(1,10);
    this.c = c_ + random(1,10);
    this.x = x_;
    this.y = y_;
    this.z = z_;
  }

  update() {

    this.dx = (this.a* (this.y - this.x)) *this.dt;
    this.dy =  (this.x* (this.b-this.z)-this.y) *this.dt;
    this.dz = (this.x*this.y - this.c*this.z)  *this.dt;

    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
    this.z = this.z + this.dz;

  }

  show() {
    fill(255);
    noStroke();
    push();
    translate(this.x, this.y, this.z);
    if (random(0,1)>0.5){
      texture(mars);
    }
    else {
      texture(moon);
    }
    sphere(this.radius);
    pop();



  }


  adjust(){
    this.a = slider_a.value();
    this.b = slider_b.value();
    this.c = slider_c.value();


  }
}
