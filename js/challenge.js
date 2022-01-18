// Adds timer functionality
const timer = document.getElementById('counter')
let time = 0
function updateTimer() {
    timer.innerText = time + 1
    time = time + 1
}
setInterval(updateTimer, 1000)

// Add + and - button functionality
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')

plusButton.addEventListener('click', addTime)
minusButton.addEventListener('click', removeTime)
function addTime() {
    time = time + 1
}

function removeTime() {
    time = time - 1
}

// Add "like" button functionality
// When the "heart" button is clicked
// it adds an unordered list that says
// "(number) has been liked (x) time(s)"
const heartButton = document.getElementById('heart')
const listOfLikes = document.getElementById('likes')
const li = document.createElement('li')
let likes = 0
heartButton.addEventListener('click', loveMe)
// This function has to log the number
// and the number of times liked
function loveMe() {
    if (likes === 1) {
        let likeText = document.createTextNode(`${time} has been liked ${likes} time`)
    } else {
        let likeText = document.createTextNode(`${time} has been liked ${likes} times`)
    }
    li.appendChild(likeText)
    listOfLikes.appendChild(li)
}