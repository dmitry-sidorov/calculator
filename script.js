







// let test1 = "1234567890";
// let test2 = "qwerty";

// // function testFun(testValue) {
// // 	for (let i = 0; i < testValue.length; i++){
// // 		console.log({testValue[i]: numberCheck(testValue[i])});
// // 	}
// // }

// // testFun(test1);
// // testFun(test2);
// console.log(test1, numberCheck(test1));
// console.log(test2, numberCheck(test2));

let inputString = "";





let numberString = "";
document.addEventListener('keydown',(e) => {
	console.log(keyAnalize(e.code));
	console.log(e.code);
	inputString += keyAnalize(e.code);
	
	// console.log(typeof result);
	// numberString += e.code;
	// console.log(typeof e.code);
});






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

let operandArray = [];
let operatorArray = [];
let buffer = "";
stringParse(inputString);



function stringParse(str) {
	for (let i = 0; i < str.length; i++) {
	if (isDigit(str[i])) {
		buffer += str[i];
	} else {
		operandArray.push(buffer);
		buffer = "";
		operatorArray.push(str[i]);
	}
}
}

console.log(operandArray);
console.log(operatorArray);





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




function add(a, b) {
	return (a + b);
}
function subtract(a, b) {
	return (a - b);
}
function multiply(a, b) {
	return (a * b);
}
function divide(a, b) {
	if (b === 0) return "Dividing by 0 error!";
	else return (a / b);
}
function isDigit(num) {
	if (/\d/g.test(num)) return true;
	else if (/\D/g.test(num)) return false;
}



