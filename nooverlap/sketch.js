let circles = []

function setup() {
	createCanvas(600, 600);
	ellipseMode(CENTER)
	
	for(let i=0;i<30;i++)
	{
		
		let isValid = true
		let r = random(25,45)
		let circle = new Circle(random(width),random(height),r*2,r*2)

		for(let c of circles){
			
			//console.log(circle.isCollidingCircle(c))
			if(circle.isCollidingCircle(c)){
				isValid = false
			}
		}

		if(isValid){
			circles.push(circle)
		}
		

	}

}

function draw() {
	for(let c of circles){
		c.show()
	} 
	
}

/* function mousePressed(){
	let newCircle = new Circle(mouseX,mouseY,random(45,85),random(45,85))
	var isValid = true
	for(let c of  circles){
		if(newCircle.isColliding(c)){
			isValid = false
		}
	}

	if(isValid){
		circles.push(newCircle)
	}
}
 */
class Circle{

	constructor(x,y,w,h){

		this.x=x
		this.y=y
		this.w=w
		this.h=h
		this.xPos = this.x+(this.w/2)
		this.yPos = this.y+(this.h/2)
		this.xBeg = this.x-(this.w/2)
		this.yBeg = this.y-(this.h/2)

	}

	isColliding(other){
		let xAxis = this.xPos>=other.xBeg && other.xPos >= this.xBeg

		let yAxis = this.yPos>=other.yBeg && other.yPos>=this.yBeg

		return xAxis && yAxis
	}

	isCollidingCircle(other){
		let d = dist(this.x,this.y,other.x,other.y)
		
		return d<this.w/2+other.w/2 

	}

	show(){
		stroke(0)
		fill(255)
		ellipse(this.x,this.y,this.w,this.h)
	}
}
