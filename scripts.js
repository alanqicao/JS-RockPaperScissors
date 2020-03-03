var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div =document.getElementById("s");

function getComputerChoice() {
  var choices = ['r', 'p', 's'];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber]
}

function convertTwoWord(letter) {
  if (letter === "r") return " Rock";
  if (letter === "p")return " Paper";
  return " Scissors";
  
}

function win(userChoice,computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML =computerScore;
  result_p.innerHTML = `${convertTwoWord(userChoice)}(user)  beats  ${convertTwoWord(computerChoice)}(computer)   .You win! `;
  
}
function lose(userChoice,computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML =computerScore;
 result_p.innerHTML = `${convertTwoWord(userChoice)}(user)  loses to  ${convertTwoWord(computerChoice)}(computer)   .You lost..! `;
}
  

function draw(userChoice,computerChoice) {
  
 result_p.innerHTML = `${convertTwoWord(userChoice)}(user)  Equals ${convertTwoWord(computerChoice)}(computer)   .It's Draw! `;
}
  


function game(userChoice) {
  var computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice,computerChoice);
     
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice,computerChoice)
      
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice,computerChoice)
      
      break;
  }

}


function main(){
  rock_div.addEventListener('click', function() {
    game("r");
  })
  paper_div.addEventListener('click', function() {
    game("p");
  })
  scissors_div.addEventListener('click', function() {
    game("s");
  })
}

main();