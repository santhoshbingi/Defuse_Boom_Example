let timerEle = document.getElementById('timer');
let defuserEle = document.getElementById('defuser');

defuserEle.addEventListener('keydown', function(event) {
    let defuserEleText = defuserEle.value;
    if (event.key === "Enter" && defuserEleText === "defuse" && countdown !== 0) {
        timerEle.textContent = "You Did It!";
        clearInterval(uniqueId);
    }
})


let countdown = 10;
let uniqueId = setInterval(function() {
    countdown -= 1;
    timerEle.textContent = countdown;
    if (countdown === 0) {
        timerEle.textContent = "BOOM";
        clearInterval(uniqueId);
    }
}, 1000);