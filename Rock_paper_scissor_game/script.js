let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScoreNum = document.querySelector('#user-score');
const compScoreNum = document.querySelector('#comp-score');

const genCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    let ranIdx = (Math.floor(Math.random() * 3));

    return options[ranIdx];
}

const drawGame = () =>{
    msg.innerText = `Game was draw! Play again..`;
    msg.style.backgroundColor = "#212a39";
}

const showwinner = (userWin, userChoice, compChoice) => {
      if(userWin){
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
        userScore++;
        userScoreNum.innerText = userScore;
      }
      else{
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScoreNum.innerText = compScore;
      }
}

const playGame = (userChoice) => {
    //draw condition
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
        
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //paper, scissor
            userWin = compChoice === "paper" ? false : true;

        }
        else if (userChoice === "paper") {
            // rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showwinner(userWin, userChoice, compChoice);
    }


}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})