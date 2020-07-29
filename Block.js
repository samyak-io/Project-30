class Block{ constructor(x, y, width, height) 
  { 
  var options = { 
    restitution :0.4, 
    friction :0.01,
    density: 0.001
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width; this.height = height; 
  World.add(world, this.body); 
} 
  display(){ 
    if(this.body.speed < 7){
      var angle = this.body.angle; 
      var pos= this.body.position; 
      strokeWeight(0.8);
      push();
      fill("blue");
      translate(pos.x, pos.y); 
      rotate(angle); 
      rectMode(CENTER);
      rect(0,0,this.width, this.height); 
      pop();
    } else {
      World.remove(world, this.body);
      push();
      this.visibility = this.visibilty - 5;
      tint(100,this.visibility);
      pop();
    }
     
    } 
  }
