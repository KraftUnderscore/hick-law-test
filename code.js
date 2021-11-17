var times = [];

var continueBtns = [];
var displayAnwsersBtns = [];
var taskDivs = [];
var answersBtns = [];
var tasksAnswers = [];

var answerSpots = [];

var resultsText;

var database = [ "KACZKA", "AUTOBUS", "ODRZUTOWIEC", "BETON", "TWARZ", "KANAPKA",
 "PIES", "MIKROFON", "BANAN", "ŚCIANA", "LUSTERKO", "JABŁKO", "MYDŁO", "GŁOŚNIK",
 "WYNIK", "WŁOCHY", "KALORYFER", "ENCYKLOPEDIA", "BASEN", "DZIADEK", "KOMETA",
 "GITARA", "ZABAWA", "RANA", "ENZYM", "BABCIA", "RULETKA", "POLSKA", "OPROGRAMOWANIE",
 "WIELKOLUD", "DRUT", "MĄDROŚĆ", "FIGURA", "WODOSPAD", "PROTEZA", "DRZWI", "TABLICA",
 "BONUS", "PLAC", "WIESZAK", "RAMA", "LÓD", "INŻYNIER", "SZLAUCH", "OLIWKA",
 "WINDA", "ZAOPATRZENIE", "DOCHÓD", "PRZYNĘTA", "METAL", "LICENCJA", "MŁOTEK",
 "SIEDZENIE", "WADA", "PODDASZE", "WULKAN", "SMOK", "OKRUCHY", "SŁOMKA",
 "CIEŃ", "CERTYFIKAT", "SZPIEG"]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("DOMContentLoaded", () => {
    resultsText = document.getElementById("results");

    continueBtns = document.getElementsByClassName("mainBtn");
    taskDivs = Array.from(document.getElementsByClassName("hidden"));
    answersBtns = Array.from(document.getElementsByClassName("taskOptOff"));
    displayAnwsersBtns = document.getElementsByClassName("answer");
    answerSpots = document.getElementsByClassName("taskAnsw");

    for (let i = 0; i < continueBtns.length; i++) {
        let element = continueBtns[i];
        let currentDB = database.map((x)=>x);
        let toAdd = [];
        for(let j = 0; j < (i + 1) * 3; j++) {
            let randIndex = getRandomInt(0, currentDB.length - 1);
            toAdd.push(currentDB[randIndex]);
            currentDB.splice(randIndex, 1);
        }

        let answerIndex = getRandomInt(0, toAdd.length - 1);
        for (let j = 0; j < toAdd.length; j++) {
            const el = toAdd[j];
            if(j == answerIndex) {
                tasksAnswers.push(el);
                answerSpots[i].innerHTML = el;
            }
            element.innerHTML += "<option>" + el + "</option>\n";

        }

        element.addEventListener("change", ((event) => {
            if(event.target.value == tasksAnswers[i]) {
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
            element.className = "hidden";
        }));
    }

    var introBtn = document.getElementById("introBtn");
    var intro = document.getElementsByClassName("intro")[0];
    introBtn.addEventListener("click", ()=>{
        switchTaskVisibility(intro, taskDivs[0]);
    })
    intro.className = "visible"; // display intro
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
