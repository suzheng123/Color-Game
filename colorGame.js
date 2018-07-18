var numOfSquares=6;
var colors=generateRandomColors(numOfSquares);

var squares=document.querySelectorAll(".square");
var colorPicked=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");

var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numOfSquares=3;
	colors=generateRandomColors(numOfSquares);
	console.log(colors)
	colorPicked=pickColor();
	colorDisplay.textContent=colorPicked;
	for(i=0;i<squares.length;i++){
		if (colors[i]){
			squares[i].style.backgroundColor=colors[i];
		} else{
			squares[i].style.display="none";
		}
	}
});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numOfSquares=6;
	colors=generateRandomColors(numOfSquares);
	console.log(colors.length);
	colorPicked=pickColor();
	colorDisplay.textContent=colorPicked;
	for(i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
})

resetButton.addEventListener("click",function(){
	colors=generateRandomColors(numOfSquares);//generate all new colors
	colorPicked=pickColor();//picked a random color
	//change colorDisplay to match colorPicked
	messageDisplay.textContent="";
	this.textContent="New Colors";
	colorDisplay.textContent=colorPicked;
	for(i=0;i<squares.length;i++){//assign new colors to squares
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
})

colorDisplay.textContent=colorPicked;

for(i=0; i<squares.length; i++){
	//assign intial colors to each square
	squares[i].style.backgroundColor=colors[i];
	//add eventListener to squares
	squares[i].addEventListener("click", function(){
		//grab the color of clicked square
		colorClicked=this.style.backgroundColor;
		//compare the color to picked color
		if(colorClicked===colorPicked){
			messageDisplay.textContent="Correct!!!"
			resetButton.textContent="PLAY AGAIN"
			changeColors(colorClicked);
			h1.style.backgroundColor=colorPicked;
		} else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again"
		}
	});
}

function changeColors(color){
	//loop through all squares
	for(i=0; i<squares.length; i++){
		//change each square to match given color
		squares[i].style.backgroundColor=color;
	};
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(n){
	//make an array to add n random colors to array
	var arr=[];
	for(i=0;i<n;i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var rgb = "rgb(" + r +", " + g + ", " + b + ")";
	return rgb;
}



