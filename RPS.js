const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;}
      else {
        console.log('This isn\'t Rock, Paper, or Scissors')
      }
    }
  
  
  // should it be a const?  
  const getComputerChoice = () =>{ // those empty parentheses are v. important
      const randomNumber =
      Math.floor(Math.random() * 3);
          switch(randomNumber){
              case 0:
                  return 'rock';
              case 1:
                  return 'paper';
              case 2:
                  return 'scissors';
          }
  }
  
  const determineWinner = (UserChoice, computerChoice) => {
      if(UserChoice === computerChoice){
          return "A tie? Wow!";
      }
      if(UserChoice === 'rock'){
       if(computerChoice === 'paper'){
           return "*beep boop* (computer wins)";
       }
  
      }
      if(UserChoice === 'paper'){
       if(computerChoice === 'scissors'){
           return "*beep boop* (computer wins)";
       }
        }
      if(UserChoice === 'rock'){
       if(computerChoice === 'scissors'){
           return "User wins!";
       }
      }
      if(UserChoice === 'scissors'){
       if(computerChoice === 'rock'){
           return "*beep boop* (computer wins)";
       }
        else{
            return "User won!";
        }
      }
  
  }
  
  const playgame = () => {
      const userChoice =
      getUserChoice('rock');
      const computerChoice =
      getComputerChoice();
      console.log("your choice is:" + userChoice);
      console.log("The computer\'s choice is:" + computerChoice);
      console.log(determineWinner(userChoice, computerChoice));
  }
  
  playgame()