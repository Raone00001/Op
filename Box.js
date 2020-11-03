class Box extends BaseClass {

    constructor(x, y){

      super(x, y,30,40);

    }

    display(){

      console.log(this.body.speed);

      if (this.body.speed < 3){

        super.display();
  
      } else {
  
        World.remove(world,this.body);
        
        push();
        this.visibility = this.visibility-5;
        tint(255,this.visibility);
        pop();
  
      }


    }
  
  }
  