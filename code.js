var times = [];

var continueBtns = [];
var displayAnwsersBtns = [];
var taskDivs = [];
var answersBtns = [];
var tasksAnswers = [];

var resultsText;

window.addEventListener("DOMContentLoaded", () => {
    resultsText = document.getElementById("results");

    continueBtns = document.getElementsByClassName("mainBtn");
    taskDivs = Array.from(document.getElementsByClassName("hidden"));
    answersBtns = Array.from(document.getElementsByClassName("taskOptOff"));
    displayAnwsersBtns = document.getElementsByClassName("answer");
    tasksAnswers = document.getElementsByClassName("taskAnsw");

    for (let i = 0; i < continueBtns.length; i++) {
        const element = continueBtns[i];
        element.addEventListener("change", ((event) => {
            if(event.target.value == tasksAnswers[i].innerHTML) {
                switchTaskVisibility(taskDivs[i], taskDivs[i+1]);
                startTimer();
            }
        }));
    }

    for (let i = 0; i < displayAnwsersBtns.length; i++) {
        const element = displayAnwsersBtns[i];
        element.addEventListener("click", (() => {
            if(answersBtns[i]) answersBtns[i].className = "taskOpt"
            startTimer();
        }));
    }

    var introBtn = document.getElementById("introBtn");
    var intro = document.getElementsByClassName("intro")[0];
    console.log(introBtn);
    console.log(intro);
    introBtn.addEventListener("click", ()=>{
        console.log("CLICK");
        switchTaskVisibility(intro, taskDivs[0]);
    })
    intro.className = "visible"; // display intro
})

var startTime = null;

function startTimer() {
    if(startTime) {
        var endTime = Date.now();
        console.log("timer ended - " + endTime);
        times.push(endTime - startTime);
        startTime = null;
        resultsText.innerHTML = times;
    } else {
        startTime = Date.now();
        console.log("timer started - " + startTime);
    }
}

function switchTaskVisibility(a, b) {
    if(a) a.className = "hidden";
    if(b) b.className = "visible";
}
