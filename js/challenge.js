// Adds timer functionality
const timer = document.getElementById('counter')
let time = 0
const timeObj = {}
function updateTimer() {
    timer.innerText = time + 1
    time = time + 1
    timeObj[`${time}`] = 0
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

heartButton.addEventListener('click', loveMe)
// This function has to log the number
// and the number of times liked
let likes = 0
function loveMe() {
    let likeText
    timeObj[time] = timeObj[time] + 1
    likes = timeObj[time]
    if (likes === 1) {
        likeText = document.innerText = `${time} has been liked ${likes} time`
    } else {
        likeText = document.innerText = `${time} has been liked ${likes} times`
    }

    const myUl = document.getElementById('list')
    const myLi = document.createElement('li')
    myLi.innerText = `${likeText}`
    myUl.append(myLi)
}

