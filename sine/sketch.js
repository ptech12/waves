let wave = [];
var theta = 9;
function setup(){
	createCanvas(800, 600);
	console.log("Setup Running");
}
var x, y;
let n = 0;
function draw(){
	background(0);
	translate(300, 300);
	var r = 75 * (4 * (1 / PI)); // Radius of the circle
	for(let i=0; i < 2; i++){
		n = i * 2 + 1;
		// Polar to cartesian transformation. Now we using the mathematical term of FOURIER SERIS
		x = r * cos(n * theta);
		y = r * sin(n * theta);
		wave.unshift(y); // Adding the y value to wave array
	}
	noFill();
	stroke(255);
	ellipse(0, 0, r*2); // Drawing the circle
	// Drawing the point around the circle uing above (x, y) values
	fill(255);
	ellipse(x, y, 8); 
	line(0, 0, x, y); // drawing line from center to the point 
	line(x, y, 200, y); // Drawing line  from outside the point
	// outer circle
	noFill();
	stroke(255);
	ellipse(0, 0, r*1.5);
	fill(255);
	ellipse(x*1.8, y*1.8, 8);
	noFill();
	translate(200, 0);	
	beginShape();
	noFill();
	for(let i = 0 ; i < wave.length; i++){
		// ellipse(0, 0, wave[i], );
		point(i, wave[i]-1);
	}
	endShape();
	if(wave.length > 400){
		wave.pop();
	}
	theta += 0.05;
}