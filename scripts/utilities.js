function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = inputFieldValueString;
    inputField.value = "";
    return inputFieldValue;
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

function resetValues() {
    setTextElementValueById("total-price", "0.00");
    setTextElementValueById("total", "0.00");
    setTextElementValueById("discount", "0.00");
    couponButton.disabled = true;
    purchaseButton.disabled = true;
    document.getElementById("selected-items").innerHTML = "";
}
