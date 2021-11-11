var times = [];

var buttons = [];
var answerBtns = [];
var tasks = []; // TODO: add ending task with time displayed
var taskOpt = [];

window.addEventListener("DOMContentLoaded", (event) => {
    buttons = document.getElementsByClassName("mainBtn");
    tasks = Array.from(document.getElementsByClassName("hidden"));
    taskOpt = document.getElementsByClassName("taskOpt");
    answerBtns = document.getElementsByClassName("answer");
    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        element.addEventListener("click", (event => {
            console.log(tasks);
            switchTaskVisibility(tasks[i], tasks[i+1]);
        }));
    }


    tasks[0].className = "visible"; // display intro
})

var startTime = null;

function startTimer() {
    if(startTime) {
        var endTime = Date.now();
        times.push(endTime - startTime);
        startTime = null;
    } else {
        startTime = Date.now();
    }
}

function switchTaskVisibility(a, b) {
    if(a) a.className = "hidden";
    if(b) b.className = "visible";
}
