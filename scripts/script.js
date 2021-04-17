  /* javascript*/
  /*Player Move, uses random number and assigns "Rock", "Paper", or "Scissors"*/  

  function playerPlay() 
  {   
      let numberGeneratedPlayer=(Math.floor(Math.random() * 3));
      if (numberGeneratedPlayer===0) {
              return("Rock");
        } 
      else if (numberGeneratedPlayer===1) {
              return("Paper");
        } 
      else {
              return("Scissors")
        }
  };
 
  /*Computer Move, uses random number and assigns "Rock", "Paper", or "Scissors"*/

  function computerPlay()   
  {   
      let numberGeneratedComputer=(Math.floor(Math.random() * 3)); 
      if (numberGeneratedComputer===0) {
              return("Rock");
        } 
      else if (numberGeneratedComputer===1) {
              return("Paper");
        } 
      else {
              return("Scissors")
        }
  }; 

                   
/*Play one round of rock, paper, scissors*/
  function playRound() {
      const computer = computerPlay();
      const player = playerPlay();
      let outcome;
      if(computer ==="Rock" && player ==="Rock") {
          outcome="Draw! Pick Again";
        }
      else if(computer ==="Paper" && player ==="Paper"){
              outcome="Draw! Pick Again";
        }
      else if (computer ==="Scissors" && player ==="Scissors"){
              outcome="Draw! Pick Again";
        }   
      else if (computer ==="Rock" && player ==="Paper") {
              outcome="You Win! Paper Beats Rock";
        }
      else if (computer ==="Rock" && player ==="Scissors") {
              outcome="You Lose! Rock Beats Scissors";
        }
      else if (computer ==="Paper" && player ==="Rock") {
              outcome="You Lose! Paper Beats Rock";
        }
      else if (computer ==="Paper" && player ==="Scissors") {
              outcome="You Win! Scissors Beats Paper";
        }   
      else if (computer ==="Scissors" && player ==="Rock") {
              outcome="You Win! Rock Beats Scissors";
        }
      else if (computer ==="Scissors" && player ==="Paper") { 
              outcome="You Lose! Scissors Beats Paper";
        }      
         else {
                 outcome="i dont know what happened";
                }   
         return outcome;
  };  
    
 /* play five rounds of rock paper scissors*/
  
  function game()      
  {
      return[playRound(),playRound(),playRound(),playRound(),playRound()]

  };  
  console.log(game())  

