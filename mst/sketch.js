"use strict"


let vertices
let edges

function setup() {
	edges = []
	vertices =[]
	
	ellipseMode(CENTER)
	createCanvas(600,600);
}

function draw() {
	background(35)
	
	
	edges = computemst()

	
	edges.forEach(element => element.show());
	vertices.forEach(element => element.show());

	let smtWeight = edges.reduce((a,b)=>{
		//console.log(a.weight,b.weight)
		return Math.round(a)+Math.round(b.weight)
	},0)
	//edges.forEach(element => console.log( element.weight));
	//console.log(smtWeight);
	//let smtWeight = sum(edges)
	textSize(50)
	stroke(120,0,0)
	fill(255,0,0)
	text(smtWeight.toString(),10,40)
	
	
}
function sum(l){
	let s =0;
	for(let el of l){
		s+=el.weight
	}
	return s
}

function computemst(){
	let explored =[]
	let unexplored =[]
	let solution = []
	

	for(let v of vertices) unexplored.push(v)

	explored.push(unexplored[0])
	unexplored.splice(0,1)

	while(unexplored.length!=0){

		
		let tempEdges = []

		for(let i =0;i<explored.length;i++){

			for(let j=0;j<unexplored.length;j++){
				let e = new Edge(explored[i],unexplored[j])
				tempEdges.push(e)
			}
		}
		let min = findMin(tempEdges)
		
		explored.push(min.p2)
		unexplored.splice(unexplored.indexOf(min.p2),1)
		solution.push(min)

	}

		
	return solution
	
}

function mousePressed(){
	let point = new Point(mouseX,mouseY)
	vertices.push(point)
}

function minimum(a,b){
	if(a.weightsMoreThan(b)) return b
	else if(b.weightsMoreThan(a))return a
	else return a
}

function findMin(l){
	if(l.length==0){
		
		return -1
	}
	let m = l[0]
	for(let e of l ){
		if(m.weightsMoreThan(e)){
			//console.log(e)
			m=e
		}
	}
	//console.log(m);
	return m
	
}
/* function computeGraph(nodes){

	if(nodes.length<2){
		
		return []
	}

	let edges=[]

	for(let i=0;i<nodes.length;i++){
		for(let j=0+i+1 ; j<nodes.length; j++){
			let newEdge = new Edge(nodes[i],nodes[j])
			edges.push(newEdge)
		}
	}
	
	let comparator = (a,b)=>{
		
		if(a.weightsMoreThan(b)) return 1
		else if(b.weightsMoreThan(a)) return -1
		else return 0
	}
	
	edges.sort(comparator)
	
	return edges
	
}

function computeMST(edges,vertices){
	let mst = []

	for(let i = 0;i<vertices.length-1;i++){

		let current = edges[i]
		if(!createsCycle(current,vertices,mst)){
			mst.push(current)
		} 
		
	}

	return mst
}

function createsCycle(edge,nodes,edges){

}
*/

class Point{
	constructor(x,y){
		this.x=x
		this.y=y
	}

	distance(other){
		return dist(this.x,this.y,other.x,other.y)
	}

	show(){
		noStroke()
		fill(255)
		ellipse(this.x,this.y,20,20)
	}

	static medianPoint(p1,p2){
		return new Point((p1.x+p2.x)/2,(p1.y+p2.y)/2)
	}
}

class Edge{
	
	constructor(p1,p2){
		this.p1=p1
		this.p2=p2
		this.weight = p1.distance(p2)
	}

	weightsMoreThan(other){
		return this.weight > other.weight
	}

	show(){
		let textPos = Point.medianPoint(this.p1,this.p2)
		stroke(126)
		strokeWeight(2)
		line(this.p1.x,this.p1.y,this.p2.x,this.p2.y)
		textSize(12);
		stroke(120,0,0)
		fill(255,0,0)
		text(Math.round(this.weight).toString(),textPos.x,textPos.y)
	}
} 