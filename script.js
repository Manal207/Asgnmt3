function calculateBMI(event) {
	event.preventDefault();
	const heightFeet = parseInt(document.getElementById("heightFeet").value);
	const heightInches = parseInt(document.getElementById("heightInches").value);
	const weight = parseInt(document.getElementById("weight").value);
	const heightTotalInches = heightFeet * 12 + heightInches;
	const heightMeters = heightTotalInches * 0.0254;
	const weightKilograms = weight * 0.453592;
	const bmi = weightKilograms / (heightMeters ** 2);
	let bmiCategory;
	if (bmi < 18.5) {
		bmiCategory = "Underweight";
	} else if (bmi < 25) {
		bmiCategory = "Normal weight";
	} else if (bmi < 30) {
		bmiCategory = "Overweight";
	} else {
		bmiCategory = "Obese";
	}
	document.getElementById("bmiResult").textContent = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory})`;
}


exports.calculateBMI = calculateBMI;

