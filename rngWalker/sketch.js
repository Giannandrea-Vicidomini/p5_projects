
function setup() {
	createCanvas(600, 600);
	
}

function draw() {

}

class Walker{
	constructor(x,y,trail){
		this.x = x 
		this.y = y
		this.trail = trail;
	}

	walk(xOffset,yOffset){
		this.x+=xOffset
		this.y+=yOffset
	}
	
	show(){
		trail.show(this.x,this.y)
	}

}

class TrailRenderer{
	constructor(color,behaviour){
		this.color = color
		this.behaviour = behaviour
	}

	show(x, y){
		this.behaviour(x,y)
	}
}