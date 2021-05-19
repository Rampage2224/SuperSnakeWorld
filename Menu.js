var Initialize = (function (Initialice){
	
	StartButton();
	gamePause = true;
	StartGame();
})



function StartButton(){

	MenuTag = document.getElementById("MenuTag");
	startButton = document.createElement("Button");
	textStart = document.createTextNode("Start");
	
	startButton.appendChild(textStart);
	
	startButton.onclick = function(){
		gamePause = false;
		StopButton();}
	MenuTag.appendChild(startButton);
	
	
	
}
var StopButton = (function(){
	MenuTag.removeChild(startButton);
	stopButton = document.createElement("Button");
	textStop = document.createTextNode("Stop");
	stopButton.appendChild(textStop);
	MenuTag.appendChild(stopButton);
	
	stopButton.onclick = function(){
		gamePause = true;
		StartButton();
		MenuTag.appendChild(startButton);
		MenuTag.removeChild(stopButton);}
})