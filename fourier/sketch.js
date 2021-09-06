let time = 0;
let waves = []
let slider;
let timeSlider;
function setup() {
    createCanvas(710, 400);
    slider = createSlider(1, 100, 1, 1);
    timeSlider = createSlider(0.05, 10, 0.05, 0.01);
}
let x, y;
let n;
// (4  * sin * n * time) / PI
function draw()
{
    background(0);
    x = 0;
    y = 0;
    translate(200, 200);

   for(let i = 0; i < slider.value(); ++i)
   {
    let prevx = x;
    let prevy = y;
    n = i * 2 + 1; 
    let r = 75 * (4 / (n * PI));
    x += r * cos(n * time);
    y += r * sin(n * time);
   
    noFill();
    stroke(255);
    ellipse(prevx, prevy, r*2);

    ellipse(x, y, 8);
    stroke(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
    line(prevx, prevy, x, y);
    
   
   }
   noFill();
   waves.unshift(y);

    translate(200, 0);
    line(x-200, y, 0, waves[0]);

    beginShape();
    for(let i=0; i<= waves.length; ++i)
    {
        vertex(i, waves[i]);   
    }
    endShape();

    time += timeSlider.value();
    if(waves.length >= 300)
        waves.pop();
document.getElementById("time").innerHTML =  "Speed: " + timeSlider.value();
document.getElementById("count").innerHTML =  "Circle Count: " + (slider.value()-1);
    
}