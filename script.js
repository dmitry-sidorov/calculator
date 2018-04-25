let str = '513+10*31-40/25';
let variable = "";
let currentOperator = "";



let numberString = "";
document.addEventListener('keypress',(e) => {
	numberString += e.key;
});




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
function substract(a, b) {
	return (a - b);
}
function multiply(a, b) {
	return (a * b);
}
function divide(a, b) {
	if (b === 0) return "Dividing by 0 error!";
	else return (a / b);
}



