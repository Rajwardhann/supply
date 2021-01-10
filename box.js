class box1
{
    constructor(x, y, width, height)
    {
        this.body = Bodies.rectangle(x,y,width,height,{isStatic : true})
        this.height = height;
        this.width = width;
        World.add(world,this.body);
        
    }

    display()
    {
        var position = this.body.position
        push()
        translate(position.x,position.y) 
        rectMode(CENTER);
        fill("red") ;
        rect(0,0,this.width, this.height)
        pop()
    }
}