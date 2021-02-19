window.calculateSumListener = function calculateSumListener() {
	// Get <input> elements
	var firstInput = document.getElementById("firstNumber");
	var secondInput = document.getElementById("secondNumber");

	// Parse the text entered in each into numbers
	var num1 = parseInt(firstInput.value);
	var num2 = parseInt(secondInput.value);

	// Find their sum
	var sum = num1 + num2;

	// Display the sum in the output element
	document.getElementById("resultNumber").value = sum;
};
