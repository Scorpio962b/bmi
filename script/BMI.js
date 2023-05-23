function cal() {
  let results = "";
  let bmi;
  let height = parseInt(document.getElementById("height").value);
  console.log(height)
//   let output = document.getElementById("Ans");

  // output.innerHTML = mover.innerHTML;
  // results = Ans.innerHTML;

  // mover.onclick = function(){
  // output.innerHTML =this.value;
  // }

  let weight = parseInt(document.getElementById("weight").value);
//   let out = document.getElementById("ans");

  document.getElementById("Ans").textContent = height + "cm";
  document.getElementById("ans").textContent = weight + "kg";
  // height = mover.value;
  // weight = slider.value;

bmi= weight / height * 100 .toFixed(1);
    results.textContent = bmi;

 

  if (bmi <= 18.4) {
    results = "YOU ARE UNDERWEIGHT";
  } else if (bmi <= 24.9) {
    results = "YOU ARE NORMAL";
  } else if (bmi <= 39.9) {
    results = "YOU ARE OVERWEIGHT";
  } else if (bmi >= 40.0) {
    results = "YOU ARE OBESE";
  }

  document.getElementById("results").textContent = bmi;
  document.getElementById("message").textContent = results;
}
