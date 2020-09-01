

let time
let trail1
let walker

let operator = (x,y,color)=>{
	angleMode(DEGREES)
	let radius = 50
	let x1 = radius* cos(time)
	let y1 = radius* sin(time)

	stroke(255)
	fill(color)
	ellipse(x+x1,y+y1,5,5)
	//point(x+x1,y+y1)

}

function setup() {

	createCanvas(600, 600);
	trail1 = new TrailRenderer(color(0,0,0),operator)
	walker = new Walker(width/2,height/2,trail1)
	time = 0
	console.log(walker);
	
}

function draw() {
	
	time+=1.5
	walker.walk(random(-4,4),random(-4,4))
	//walker.walk(mouseX,mouseY)
	walker.show()
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
		/* let r = random(0,4)
		if(r==0){
			this.x+=1
		}
		else if(r==1){
			this.x-=1
		}
		else if (r==2){
			this.y+=1
		}
		else{
			this.y-=1
		} */
	}
	
	show(){
		this.trail.show(this.x,this.y)
	}

}

class TrailRenderer{
	constructor(color,behaviour){
		this.color = color
		this.behaviour = behaviour
	}

	show(x, y){
		this.behaviour(x,y,this.color)
	}
}