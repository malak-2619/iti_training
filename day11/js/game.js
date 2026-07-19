var PlayerOneChoice=prompt("player 1 chooses: ");
var PlayerTwoChoice=prompt("player 2 chooses: ");

if(PlayerOneChoice===PlayerTwoChoice){
    console.log("Tie");
}

else if( (PlayerOneChoice==="Paper" && PlayerTwoChoice==="Rock") ||
 (PlayerOneChoice==="Scissors" && PlayerTwoChoice==="Paper") ||
 (PlayerOneChoice==="Rock" && PlayerTwoChoice==="Scissors") ){
    console.log("Player 1 wins\n");
}

else{
    console.log("player 2 wins\n");
}