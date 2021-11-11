var times = [];

window.addEventListener("DOMContentLoaded", (event) => {
    console.log("LOADED");
    introBtn = document.getElementById("introBtn");
    introBtn.addEventListener("click", introPress);
    fstBtn = document.getElementById("1st");
    snBtn = document.getElementById("2nd");
    thBtn = document.getElementById("3rd");
    foBtn = document.getElementById("4th");
    fiBtn = document.getElementById("5th");

    introDiv = document.getElementById("intro");
    taskDiv1 = document.getElementById("task1");
    taskDiv2 = document.getElementById("task2");
    taskDiv3 = document.getElementById("task3");
    taskDiv4 = document.getElementById("task4");
    taskDiv5 = document.getElementById("task5");
})

var introBtn;
var fstBtn;
var snBtn;
var thBtn;
var foBtn;
var fiBtn;

var introDiv;
var taskDiv1;
var taskDiv2;
var taskDiv3;
var taskDiv4;
var taskDiv5;

var taskOpt1;
var taskOpt2;
var taskOpt3;
var taskOpt4;
var taskOpt5;

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

function switchVisibility(a, b) {
    a.className = "hidden";
    b.className = "visible";
}

function introPress() {
    switchVisibility(introDiv, taskDiv1);
}

function Press1st() {

}
