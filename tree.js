class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.img=loadImage("sprites/tree.png")
      World.add(myWorld, this.body);
    }
    display(){
      image(this.img , 400,100,450,600)
      //var pos =this.body.position;
      //rectMode(CENTER);
     
      //rect(pos.x, pos.y, this.width, this.height);
    }
  }