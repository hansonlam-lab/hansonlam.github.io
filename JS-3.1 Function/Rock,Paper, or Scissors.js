const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    }else{
      console.log('Error!');
    }
  };
  
  
  
  const getComputerChoice= () =>{
   let a = Math.floor(Math.random() *3);
    switch(a){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    };
  };
  
  
  
  
  const determineWinner = (userChoice, computerChoice) => {
    console.log(userChoice, computerChoice)
    if(userChoice === computerChoice){
      return 'The game is Tie!'
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer Win!'
      }else{
        return 'User Won!'
      }
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'Computer Win!'
      }else{
        return 'User Won!'
      }
    }
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'Computer Win!'
      }else{
        return 'User Won!'
      }
    }
  }
  
  
  const playGame = () =>{
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  
  
  
  
  
  
  
  
  
  
  