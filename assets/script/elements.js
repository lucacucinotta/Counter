/*Here I've use 'querySelector' method for select the Bootstrap's container for append the Counter Card to him*/
const parentContainer = document.querySelector("#parentContainer");

/*Variable for the counter's number that increase or decrease*/
let currentNumber = 0;

/*Here I've write a function with different parameter that allow to create HTML elements for the Counter*/
const setElement = (typeElem,idElem,classElem,contentElem,parentToAppend)=>{
    let elem = document.createElement(typeElem);
    elem.setAttribute("id",idElem);
    elem.classList.add(...classElem);
    elem.innerHTML = contentElem;
    parentToAppend.append(elem);
    return elem;
}
 
/*From here begins the creation of all the HTML elements for creating the Counter*/

/*Creation of Counter Card*/
const counterCard = setElement("div","counterCard",["mt-4"],null,parentContainer);

/*Creation of the div and the Display Counter, that show the counter's increase or decrease*/
const divDisplayCounter = setElement("div", "divDisplayCounter", ["d-flex","align-items-center","justify-content-center"],null,counterCard);
let displayCounter = setElement("span","displayCounter",["d-flex","align-items-center","justify-content-center","display-1"],currentNumber,divDisplayCounter);

/*Creation of the div that contain all the buttons*/
const buttonDiv = setElement("div","buttonDiv",["d-flex","flex-wrap","align-items-center","justify-content-around"],null,counterCard);

/*Creation of Plus Button that increase the counter of 1*/
const buttonPlus = setElement("button","buttonPlus",["operationButton","d-flex", "flex-column", "justify-content-center", "align-items-center"], "+",buttonDiv);

/*Creation of Reset Button that set the counter at 0*/
const buttonReset = setElement("button","reset",["functionButton","d-flex","justify-content-center","align-items-center","flex-column"],"reset",buttonDiv);

/*Creation of Plus Button that decrease the counter of 1*/
const buttonLess = setElement("button","buttonLess",["operationButton","d-flex", "flex-column", "justify-content-center", "align-items-center"],"-",buttonDiv);

/*Creation of Plus Button that increase the counter of 100*/
const buttonPlus100 = setElement("button","buttonPlus100",["operationButton","d-flex", "flex-column", "justify-content-center", "align-items-center"],"+100",buttonDiv);

/*Creation of Auto Button that increase automatically the counter*/
const buttonAuto = setElement("button","auto",["functionButton","d-flex","flex-column","justify-content-center","align-items-center"],"auto",buttonDiv);

/*Creation of Plus Button that decrease the counter of 100*/
const buttonLess100 = setElement("button","buttonLess100",["operationButton","d-flex", "flex-column", "justify-content-center", "align-items-center"],"-100",buttonDiv);

