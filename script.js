
var mode=6;
var colors=generateRnadomColorsArray(mode);
console.log(colors);
var displayColor=document.getElementById("displayColor");
var pickedColor=goalColor();
var messageDisplay=document.getElementById("message");
var squares=document.querySelectorAll(".square");
var reset=document.getElementById("reset");
var hard =document.getElementById("hard")
var easy =document.getElementById("easy")
var h = document.getElementsByTagName("h1")[0];

displayColor.textContent=pickedColor;
















    


for(var i = 0 ; i< squares.length ; i++){
    squares[i].style.backgroundColor=colors[i];



    squares[i].addEventListener("click",  function () {

       var colorClicked= this.style.backgroundColor;
    
        if(colorClicked === pickedColor){
            messageDisplay.textContent="Correct !!";  
            changeColors(colorClicked);
            h.style.backgroundColor=colorClicked;
            reset.textContent="Play Again !"

        }
        else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again !!";        }
    });
}




function changeColors(color){

for(var i = 0 ; i<squares.length ; i++){
squares[i].style.backgroundColor=color;
}

}



function goalColor(){
   var rndClr= Math.floor(Math.random() * colors.length);
  
    return (colors[rndClr]);
   
}



function generateRnadomColorsArray(num){
    var arr=[];
    
    for(var i = 0 ; i < num ; i++){
        arr.push(randomColor());
    }

    return arr ;

}



function randomColor(){
    var r =Math.floor(Math.random()*256);
    var g =Math.floor(Math.random()*256);
    var b =Math.floor(Math.random()*256);

    return "rgb(" + r + ", " + g + ", " +  r + ")";
}




reset.addEventListener("click",function (){

    colors=generateRnadomColorsArray(mode);
    pickedColor=goalColor();
    
displayColor.textContent=pickedColor;

for(var i = 0 ; i< squares.length ; i++){
    squares[i].style.backgroundColor=colors[i];
}

h.style.backgroundColor="steelblue";
reset.textContent="New Colors ?"
messageDisplay.textContent=""

})




hard.addEventListener("click",function () {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    mode=6;
    colors=generateRnadomColorsArray(mode);
    pickedColor=goalColor();    
    displayColor.textContent=pickedColor;

    for(var i = 0 ; i< squares.length ; i++){   
        if(colors[i]){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
        }
            
    
    
    
    }
    h.style.backgroundColor="steelblue";
    messageDisplay.textContent=""
    
})





easy.addEventListener("click",function () {
    hard.classList.remove("selected");
    easy.classList.add("selected");
    mode=3;
    colors=generateRnadomColorsArray(mode);
    pickedColor=goalColor();
    displayColor.textContent=pickedColor;

for(var i = 0 ; i< squares.length ; i++){   
    if(colors[i]){
    squares[i].style.backgroundColor=colors[i];
    }
    else{
        squares[i].style.display="none";

    }


}
h.style.backgroundColor="steelblue";
messageDisplay.textContent=""
   
})


