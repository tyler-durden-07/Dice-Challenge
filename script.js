var diceValue1= 1+Math.floor(Math.random()*6);

var diceValue2= 1+Math.floor(Math.random()*6);

var myDiv=document.getElementsByTagName("h1")[0];

if(diceValue1>diceValue2){
  myDiv.innerHTML="Player 1 Wins!";
}else if(diceValue1===diceValue2){
  myDiv.innerHTML="Draw!";
}else{
  myDiv.innerHTML="Player 2 Wins!";
}
document.getElementsByClassName("img1")[0].src="images/dice1.png";

console.log(diceValue1+" "+diceValue2);

if(diceValue1===1){
  document.getElementsByClassName("img1")[0].setAttribute('src', "images/dice1.png")
}else if(diceValue1===2){
  document.getElementsByClassName("img1")[0].setAttribute('src', "images/dice2.png")

}else if(diceValue1===3){
  document.getElementsByClassName("img1")[0].setAttribute('src', "images/dice3.png")

}else if(diceValue1===4){
  document.getElementsByClassName("img1")[0].setAttribute('src', "images/dice4.png")

}else if(diceValue1===5){
  document.getElementsByClassName("img1")[0].setAttribute('src', "images/dice5.png")

}else{
  document.getElementsByClassName("img1")[0].setAttribute('src', "images/dice6.png")

}

if(diceValue2===1){
  document.getElementsByClassName("img2")[0].setAttribute('src', "images/dice1.png")

}else if(diceValue2===2){
  document.getElementsByClassName("img2")[0].setAttribute('src', "images/dice2.png")

}else if(diceValue2===3){
  document.getElementsByClassName("img2")[0].setAttribute('src', "images/dice3.png")

}else if(diceValue2===4){
  document.getElementsByClassName("img2")[0].setAttribute('src', "images/dice4.png")

}else if(diceValue2===5){
  document.getElementsByClassName("img2")[0].setAttribute('src', "images/dice5.png")

}else{
  document.getElementsByClassName("img2")[0].setAttribute('src', "images/dice6.png")

}
