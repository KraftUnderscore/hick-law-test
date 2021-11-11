var times = [];

var continueBtns = [];
var displayAnwsersBtns = [];
var taskDivs = []; // TODO: add ending task with time displayed
var answersBtns = [];

var resultsText;

window.addEventListener("DOMContentLoaded", () => {
    resultsText = document.getElementById("results");

    continueBtns = document.getElementsByClassName("mainBtn");
    taskDivs = Array.from(document.getElementsByClassName("hidden"));
    answersBtns = Array.from(document.getElementsByClassName("taskOptOff"));
    displayAnwsersBtns = document.getElementsByClassName("answer");

    for (let i = 0; i < continueBtns.length; i++) {
        const element = continueBtns[i];
        element.addEventListener("click", (() => {
            switchTaskVisibility(taskDivs[i], taskDivs[i+1]);
            if(i!=0) startTimer();
        }));
    }

    for (let i = 0; i < displayAnwsersBtns.length; i++) {
        const element = displayAnwsersBtns[i];
        element.addEventListener("click", (() => {
            if(answersBtns[i]) answersBtns[i].className = "taskOpt"
            startTimer();
        }));
    }

    taskDivs[0].className = "visible"; // display intro
})

var startTime = null;

function startTimer() {
    if(startTime) {
        var endTime = Date.now();
        times.push(endTime - startTime);
        startTime = null;
        resultsText.innerHTML = times;
    } else {
        startTime = Date.now();
    }
}

function switchTaskVisibility(a, b) {
    if(a) a.className = "hidden";
    if(b) b.className = "visible";
}
