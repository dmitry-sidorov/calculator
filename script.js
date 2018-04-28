let inputString = "";
let operandArray = [];
let operatorArray = [];

let display = document.querySelector('.display');

document.addEventListener('keydown',(e) => {
	console.log(e.code);
	// inputString += press(keyAnalize(e.code));
	console.log(e);
	console.log(inputString);
	// let num = keyAnalize(e.code);
	press(keyAnalize(e.code));
	e.blur();
	// display.textContent = inputString;
});



// keyParse(inputString);
// calculate(operandArray, operatorArray);



function calculate(argumentsArray, operationsArray) {
	const length = operationsArray.length;
	for (let i = 0; i < length; i++){
		let first = argumentsArray.shift();
		let second = argumentsArray.shift();
		let operator = operationsArray.shift();
		argumentsArray.unshift (operatorSwitch(first, second, operator));
	}
}

function keyParse(mixedString) {
	let buffer = "";
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
}

function keyAnalize(key) {
	switch (key) {
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
		case "NumpadDivide": return ("/");
		break;
		case "NumpadMultiply": return ("*");
		break;
		case "NumpadSubtract": return ("-");
		break;
		case "NumpadAdd": return ("+");
		break;
		case "NumpadEnter":
		case "Enter": return ("=");
		break;
		case "NumpadDecimal":
		case "Period":
		case "Comma": return (".");
		break;
		case "Backspace": return ("b");
		break;
		case "Delete": return ("d");
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
	return (parseInt(a) + parseInt(b)).toString();
}
function subtract(a, b) {
	return (parseInt(a) - parseInt(b)).toString();
}
function multiply(a, b) {
	return (parseInt(a) * parseInt(b)).toString();
}
function divide(a, b) {
	a = parseInt(a);
	b = parseInt(b);
	if (b === 0) return "Dividing by 0 error!";
	else return (a / b).toString();
}
function isDigit(num) {
	if (/\d/g.test(num)) return true;
	else if (/\D/g.test(num)) return false;
}
function press(arg) {
	inputString += arg;
	display.textContent = inputString;
}


//--------------------------------------------------------//


	let zero = document.querySelector('.zero');
	zero.addEventListener('click', (e) => {
		press("0");
		// display.textContent = inputString;
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





// let operatorArray = [];
// for (let i = 0; i < str.length; i++) {
// 	numberArray[i] = Number.parseInt(str);
// 	let numLength = numberArray.toString().length;
// }
