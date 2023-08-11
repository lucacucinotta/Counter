/*Here begins the creation of all function that allow increase/decrease,reset and auto functionality for counter*/
const plus = ()=>{
    currentNumber++;
    displayCounter.innerHTML = currentNumber;
}

const less = ()=>{
    currentNumber--;
    displayCounter.innerHTML = currentNumber;
}

const plus100 = ()=>{
    currentNumber = currentNumber +100;
    displayCounter.innerHTML = currentNumber;
}

const less100 = ()=>{
    currentNumber = currentNumber-100;
    displayCounter.innerHTML = currentNumber;
}

const reset = ()=>{
    currentNumber = 0;
    displayCounter.innerHTML = currentNumber;
}

/*Here I've create the 'auto' function which automatically increases the counter value every 800 milliseconds with the setInterval method*/
let interval;
const auto = ()=> {
    if (!interval) {
        interval = setInterval(() => {
        displayCounter.innerHTML = currentNumber;
        currentNumber++;
        }, 800);
        buttonAuto.innerHTML = "stop";
    } else {
        clearInterval(interval);
        interval = null;
        buttonAuto.innerHTML = "start";
    }
}

/*Here I've assign an event handler to the buttonDiv to execute all previously created functions via user click through the Event Obejct*/
buttonDiv.addEventListener("click",(e)=>{
    switch(e.target.id){
        case "buttonPlus":
            plus();
        break;
        case "buttonLess":
            less();
        break;
        case "reset":
            reset();
        break;
        case "buttonPlus100":
            plus100();
        break;
        case "buttonLess100":
            less100();
        break;
        case "auto":
            auto();
        break;
    }
});

/*Here I've assign an event handler to the buttonDiv to execute all previously created functions via user keydown through the Event Object*/
document.addEventListener("keydown", (e)=>{
    switch(e.code){
        case "NumpadAdd":
            plus();
        break;
        case "NumpadSubtract":
            less();
        break;
        case "Delete":
            reset();
        break;
        case "ArrowUp":
            plus100();
        break;
        case "ArrowDown":
            less100();
        break;
        case "KeyA":
            auto();
        break;
    }
})