let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function getComputerChoice(){
    //array with options
    const choices = ["Rock", "Paper", "Scissors"];
    //function generates random option from array
    return choices[Math.floor(Math.random() * choices.length)]

}

function disableButtons() {
    //disables buttons
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {

    let computerSelection = getComputerChoice()
    let result = ""

    //options for the player to win
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock')) {

        //if any of the upper caser, playerScore will increase
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        //if player score equals 5, you won the game and must reload page again
        if (playerScore == 5) {
            result += '<br><br>You won the game! reload the page to play again'
            disableButtons()
        }

    }
    //if player selection equals pc selection
    else if(playerSelection == computerSelection){
        result = ('It is a tie. You both chose ' + playerSelection + "<br><br>PlayerScore: " + playerScore + "<br>Computer score: " + computerScore)
    }
    //computer score is greater than player score
    else {
        computerScore += 1
        result = ('You loose! ' + computerSelection + ' beats ' + playerSelection + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    
        //if computer score equals 5
        result += '<br><br>I won the game! Reload the page to play again'
        disableButtons()
    }

    //div result will show the result in innerHTML
    document.getElementById('result').innerHTML = result
    return

}

//each item of the button const
buttons.forEach(button => {
    //detect click
    button.addEventListener('click', function(){
        console.log('click')
        playRound(button.value)
    })
})