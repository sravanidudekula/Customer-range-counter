let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let counterTextEl = document.getElementById("counterText");
let startBtnEl = document.getElementById("startBtn");

function increaseCount() {
    if (fromUserInputEl.value === "") {
        alert("enter the from value");
    } else if (toUserInputEl.value === "") {
        alert("enter the to value");
    } else {

        let countdown = parseInt(fromUserInputEl.value);
        counterTextEl.textContent = countdown;
        let intervalId = setInterval(function() {
            countdown += 1;
            counterTextEl.textContent = countdown;
            if (countdown === parseInt(toUserInputEl.value)) {
                clearInterval(intervalId);
            }
            console.log(countdown);
        }, 1000);
    }

}

startBtnEl.addEventListener("click", increaseCount);