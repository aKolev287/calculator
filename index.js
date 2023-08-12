let n1 = 0;
let n2 = 0;
let history = [];

// handle the history
function updateHistory() {
    
    const h4Element = document.querySelector('h4');
   
    h4Element.innerHTML = '';
    
    // Iterate through the history array and append each item
    for (let i = 0; i < history.length; i++) {
       
        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = history[i];
    
        h4Element.appendChild(paragraphElement);
    }
}

// dispaly the value of the previous operation
function displayValue(){
    let valueN = document.getElementById('display').value;
    return Number(valueN);
}

// add numbers
function add(num1, num2){
    let result = num1 + num2;
    return result;
}

// subtract numbers
function subtract(num1, num2){
    let result = num1 - num2;
    return result;
}

// multiply numbers
function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}

// divide numbers
function divide(num1, num2){
    let result = num1 / num2;
    return result;
}

// square root
function sqareRoot(num1){
    let result = Math.sqrt(num1);
    return result;
}

// cube root
function powerTwo(num1){
    let result = Math.pow(num1, 2);
    return result;
}

// calculate the value 
function calculateValue(num1, num2, operator){
    // console.log(num1);
    // console.log(num2);
    if (operator === '+'){
        // console.log(`This is in c value: ${add(num1, num2)}`);
        return add(num1, num2);
    }else if(operator === '-'){
        return subtract(num1, num2);
    }else if(operator === '*' || operator === 'x'){
        return multiply(num1, num2);
    }else if(operator === '/' || operator === '÷'){
        return divide(num1, num2);
    }
}
// handle valid buttons
function handleButtonClick(key){
    n1 = displayValue();
    
    switch (key) {
        case '1':
            document.getElementById('display').value += '1';
            break;
        case '2':
            document.getElementById('display').value += '2';
            break;
        case '3':
            document.getElementById('display').value += '3';
            break;
        case '4':
            document.getElementById('display').value += '4';
            break;
        case '5':
            document.getElementById('display').value += '5';
            break;
        case '6':
            document.getElementById('display').value += '6';
            break;
        case '7':
            document.getElementById('display').value += '7';
            break;
        case '8':
            document.getElementById('display').value += '8';
            break;
        case '9':
            document.getElementById('display').value += '9';
            break;
        case '0':
            document.getElementById('display').value += '0';
            break;
        case '.':
            document.getElementById('display').value += '.';
            break;
        case '+':
            document.getElementById('previosNumber').innerHTML = `${n1} <sign>+</sign>`;
            document.getElementById('display').value = '';
            break;
        case '-':
            document.getElementById('previosNumber').innerHTML = `${n1} <sign>-</sign>`;
            document.getElementById('display').value = '';
            break;
        case '*':
        case 'x':
            document.getElementById('previosNumber').innerHTML = `${n1} <sign>x</sign>`;
            document.getElementById('display').value = '';
            break;
        case 'r':
        case '√x':
            history.push(`√${n1} = ${sqareRoot(n1)}`);
            document.getElementById('previosNumber').innerHTML = `√${n1}`;
            document.getElementById('display').value = sqareRoot(n1);
            break;
        case 'p':
        case 'x²':
            history.push(`${n1}² = ${powerTwo(n1)}`);
            document.getElementById('previosNumber').innerHTML = `${n1}²`;
            document.getElementById('display').value = powerTwo(n1);
            break;
        case '/':
        case '÷':
            document.getElementById('previosNumber').innerHTML = `${n1} <sign>÷</sign>`;
            document.getElementById('display').value = '';
            break;
        case 'Backspace':
        case '←':
            if(document.getElementById('display').value.length > 0){
                document.getElementById('display').value = document.getElementById('display').value.slice(0, -1);
            }
            break
        case '=':
        case 'Enter':
            
            n2 = displayValue();
            let operation = `${document.querySelector('sign').innerHTML}`;
            
            if (operation !== ''){
                
                let total = calculateValue(n1, n2, operation);
                // push the lastest equation to the history
                history.push(`${n1} ${operation} ${n2} = ${total}`);
    
                document.getElementById('previosNumber').innerHTML = `${n1} <sign>${operation}</sign> ${n2} =`;
    
                // display the new value 
                document.getElementById('display').value = total;
            }else if (operation === ''){
                document.getElementById('previosNumber').innerHTML = `${n2} =`;
            }
            break;
        
        // Clear everything
        case 'c':
        case 'C':
            document.getElementById('display').value = '';
            document.getElementById('previosNumber').innerHTML = '-';
            break;

        // Themes
        case '🌙':
            lightTheme();
            document.querySelector('.light').innerHTML = '☀️'
            break;
        case '☀️':
            darkTheme();
            document.querySelector('.light').innerHTML = '🌙'
            break;
        case '↓':
            document.querySelector('h4').classList.add('hidden');
            document.querySelector('.history').innerHTML = '→'
            break;
        case '→':
            document.querySelector('h4').classList.remove('hidden');
            document.querySelector('.history').innerHTML = '↓'
            break;
        default: console.log(key);
    }
    updateHistory();
        
}

