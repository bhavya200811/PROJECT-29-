class Ground {
    constructor() {
      var ground_options= {
          isStatic: true
      }
      this.ground = Bodies.rectangle(450,390,900,20,ground_options);
      //this.width = width;
      //this.height = height;
      World.add(world, this.ground);
    }
    display(){
      noStroke();
      fill(188,67,67);
      rectMode(CENTER);
      rect(this.ground.position.x,this.ground.position.y,900,20);
      //var pos =this.body.position;
      //rect(pos.x, pos.y, this.width, this.height);
    }
}
      
  