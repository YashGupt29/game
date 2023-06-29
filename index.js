function rollice(){
    var no=Math.floor(Math.random()*6+1);
    return no;
}



    player1 = rollice();
    player2 = rollice();
  
  
  var diceImages = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
  ];
  
  document.querySelector(".img1").setAttribute("src", diceImages[player1 - 1]);
  document.querySelector(".img2").setAttribute("src", diceImages[player2 - 1]);
  
if(player1>player2){
    document.querySelector("h1").innerHTML="🚩player1 wins";
}
else if(player1<player2){
    document.querySelector("h1").innerHTML="player2 wins🚩"
}
else if(player1==player2) {
    document.querySelector("h1").innerHTML="Draw"
}
