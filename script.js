let inputString = "";
let operandArray = [];
let operatorArray = [];



document.addEventListener('keydown',(e) => {
	// console.log(keyAnalize(e.code));
	
	console.log(e.code);
	inputString += keyAnalize(e.code);
	console.log(inputString);
	console.log('Before calculation: ', operandArray, operatorArray);

	console.log('After calculation: ', operandArray, operatorArray);
	// console.log(inputString);
	// console.log(operandArray);
	// console.log(operatorArray);
});



keyParse(inputString);
calculate(operandArray, operatorArray);



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
		case "Numpad0": return "0";
		break;
		case "Digit1":
		case "Numpad1": return "1";
		break;
		case "Digit2":
		case "Numpad2": return "2";
		break;
		case "Digit3":
		case "Numpad3": return "3";
		break;
		case "Digit4":
		case "Numpad4": return "4";
		break;
		case "Digit5":
		case "Numpad5": return "5";
		break;
		case "Digit6":
		case "Numpad6": return "6";
		break;
		case "Digit7":
		case "Numpad7": return "7";
		break;
		case "Digit8":
		case "Numpad8": return "8";
		break;
		case "Digit9":
		case "Numpad9": return "9";
		break;
		case "NumpadDivide": return "/";
		break;
		case "NumpadMultiply": return "*";
		break;
		case "NumpadSubtract": return "-";
		break;
		case "NumpadAdd": return "+";
		break;
		case "NumpadEnter":
		case "Enter": return "=";
		break;
		case "NumpadDecimal":
		case "Period":
		case "Comma": return ".";
		break;
		case "Backspace": return "b";
		break;
		case "Delete": return "d";
		break;
		default: return "";
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



//--------------------------------------------------------//

// function inputCaptcha(variable) {
// 	let zero = document.querySelector('.zero');
// 	zero.addEventListener('click', variable.concat("0"));
// 	let one = document.querySelector('.one');
// 	one.addEventListener('click', variable.concat("1"));
// 	let two = document.querySelector('.two');
// 	two.addEventListener('click', variable.concat("2"));
// 	let three = document.querySelector('.three');
// 	three.addEventListener('click', variable.concat("3"));
// 	let four = document.querySelector('.four');
// 	four.addEventListener('click', variable.concat("4"));
// 	let five = document.querySelector('.five');
// 	five.addEventListener('click', variable.concat("5"));
// 	let six = document.querySelector('.six');
// 	six.addEventListener('click', variable.concat("6"));
// 	let seven = document.querySelector('.seven');
// 	seven.addEventListener('click', variable.concat("7"));
// 	let eight = document.querySelector('.eight');
// 	eight.addEventListener('click', variable.concat("8"));
// 	let nine = document.querySelector('.nine');
// 	nine.addEventListener('click', variable.concat("9"));
// 	let dot = document.querySelector('.dot');
// 	dot.addEventListener('click', variable.concat("."));
// }




// let operatorArray = [];
// for (let i = 0; i < str.length; i++) {
// 	numberArray[i] = Number.parseInt(str);
// 	let numLength = numberArray.toString().length;
// }
