const FPS = 50 ;
var myGameArea = {
	canvas : document.getElementById("myCanvas"),
	start : function () {
		this.canvas.width = 484 ;
		this.canvas.height = 400 ;
		this.canvas.style.border= "solid medium";
		this.context = this.canvas.getContext("2d");
		this.interval = setInterval(updateGameArea ,1000/FPS );
	},
	clear : function (){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function(){
		clearInterval(this.interval);
	}
}
function ball (rayon ,x ,y ,color){
	this.rayon = rayon ;
	this.x = x ;
	this.y = y ;
	this.speedX = 3 ;
	this.speedY = -3 ;
	this.move = function(){
		if(this.y + this.speedY > 400){
	    	myGameArea.stop();
		}
		if(this.x > myBare.x && this.x < myBare.x + myBare.width && this.y + this.rayon == myBare.y+2){
			this.speedY*=-1;
		}
		if(this.y + this.speedY < 5 ){
			this.speedY *= -1 ;
		}
		if(this.x + this.speedX > myGameArea.canvas.width - this.rayon || this.x + this.speedX < this.rayon ){
			this.speedX *= -1 ;
		}
		this.x += this.speedX ;
		this.y += this.speedY ;
	}
	this.update = function(){
		let ctx = myGameArea.context;
		ctx.beginPath();
		ctx.arc(this.x , this.y , this.rayon, 0 , 2 * Math.PI);
		ctx.fillStyle = color ;
		ctx.fill();
		ctx.stroke();
	}
}
function bare(width ,height ,x ,y ,color){
	this.width = width ;
	this.height = height ;
	this.x = x ;
	this.y = y ;
	this.speedX = 0 ;
	window.addEventListener( 'keydown' , function(e){
		myBare.keys = (myBare.keys || [] );
        myBare.keys[e.keyCode] = true;
	})
	window.addEventListener('keyup', function (e) {
    	myBare.keys[e.keyCode] = false;
    })
	this.move = function(){
		if(this.x + this.speedX < 444 && this.x + this.speedX >0){
			this.x += this.speedX;
		}
			this.speedX = 0 ;
	} 
	this.update = function(){
		let ctx = myGameArea.context;
		ctx.fillStyle = color;
    	ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	this.crush = function(theBall){
		
	}
}
startGame();
function updateGameArea(){
	myGameArea.clear();
	myBall.move();
	myBare.move();
	if (myBare.keys && myBare.keys[37]) {myBare.speedX += -5; }
    if (myBare.keys && myBare.keys[39]) {myBare.speedX += 5 ; }
	myBare.update();
	myBall.update();
}
function startGame(){
	myGameArea.start();
	myBall = new ball(5,242,384,"black");
	myBare = new bare(40,10,222,390,"black");
}