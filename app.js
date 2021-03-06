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
let totalGame = 0
let totalWin = 0


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

for (let i = 0; i < choices.length; i++){ // someone is gonna hurt me for this absolute mess
    const button = document.createElement('button')
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    button.setAttribute("style","cursor: pointer;")
    button.style.padding = "15px 32px"
    button.style.display = "inline-block"
    button.style.color = "white"
    button.style.margin = "4px 2px"
    button.style.borderRadius = "50%"
    button.style.position = "absolute"
    button.style.top = "65%"
    if(i == 0){
        button.style.backgroundColor = "red"
        button.style.right = "71%"
    }
    if(i == 1){
        button.style.backgroundColor = "green"
        button.style.right = "46%"
    }
    if(i == 2){
        button.style.backgroundColor = "blue"
        button.style.right = "21%"
    }
    gameGrid.appendChild(button)
}

const getResult = () => {
    totalGame += 1
    switch( userChoice + computerChoice){ // this should be one string
        case 'ScissorPaper':
        case 'RockScissor':
        case 'PaperRock':
            result.innerHTML = "You Win"
            winStreak += 1
            totalWin += 1
            total.innerHTML = "Game: " + totalGame + ", Wins: " + totalWin +  ", Win Streak: " + winStreak
            break
        case 'PaperScissor':
        case 'ScissorRock':
        case 'RockPaper':
            result.innerHTML = "You Lose"
            winStreak = 0
            total.innerHTML = "Game: " + totalGame + ", Wins: " + totalWin +  ", Win Streak: " + winStreak
            break
        case 'ScissorScissor':
        case 'PaperPaper':
        case 'RockRock':
            result.innerHTML = "Draw"
            total.innerHTML = "Game: " + totalGame + ", Wins: " + totalWin +  ", Win Streak: " + winStreak
            break
    }
}

user.setAttribute("style", "padding: 25px 25px 25px 25px; text-align: center;")
computer.setAttribute("style", "padding: 25px 25px 25px 25px; text-align: center;")
result.setAttribute("style", "padding: 25px 25px 25px 25px; text-align: center;")
total.setAttribute("style", "padding: 25px 25px 25px 25px; text-align: center;")