function calculateCompoundInterest(input){
    let principalSum = input[0];
    let interestRate = input[1] / 100;
    let compoundingFrequency = 12 / input[2];
    let time = input[3];

    let compoundInterest = principalSum * Math.pow((1 + (interestRate / compoundingFrequency)), time * compoundingFrequency);
    console.log(compoundInterest.toFixed(2));
}