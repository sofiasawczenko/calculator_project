function sum() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result =  (num1 + num2);
    document.getElementById('result').innerHTML=result;
    console.log(result);
}

function subtract () {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result =  (num1 - num2);
    document.getElementById('result').innerHTML=result;
}

function multiply () {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result =  (num1 * num2);
    document.getElementById('result').innerHTML=result;
}

function divide () {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (num2 == 0) {
        alert('Não é possível realizar divisão por zero, insira outro número diferente de zero');
    }    else {
            var result =  (num1 / num2);
            document.getElementById('result').innerHTML=result;
        }
}

function reset () {
    document.getElementById('result').textContent = '';
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}

// verifica se o campo de texto está vazio
function verificarCampo() {
    var input = document.getElementById('meuCampo').value; 
    
    if (input === '') { 
    alert('O campo está vazio!'); 
    }
}

  // verifica se o campo contém apenas números
function verificarNumeros() {
    var input = document.getElementById('meuCampo').value; 

    if (isNaN(input)) {
    alert('Digite apenas números!'); 
    }
}

var sumButton = document.getElementById('sum');
sumButton.addEventListener('click', sum);

var subtractButton = document.getElementById('subtract');
subtractButton.addEventListener('click', subtract);

var multiplyButton = document.getElementById('multiply');
multiplyButton.addEventListener('click', multiply);

var divideButton = document.getElementById('divide');
divideButton.addEventListener('click', divide);

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset);