let x = document.getElementById('enterNumberFirst');
let y = document.getElementById('enterNumberSecond');
let result;


function calcAddition() {
    result = Number(x.value) + Number(y.value);
    document.getElementById('result').innerHTML = result;
    x.value = '';
    y.value = '';
}

function calcSubtraction() {
    result = Number(x.value) - Number(y.value);
    document.getElementById('result').innerHTML = result;
    x.value = '';
    y.value = '';
}

function calcMultiplication() {
    result = Number(x.value) * Number(y.value);
    document.getElementById('result').innerHTML = result;
    x.value = '';
    y.value = '';
}

function calcDivision() {
    result = y.value != 0 ? Number(x.value) / Number(y.value) : "Разделить на ноль нельзя!";
    document.getElementById('result').innerHTML = result;
    x.value = '';
    y.value = '';
}
