//First write a function. Grab an element. Attach a listener

function changeColor(details) {
    details[`target`][`style`][`color`] = `red`;
}

let modifiedButton = document.getElementById(`listenButton`);
modifiedButton.addEventListener(`click`, changeColor);

//This function utilizes the alert method to display a pop-up box once the mouse hovers over it. Pretty cool function that i found online
function makePop(event) {
    alert(`Are you listening?`);
}

//used the mouseevent mouseover to actualize said function
let modifiedPop = document.getElementById(`secondButton`);
modifiedPop.addEventListener(`mouseover`, makePop);

//This changed the outer (top and bottom) p tags generic Lorem text into a list that i specified using outerHTML 
let modifiedDiv = document.getElementsByClassName(`listenClass`);
for(let i =0; i<modifiedDiv.length; i++){
    modifiedDiv[i].outerHTML = `<ul><li>Write. Grab. Attach</li></ul>`;
    // modifiedDiv[i].innerHTML = `<ul><li>Write. Grab. Attach</li></ul>`; //Getting a debugger error for some reason, so just commented it out for now.
}

//This function triggers when the mouse leaves the element in question. 
//In this case it caused the button text to be enlarged to 40px once the cursor moved away from it.
function makeLeave(dip) {
    dip [`target`][`style`][`font-size`] = `40px`;
}

let modifiedLeave = document.getElementById(`thirdButton`);
modifiedLeave.addEventListener(`mouseout`, makeLeave); 

//Space Function
function pressSpace(event){
    if(32) {   
        alert(`SPACE BAR WAS DEFINITELY PRESSED`);
    } else {
        alert(`NO ENTER SPACE KEY`);
    }
}

document.body.addEventListener(`keydown`, pressSpace);