function getInputValueById(inputId) {

    const inputField = document.getElementById(inputId);
   const inputFieldValue= parseFloat(inputField.value);
   inputField.value = '';
   return inputFieldValue;
}

function getElementValueById(elementId) {
    const elementField = document.getElementById(elementId);
    const elementText = parseFloat(elementField.innerText);
    return elementText;
}

// geting element id and pass new value...

function setTextElementValueById(elementId,newValue){
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}