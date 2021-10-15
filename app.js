const user = document.createElement('h1')
user.setAttribute("id", "user")
const computer = document.createElement('h1')
computer.setAttribute("id", "computer")
const result = document.createElement('h1')
result.setAttribute("id", "result")
const total = document.createElement('h1')
total.setAttribute("id", "total")
const gameGrid = document.getElementById('game')

gameGrid.append(user, computer, result, total)

const choices = ['Rock', 'Paper', 'Scissor']
let userChoice
let computerChoice 
let winStreak = 0


const handleClick = (e) => {
    userChoice = e.target.id
    user.innerHTML = 'Player chooses ' + userChoice
    console.log('Player: ' + userChoice)
    generateComputerChoice()
    getResult()
    console.log(winStreak)
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)] // if 0, rock, if 1, paper, if 2, scissor
    computerChoice = randomChoice
    computer.innerHTML = 'Computer chooses ' + randomChoice 
    console.log('Computer: ' + randomChoice)
}

for (let i = 0; i < choices.length; i++){
    const button = document.createElement('button')
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    if(i == 0){
        button.setAttribute("style", "background-color: red;")
    }
    gameGrid.appendChild(button)
}

const getResult = () => {
    switch( userChoice + computerChoice){ // this should be one string
        case 'ScissorPaper':
        case 'RockScissor':
        case 'PaperRock':
            result.innerHTML = "You Win"
            winStreak += 1
            total.innerHTML = "Win Streak: " + winStreak
            break
        case 'PaperScissor':
        case 'ScissorRock':
        case 'RockPaper':
            result.innerHTML = "You Lose, Win Streak Reset"
            winStreak = 0
            total.innerHTML = "Win Streak: " + winStreak
            break
        case 'ScissorScissor':
        case 'PaperPaper':
        case 'RockRock':
            result.innerHTML = "Draw"
            total.innerHTML = "Win Streak: " + winStreak
            break
    }
}

user.setAttribute("style", 
"padding: 25px 50px 75px 100px; text-align: center;")

