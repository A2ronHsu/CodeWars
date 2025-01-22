// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let bmi = weight/(height**2); //eu estava tentando usar operador XOR ^ como pontenciação **
    if (bmi <= 18.5){return "Underweight"};
    if (bmi <= 25 ){return "Normal"};
    if (bmi <= 30 ){return "Overweight"};
    if (bmi > 30){return "Obese"};
    
}

console.log(bmi(80,1.80));