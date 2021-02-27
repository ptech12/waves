
/* A simple sine wave using p5.js, soon to made in vanila javascript 
	If you any idea, you can suggest me. Also contribute this repo 
	for futher to be made in pure javascript
*/


let wave = [];
var theta = 0;
let slider;	
function setup(){
	smooth();
	createCanvas(800, 600);
	console.log("Setup Running");
	slider = createSlider(50, 500, 10, 10);
}
var x, y;
let n = 1;
function draw(){
	background(0);
	translate(200, 300);
	let m;
	let r = slider.value();
	
	// r -= setTimeout(()=>{return random(10, 100)}, 10);
	
	x = 0;
	y = 0;
	noFill();
	stroke(255, 100);
	ellipse(0, 0, r*2);
	
	x += r * cos(n * theta);
	y += r * sin(n * theta);	

	fill(255);
	stroke(255);
	ellipse(x, y, 8);
	line(0, 0, x, y);

	wave.unshift(y);
	
	ot = line(x, y, 200, y); // Drawing line  from outside the point
	

	translate(200, 0);	

		


	beginShape();
	noFill();
	stroke(255);
	for(let i = 0 ; i < wave.length; i++){
		// ellipse(0, 0, wave[i], );
		point(i, wave[i]-1);
	}
	endShape();
	if(wave.length > 399){
		wave.pop();
	}
	theta += 0.05;
	//r += random(10, 100);
}
