let inputString = "";
let display = document.querySelector('.display');

document.addEventListener('keydown',(e) => {
	console.log(e.code);
	console.log(e.key);
	console.log(inputString);
	press(keyAnalize(e.code));
	press(keySymbolAnalize(e.key));
});

function calculate() {
	let array = keyParse(inputString);
	let operandArray = array[0];
	let operatorArray = array[1];
	for (let i = 0; i < operatorArray.length; i++) {
		let first = operandArray.shift();
		let second = operandArray.shift();
		operandArray.unshift (operatorSwitch(first, second, operatorArray[i]));
		console.log(operandArray);
		console.log(operatorArray);
	}
	console.log (operandArray[0], typeof operandArray[0]);
	inputString = operandArray[0];
	// console.log('Array of numbers: ', operandArray);
	// console.log('Array of operations: ', operatorArray);
	// console.log('Input string: ', inputString);
	displayRefresh();
}

function keyParse(mixedString) {
	let buffer = "";
	let operandArray = [];
	let operatorArray = [];
	for (let i = 0; i <= mixedString.length; i++) {
		if (isDigit(mixedString[i])) {
			buffer+=mixedString[i];
			console.log('buffer is' + buffer);
		} else {
			operandArray.push(buffer);
			buffer = "";
			if (mixedString.length !== i) {
				operatorArray.push(mixedString[i]);
			}
		}
	} 
	return [operandArray, operatorArray];
}

function keySymbolAnalize(key) {
	switch (key) {
		case "+": return ("+");
		break;
		case "-": return ("-");
		break;
		case "*": return ("*");
		break;
		case "/": return ("/");
		break;
		default: return ("");
	}
}

function keyAnalize(code) {
	switch (code) {
		case "Digit0": 
		case "Numpad0": return ("0");
		break;
		case "Digit1":
		case "Numpad1": return ("1");
		break;
		case "Digit2":
		case "Numpad2": return ("2");
		break;
		case "Digit3":
		case "Numpad3": return ("3");
		break;
		case "Digit4":
		case "Numpad4": return ("4");
		break;
		case "Digit5":
		case "Numpad5": return ("5");
		break;
		case "Digit6":
		case "Numpad6": return ("6");
		break;
		case "Digit7":
		case "Numpad7": return ("7");
		break;
		case "Digit8":
		case "Numpad8": return ("8");
		break;
		case "Digit9":
		case "Numpad9": return ("9");
		break;
		// case "NumpadDivide": return ("/");
		// break;
		// case "NumpadMultiply": return ("*");
		// break;
		// case "NumpadSubtract": return ("-");
		// break;
		// case "NumpadAdd": return ("+");
		// break;
		case "NumpadEnter":
		case "Enter": calculate();
		return ("");
		break;
		case "NumpadDecimal":
		case "Period":
		case "Comma": return (".");
		break;
		case "Backspace": backspaceOn();
		return ("");
		break;
		case "Delete": inputStringRefresh();
		return ("");
		break;
		default: return ("");
	}
}

function operatorSwitch(a, b, operator) {
	switch (operator) {
		case "+": return add(a, b);
		break;
		case "-": return subtract(a, b);
		break;
		case "*": return multiply(a, b);
		break;
		case "/": return divide(a, b);
		break;
	}
}

function add(a, b) {
	return (Number(a) + Number(b)).toString();
}
function subtract(a, b) {
	return (Number(a) - Number(b)).toString();
}
function multiply(a, b) {
	return (Number(a) * Number(b)).toString();
}
function divide(a, b) {
	a = Number(a);
	b = Number(b);
	if (b === 0) return "Dividing by 0 error!";
	else return (a / b).toString();
}
function isDigit(num) {
	if (/\d/g.test(num) || num === ".") return true;
	else if (/\D/g.test(num)) return false;
}
function press(arg) {
	inputString += arg;
	displayRefresh();
}

function displayRefresh() {
	display.textContent = inputString;
	if (inputString.length > 11) {
		// display.setAttribute('style', 'font-size: 15px');
		display.setAttribute('style', 'font-size: 30px');
	}
}

function inputStringRefresh() {
	inputString = "";
}
function backspaceOn() {
	inputString = inputString.slice(0, -1);
	displayRefresh();
}

let zero = document.querySelector('.zero');
zero.addEventListener('click', (e) => {
	press("0");
});
let one = document.querySelector('.one');
one.addEventListener('click', (e) => {
	press("1")});
let two = document.querySelector('.two');
two.addEventListener('click', (e) => {
	press("2")});
let three = document.querySelector('.three');
three.addEventListener('click', (e) => {
	press("3")});
let four = document.querySelector('.four');
four.addEventListener('click', (e) => {
	press("4")});
let five = document.querySelector('.five');
five.addEventListener('click', (e) => {
	press("5")});
let six = document.querySelector('.six');
six.addEventListener('click', (e) => {
	press("6")});
let seven = document.querySelector('.seven');
seven.addEventListener('click', (e) => {
	press("7")});
let eight = document.querySelector('.eight');
eight.addEventListener('click', (e) => {
	press("8")});
let nine = document.querySelector('.nine');
nine.addEventListener('click', (e) => {
	press("9")});
let dot = document.querySelector('.dot');
dot.addEventListener('click', (e) => {
	press(".")});
let backspace = document.querySelector('.backspace');
backspace.addEventListener('click', (e) => {
	backspaceOn();
});
let enter = document.querySelector('.enter');
enter.addEventListener('click', (e) => {
	calculate();
});
let clear = document.querySelector('.clear');
clear.addEventListener('click', (e) => {
	inputStringRefresh();
	displayRefresh();
});

