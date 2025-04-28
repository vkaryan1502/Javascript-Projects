const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
 e.preventDefault();

 const height = parseInt(document.querySelector('#height').value)
 const weight = parseInt(document.querySelector('#weight').value)
 const result = document.querySelector('#results')

 if (height == '' || height < 0 || isNaN(height) ) {
    result.innerHTML = `Please give a valid height ${height}`
 } else if (weight == '' || weight < 0 || isNaN(weight) ){
    result.innerHTML = `Please give a valid weight ${weight}`
 } else {
   const bmi = (weight/((height * height)/10000)).toFixed(2)
   let message = '';
   
   if (bmi < 18.6) {
       message = "Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        message = "Normal weight";
    } else {
        message = "Overweight";
    }
    
    result.innerHTML = `<span>Your BMI is ${bmi} and you are ${message}.</span>`;
 }
})


