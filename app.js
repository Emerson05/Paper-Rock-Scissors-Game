const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay= document.getElementById('user-choice')
const resultDisplay= document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    generateComputerchoice()
    getResult()
}))

function generateComputerchoice(){
    const randomNumber = Math.floor(Math.random()* possibleChoices.length) + 1

    if(randomNumber === 1){
        computerChoice = 'Rock'
    }

    
    if(randomNumber === 2){
        computerChoice = 'Scissors'
    }

    
    if(randomNumber === 3){
        computerChoice = 'Paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice


}

function getResult(){
    if(computerChoice === userChoice){
        result = 'Its Draw'
    }
    else if( computerChoice === 'Rock' && userChoice === 'Paper'){
        result = 'You Win'
    }

    else if( computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = 'You Win'
    }

    else if( computerChoice === 'Paper' && userChoice === 'Rock'){
        result = 'You lose'
    }

    else if( computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = 'You Win'
    }

    else if( computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = 'You lose'
    }

    resultDisplay.innerHTML = result
}