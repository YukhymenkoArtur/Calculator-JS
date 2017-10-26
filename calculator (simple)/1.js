function plus() {
	var num1, num2, result;
	num1 = document.getElementById('1').value;
	num1 = parseInt (num1);

	num2 = document.getElementById('2').value;
	num2 = parseInt (num2);

	result = num1 + num2;
	document.getElementById('res').innerHTML = result;

}

function minus() {
	var num1, num2, result;
	num1 = document.getElementById('1').value;
	num1 = parseInt (num1);

	num2 = document.getElementById('2').value;
	num2 = parseInt (num2);
	
	result = num1 - num2;
	document.getElementById('res').innerHTML = result;

}

function miltyply() {
	var num1, num2, result;
	num1 = document.getElementById('1').value;
	num1 = parseInt (num1);

	num2 = document.getElementById('2').value;
	num2 = parseInt (num2);
	
	result = num1 * num2;
	document.getElementById('res').innerHTML = result;

}

function division() {
	var num1, num2, result;
	num1 = document.getElementById('1').value;
	num1 = parseInt (num1);

	num2 = document.getElementById('2').value;
	num2 = parseInt (num2);
	
	result = num1 / num2;
	document.getElementById('res').innerHTML = result;

}

function reset() {
  location.reload();

}