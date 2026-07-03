let Seconds = 0;
let milisecond = 0;
let minutes = 0;

let input = 0;
let running = false;
let timer; // function

let counter = 0; // for laps

const Startbtn = document.getElementById("Startbtn"); // frist method to add two function to event listner
const Record = document.getElementById("Recordbtn");
const Reset = document.getElementById("Resetbtn");

let display = document.getElementById("display");
let ul = document.getElementById("list");

Startbtn.addEventListener("click", () => {
    if (!running) {
        start();
    } else {
        pause();
    }
});

function start() {
    running = true;

    timer = setInterval(() => {
        milisecond += 1;

        if (milisecond == 10) {
            Seconds += 1;
            milisecond = 0;
        }

        if (Seconds == 60) {
            minutes += 1;
            Seconds = 0;
        }

        display.innerText = `${String(minutes).padStart(2, "0")}:${String(Seconds).padStart(2, "0")}:${String(milisecond).padStart(2, "0")}`;

        Startbtn.textContent = "Pause";
    }, 100);
}

function pause() {
    clearInterval(timer);
    running = false;
    Startbtn.textContent = "Start";
}

Record.addEventListener("click", () => {
    const child = document.createElement("li");

    input = display.innerText;
    counter++;

    child.innerHTML = `<h3>Lap ${counter}: ${input}</h3>`;
    ul.appendChild(child);
});

Reset.addEventListener("click", () => {
    clearInterval(timer);

    milisecond = 0;
    Seconds = 0;
    minutes = 0;

    display.innerText = `${String(minutes).padStart(2, "0")}:${String(Seconds).padStart(2, "0")}:${String(milisecond).padStart(2, "0")}`;

    Startbtn.textContent = "Start";
    running = false;

    ul.innerText = "";
    counter = 0;
});