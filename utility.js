// this one for all the function

// update seats number
function updateSeatCount(event,value){
    const element = document.getElementById(event);
    element.innerText = value;
}

// convert into presINT
function convertIntoInt(event) {
    const element = document.getElementById(event);
    const elementText = element.innerText;
    const convertedElement = parseInt(elementText);
    return convertedElement;
}

// set hidden class
function setHidden(id) {
    const hiddenClass = document.getElementById(id)
    hiddenClass.classList.add('hidden')
}
// remove hidden class
function removeHidden(id) {
    const hiddenClass = document.getElementById(id)
    hiddenClass.classList.remove('hidden')
    hiddenClass.classList.add('flex')
}

// add attribute
function setAttributeValue(elementId){
    console.log(elementId);
    const element = document.getElementById(elementId);
    element.setAttribute("disabled", "true"); 
}

