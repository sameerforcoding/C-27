class Rope{
    constructor(body1,body2, offsetX, offsetY)
	{
	
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:this.offsetY}
        }
			//console.log(options);
            this.rope=Matter.Constraint.create(options);
            World.add(world,this.rope);
        rope1=new rope(bobObjects1.body,roofBody.body,-bobDiameter*2,0);
        
    }	
}
