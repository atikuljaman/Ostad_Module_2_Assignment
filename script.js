document.getElementById("form").addEventListener("submit", function (e) {
  // PREVENTDEFAULT TO STOP PAGE RELOAD WHEN FORM IS SUBMIT BY USER
  e.preventDefault();

  const weightInput = document.getElementById("weightInput").value;
  const heightInput = document.getElementById("heightInput").value;
  const bmiContainer = document.getElementById("calculated_bmi_container");
  const bmiValue = document.getElementById("bmi_value");

  // CALCULATING THE BMI
  const bmi = weightInput / (heightInput * heightInput);

  // CONDITION TO SHOW THE USER BMI VALUE WHEN THE BMI VALUE EXIST
  bmi && bmiContainer.classList.remove("inactive");

  // INSERTING USER'S BMI VALUE INTO THE BMI VALUE CONTAINER
  bmiValue.innerText = bmi.toFixed(1);
});
