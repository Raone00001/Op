class Polygon extends BC {

    constructor(x,y){

      super(x,y,35,35);
      this.image = loadImage("Images/hexagon.png");

    }
  
    display() {

      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();

    }

  }