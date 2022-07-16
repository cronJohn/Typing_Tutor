var data = {
    "a": 0,
    "b": 0,
    "c": 0,
    "d": 0,
    "e": 0,
    "f": 0,
    "g": 0,
    "h": 0,
    "i": 0,
    "j": 0,
    "k": 0,
    "l": 0,
    "m": 0,
    "n": 0,
    "o": 0,
    "p": 0,
    "q": 0,
    "r": 0,
    "s": 0,
    "t": 0,
    "u": 0,
    "v": 0,
    "w": 0,
    "x": 0,
    "y": 0,
    "z": 0
}

console.log(Object.keys(data).length);

var hasStarted = false;

const letterDisplay = document.querySelector(".letterDisplay")
const startBtn = document.querySelector(".startBtn")
const scores = document.querySelector(".scores")

startBtn.addEventListener("click", toggleGame);

function toggleGame(){
    if (hasStarted == false) {
        hasStarted = true;
        runGame()
        console.log('The game is running');
        startBtn.innerHTML = 'Stop';
        
    }

    else {
        hasStarted = false;
        stopGame()
        console.log('The game has stopped');
        startBtn.innerHTML = 'Start';
    }
}

function runGame(){
    console.log('before deal');

    var minRunTime = 1000;
    var maxRunTime = 5000;

    var ttw = Math.floor(Math.random() * (maxRunTime - minRunTime + 1) + minRunTime)

    const wait=ttw=>new Promise(resolve => setTimeout(switchLetters, ttw));
    
    wait().then(() => {
        console.log("waited asyncly")
        // switchLetters()
    }).catch(() => console.log('not done'))

     
}

function exe(){
    return new Promise(switchLetters => setTimeout(switchLetters, ttw));
}

function switchLetters(){
    changeLetterDisplay(getLetter())
}

function stopGame(){
    changeScores();
    saveToLocalStorage();
}

function changeScores(){
    let markup = ''
    for (let i = 0; i < Object.keys(data).length; i++) {
        markup += `<li>${Object.keys(data)[i]}: ${Object.values(data)[i]}</li>`
    }

    scores.innerHTML = markup;
}

function changeLetterDisplay(str){
    letterDisplay.innerText = str;
}

function getLetter(){
    let min = 0
    let max = Object.keys(data).length

    return Object.keys(data)[Math.floor(Math.random() * (max - min) + min)]
}

function saveToLocalStorage(){
    window.localStorage.setItem('userScores', JSON.stringify(data))
}

function getFromLocalStorage(){
    return JSON.parse(window.localStorage.getItem('userScores'))
}
