
class Vehicle {
    constructor(x, y) {
      this.acceleration = createVector(0, 0);
      this.velocity = createVector(0, -2);
      this.position = createVector(x, y);
      this.size = 4;
      this.maxspeed = 5;
      this.maxforce = 0.5;

      this.health = 1;


      this.dna = [];
      this.dna[0] = random(-5,5);
      this.dna[1] = random(-5,5);
      

    }
  
    // Method to update location
    update() {
      this.health -= 0.01;
      // Update velocity
      this.velocity.add(this.acceleration);
      // Limit speed
      this.velocity.limit(this.maxspeed);
      this.position.add(this.velocity);
      // Reset accelerationelertion to 0 each cycle
      this.acceleration.mult(0);
    };
  
    applyForce(force) {
      // We could add mass here if we want A = F / M
      this.acceleration.add(force);
    };

    behaviors(good,bad){
        let steerG = this.eat(good,0.5);
        let steerB = this.eat(bad,-0.5);

        steerG.mult(this.dna[0]);
        steerB.mult(this.dna[1]);

        this.applyForce(steerG);
        this.applyForce(steerB);
    }

    eat(list,nutrition){
        let record = Infinity;
        let closest = -1;
        for(let i = 0; i<list.length; i++){
            let distance = this.position.dist(list[i]);
            if(distance<record){
                record = distance;
                closest = i;
            }
        }
        if(record<5){
            list.splice(closest,1);
            this.health += nutrition;
        }else if(closest > -1){
            return this.seek(list[closest]);
        }
        return createVector(0,0);
        
    }
  
    // A method that calculates a steering force towards a target
    // STEER = DESIRED MINUS VELOCITY
    seek(target) {
  
      var desired = p5.Vector.sub(target, this.position); // A vector pointing from the location to the target
  
      // Scale to maximum speed
      desired.setMag(this.maxspeed);
  
      // Steering = Desired minus velocity
      var steer = p5.Vector.sub(desired, this.velocity);
      steer.limit(this.maxforce); // Limit to maximum steering force
  
    return steer;
    //   this.applyForce(steer);
    }
  
    dead(){
        return (this.health<0);
    }

    display() {
      // Draw a triangle rotated in the direction of velocity
      var angle = this.velocity.heading() + PI / 2;
    
      push();
      translate(this.position.x, this.position.y);
      rotate(angle);

      stroke(255,0,0);
      line(0,0,0,-this.dna[0]*20);
      stroke(0,255,0);
      line(0,0,0,-this.dna[1]*20);

      let green = color(255,0,0);
      let red = color(0,255,0);
      let colorActual = lerpColor(green,red,this.health)

      fill(colorActual);
      stroke(colorActual);
      strokeWeight(1);
      beginShape();
      vertex(0, -this.size * 2);
      vertex(-this.size, this.size * 2);
      vertex(this.size, this.size * 2);
      endShape(CLOSE);

      

      pop();
    }
  }