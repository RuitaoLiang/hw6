var freqA = 174;
var oscA;
var playing = false;
var a = 0;

function setup() {
	createCanvas(200,200)
  backgroundColor = color(255, 0, 255);
	
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
}

function loaded() {
  oscA.play();
}

function draw() {

  if (playing && a === 0) {
    background(0, 255, 0);
   	textSize(24);
		fill(255);
 text('volume(0.9)', width / 2, height / 2);
   
  } else if (playing && a === 1) {
    background(255, 255, 0);
     	textSize(24);
		fill(0);
    text('volume(0.5)', width / 2, height / 2);
  } else if (playing && a === 2) {
    background(255, 0, 0);
     	textSize(24);
		fill(0);
    text('volume(0.1)', width / 2, height / 2);
	
  } else{
	
    background(255, 0, 255);
		fill(51);
	rect(20, 20, 150, 150);	
	
  }
	 print(playing);
    print(a);
}

function mousePressed() {
	a++;
  var osc;
    osc = oscA;
  if (osc &&  a === 0) {
    osc.amp(0.9, 0.1);
    playing = true;
  } else if (osc && a === 1) {
    osc.amp(0.5);
     playing = true;
    } else if (osc && a === 2) {
    osc.amp(0.1);
     playing = true;  
    } else {
    a = 0;
    osc.amp(0.9);
       playing = true;
   }
}

function mouseReleased() {
  var osc;
    osc = oscA;
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}

