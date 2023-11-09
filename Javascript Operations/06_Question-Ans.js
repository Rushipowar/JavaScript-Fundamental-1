// BMI Calculator

const weight = 80; 
const height = 175; 
const heightM = height / 100; //(In meters)
const BMI = weight / (heightM * heightM);

console.log(`Your BMI is:- ${BMI.toFixed(3)}`);