function handleKeyboardEvent() {
    document.addEventListener('keydown', function(event) {
        handleButtonClick(event.key);
    });
}


function lightTheme(){
    let lightButton = document.querySelectorAll('button');
    let lightDisplay = document.querySelectorAll('.dark-display');

    document.querySelector('body').classList.add('light-theme');
    document.querySelector('body').classList.remove('dark-theme');
    
    document.querySelector('.button-field').classList.add('button-field-light-theme');
    document.querySelector('.button-field').classList.remove('button-field-dark-theme');


    for (let i = 0; i < lightDisplay.length; i++) {
       lightDisplay[i].classList.add('light-display');
       lightDisplay[i].classList.remove('dark-display');
    }

    for (let i = 0; i < lightButton.length; i++) {
       lightButton[i].classList.add('light-theme');
       lightButton[i].classList.remove('dark-theme-button');
       if(lightButton[i].className.includes('special')){
           lightButton[i].className = lightButton[i].className.replace('special', 'light-theme-button-special');
       }
       if (lightButton[i].className.includes('other')){
           lightButton[i].className = lightButton[i].className.replace('other', 'light-theme-button-other');
       }
    }
}
function darkTheme(){
    let darkButton = document.querySelectorAll('button');
    let darkDisplay = document.querySelectorAll('.light-display');

    document.querySelector('body').classList.add('dark-theme');
    document.querySelector('body').classList.remove('light-theme');
    
    document.querySelector('.button-field').classList.add('button-field-dark-theme');
    document.querySelector('.button-field').classList.remove('button-field-light-theme');


    for (let i = 0; i < darkDisplay.length; i++) {
       darkDisplay[i].classList.add('dark-display');
       darkDisplay[i].classList.remove('light-display');
    }

    for (let i = 0; i < darkButton.length; i++) {
       darkButton[i].classList.add('dark-theme-button');
       darkButton[i].classList.remove('light-theme');
       if(darkButton[i].className.includes('light-theme-button-special')){
           darkButton[i].className = darkButton[i].className.replace('light-theme-button-special', 'special');
       }
       if (darkButton[i].className.includes('light-theme-button-other')){
           darkButton[i].className = darkButton[i].className.replace('light-theme-button-other', 'other');
       }
    }
}

// Detecting an event
function main(){

    // get the key
    let button = document.getElementsByClassName('button');

    // loop through all buttons with that class name and check what are valid inputs and what are not
    for(let i = 0; i < button.length; i++){
        button[i].addEventListener('click', function(){
            handleButtonClick(this.innerHTML);
            downButton(this.innerHTML);
        });
    }
    handleKeyboardEvent();
    
}

main();
