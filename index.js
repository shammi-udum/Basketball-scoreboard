let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeTeamScore = 0;
let guestTeamScore = 0;
const startTimer = 60;
let time = startTimer * 60;
const countdownEL = document.getElementById("countdown-el");
let interval = null;


function add1PointHome(){
    homeTeamScore += 1
    homeScore.textContent = homeTeamScore
}

function add2PointsHome(){
    homeTeamScore += 2
    homeScore.textContent = homeTeamScore
}

function add3PointsHome(){
    homeTeamScore += 3
    homeScore.textContent = homeTeamScore
}

function add1PointGuest(){
    guestTeamScore += 1
    guestScore.textContent = guestTeamScore
}

function add2PointsGuest(){
    guestTeamScore += 2
    guestScore.textContent = guestTeamScore
}

function add3PointsGuest(){
     guestTeamScore += 3
     guestScore.textContent = guestTeamScore
}

function timer(){
    const minutes = Math.floor(time/60)
    let seconds = time % 60
    seconds = seconds < 10 ? '0' + seconds : seconds
    countdownEL.textContent = `${minutes}:${seconds}`
    time--
}

function start(){
    if(interval) {
        return
}
 interval = setInterval(timer, 1000);
}

function timeout(){
    clearInterval(interval);
    interval = null;
}

function reset(){
    timeout();
    seconds = 0;
    countdownEL.textContent = '60:00';
}