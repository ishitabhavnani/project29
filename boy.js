class Boy {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.img=loadImage("sprites/boy.png")
      World.add(myWorld, this.body);
    }
    display(){
      var pos =this.body.position;
      //rectMode(CENTER);
      fill("brown");
      image(this.img,pos.x+10, pos.y, 200, 280 );
     // rect(pos.x, pos.y, this.width, this.height);
    }
  }