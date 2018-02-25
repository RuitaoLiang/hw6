var freqA = 174;
var oscA;
var playing = false;


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

function draw() {
	var millisecond = millis();
  if (playing) {
		
    background(0, 255, 255);
		fill(255, 204, 0);
	rect(20, 20, 150, 150);
		textSize(24);
		fill(0);
			text('Milliseconds \nrunning: \n' + millisecond, width/2, height/3);
  } else {
	
    background(255, 0, 255);

		
		fill(51);
	rect(20, 20, 150, 150);	
		textSize(24);
		fill(255);
		text('Milliseconds \nrunning: \n' + millisecond, width/2, height/3);
  }
	
}

function mousePressed() {

  var osc;
    osc = oscA;
  if (osc) {
    osc.amp(0.5, 0.1);
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



