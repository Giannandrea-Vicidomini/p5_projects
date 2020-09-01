function setup() {
	createCanvas(600, 600);
}

function draw() {

}

class Walker{
	constructor(x,y,trail){
		this.x = x 
		this.y = y
	}

	walk(xOffset,yOffset){
		this.x+=xOffset
		this.y+=yOffset
	}
	
	show(){

	}

}

class TrailRenderer{
	constructor(color){
		
	}
}