

var Initialize = (function (Initialice){
	this.canvas = document.createElement("canvas");
	
	setCanvas(480, 270);
	
})

var setCanvas = function(){


				this.canvas.width = 480;
				this.canvas.height = 270;
				this.context = this.canvas.getContext("2d");
				document.body.insertBefore(this.canvas, document.body.childNodes[0]);

	
}

function DrawMenu(){
	
}

