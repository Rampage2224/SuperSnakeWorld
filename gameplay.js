
		
		//Function that initiates when the page loads
		//Loads all other functions

		var StartGame = (function (StartGame){
			GameArea.start();
			
			//Creates snake
			
			drawSnake();
			GenFood();
			
		
		})
						 
		
		 let snake = 
			[{x : 200, y : 200},
			{x : 200, y : 210},
			{x : 200, y : 220},
			{x : 200, y : 230},
			 {x : 200, y : 240}];
			
		
		dx = 10;
		dy = 0;
			
			
			document.addEventListener("keydown", changeDirection);
			
		//Creates Canvas
		 var GameArea = {
			canvas : document.createElement("canvas"),
			start : function() {
				this.canvas.width = 480;
				this.canvas.height = 270;
				this.context = this.canvas.getContext("2d");
				document.body.insertBefore(this.canvas, document.body.childNodes[0]);
				this.interval = setInterval(updateGameArea, 100);
			},

			
			clear : function(){
				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
				
			}
			
			
			
		}
		
		//Creates "cuardicule" in which the snake moves (just visuaal)

		
		//Snake functions
			
		//Draws a part of the snake
		 function drawSnakePart(part){
			
			ctx = GameArea.context;
			ctx.fillStyle = 'Lime';
			ctx.strokeStyle = 'Green';
			ctx.strokeRect(part.x, part.y, 9, 9);
			ctx.fillRect(part.x, part.y,9, 9);
			
		}
		
		
			
		//Draws all the snake
		 function drawSnake(){
				snake.forEach(drawSnakePart);

			
		}
			
		 function moveSnake(){
			
			const head = {x: snake[0].x + dx, y: snake[0].y + dy};
			if(snake[0].x >= 480){
				head.x = 10;
			}
			if(snake[0].x <= 0){
				head.x = 470;
			}
			if(snake[0].y >= 270){
				head.y = 10;
			}
			if(snake[0].y <= 0){
				head.y = 260;
			}
			snake.unshift(head);
			const has_eaten = snake[0].x === food_x && snake[0].y === food_y;
			if (has_eaten){
				GenFood();
			}
			else{
				snake.pop();
			}
			
			
		}
		
			 function changeDirection(event){
			
			const LEFT_KEY = 37;
			const RIGHT_KEY = 39;
			const UP_KEY = 38;
			const DOWN_KEY = 40;
			
			
			const KeyPressed = event.keyCode;
			const goingUP = dy === -10
			const goingDOWN = dy === 10
			const goingLEFT = dx === -10
			const goingRIGHT = dx === 10
			
			if(KeyPressed === LEFT_KEY && !goingRIGHT){
				dx = -10
				dy = 0
			}
			if(KeyPressed === RIGHT_KEY && !goingLEFT){
				dx = 10
				dy = 0
			}
			if(KeyPressed === UP_KEY && !goingDOWN){
				dx = 0
				dy = -10
			}
			if(KeyPressed === DOWN_KEY && !goingUP){
				dx = 0
				dy = 10
			}
				document.removeEventListener("keydown", changeDirection);
			
		}
			
			
		
			//Food Functions
			
		
		
		 function randomFood(min, max){
			return Math.round((Math.random()* (max-min) + min) / 10) * 10
		}
			
		
		 function GenFood()
		{
			food_x = randomFood(0, 480 - 10);
			food_y = randomFood(0, 270 - 10);
			snake.forEach(function has_snake_eaten(part){
				const has_eaten = part.x == food_x && part.y == food_y;
				if(has_eaten) GenFood();
			});
			
		}
			
		 function updateGameArea(){
			GameArea.clear();
			document.addEventListener("keydown", changeDirection);	
			if(!hasGameEnded()){
				document.addEventListener("keydown", changeDirection);
				drawSnake();
				moveSnake();
				drawFood();	
			}
			
			
		
		}
		
		 function drawFood(){
			ctx.fillStyle = 'red';
			ctx.fillRect(food_x, food_y, 10, 10);
			
		}
		
			
		
			
		//End game
		 function hasGameEnded(){
			for(let i = 4; i < snake.length; i++){
				if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
					return true;
				}
			}
			
		}

