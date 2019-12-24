// innerHTML returns the value and apply any HTML formatting 
let getValueElem = document.querySelector("#content");
console.log(getValueElem.innerHTML);

// innerText returns the value as is and ignores any HTML formatting which may be include
//let getValueElem = document.querySelector("#content");
//console.log(getValueElem.innerText);

// textContent appears to the same as innerText but keeps formatting (such as \n)
//let getValueElem = document.querySelector("#content");
//console.log(getValueElem.textContent);



let greetingElem = document.querySelector("#greeting");
greetingElem.innerHTML = "<strong>Mrs. Kelly</strong>";
console.log(greetingElem.innerHTML);

//let greetingElem = document.querySelector("#greeting");
//greetingElem.innerText = "<strong>Mrs. Kelly</strong>";
//console.log(greetingElem.innerText);

//let greetingElem = document.querySelector("#greeting");
//greetingElem.textContent = "<strong>Mrs. Kelly</strong>";
//console.log(greetingElem.textContent);

