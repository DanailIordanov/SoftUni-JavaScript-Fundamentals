function calculate(name, age, weight, height) {
    let bmi = weight * 10000 / Math.pow(height, 2);

    let personalInfo = {
        age: Math.round(age),
        weight: Math.round(weight),
        height: Math.round(height)
    };
    
    let status = '';
    let isObese = false;
    
    if (bmi < 18.5) {
        status = 'underweight';
    } else if (bmi < 25) {
        status = 'normal';
    } else if (bmi < 30) {
        status = 'overweight';
    } else {
        status = 'obese';
        isObese = true;
    }

    let result = {
        name: name,
        personalInfo: personalInfo,
        BMI: Math.round(bmi),
        status: status,
    };

    if (isObese) {
        result.recommendation = 'admission required';
    }

    return result;
}

console.log(calculate(['Peter', 29, 75, 182]));