class mango 
{
    constructor(x,y,r)
    {
        var options=
        {
            isStatic:true,
         
            friction:1
        }
        this.body=Bodies.circle(x,y,r,options)
        this.r=r;
        World.add(world,this.body)

        this.image=loadImage("Plucking mangoes/mango.png")
        
    }

    display()
    {
        var mangopos=this.body.position

        imageMode(CENTER);
        image(this.image,mangopos.x,mangopos.y,this.r,this.r);
    }
}
