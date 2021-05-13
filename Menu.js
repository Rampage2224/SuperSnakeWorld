var Initialize = (function (Initialice){
	
	StartButton();
})



function StartButton(){
	MenuTag = document.getElementById("MenuTag");
	startButton = document.createElement("Button");
	text = document.createTextNode("Start");
	
	startButton.appendChild(text);
	
	startButton.onclick = function(){
		StartGame();
		StopButton();}
	MenuTag.appendChild(startButton);
	
	
	
}
var StopButton = (function(){
	MenuTag.removeChild(startButton);
})