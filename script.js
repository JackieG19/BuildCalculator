function numbers(num){ //numbers are clickable
    var input = document.getElementById('input');
    switch (num) {
        case 1:
            input.value += '1';
            break;
        case 2:
            input.value += '2';
            break;
        case 3:
            input.value += '3';
            break;
        case 4:
            input.value += '4';
            break;
        case 5:
            input.value += '5';
            break;
        case 6:
            input.value += '6';
            break;
        case 7:
            input.value += '7';
            break;
        case 8:
            input.value += '8';
            break;
        case 9:
            input.value += '9';
            break;
        case 0:
            input.value += '0';
            break;
       
    }
}

// operators buttons
function operators(ora){
    var input = document.getElementById('input');
    switch (ora) {
        case '+':
            input.value += '+';
            break;
        case '-':
            input.value += '-';
            break;
        case 'x':
            input.value += '*';
            break;
        case '/':
            input.value += '/';
            break;
        case '+/-':
            input.value += '-' + input.value;
            break;
       
    }
}


// clear screen
function clearScreen() {
    document.getElementById('input').value = "",
    document.getElementById('answer').value = "";
}

// backspace button
function backSpace(num){
    var input = document.getElementById('input');
    var space = input.value;
    if(space.length > 0){
        space = space.substring(0, space.length-1) // removes the last number/operators entered
        input.value = space;
    }
}

// equal button
function equal(num){
    var input = document.getElementById('input');
    var answer = Math.floor('='); 
    document.getElementById('answer').value = '=' + answer;
    console.log(equal)
}