function modifyNumber(input) {
    let number = input.toString();
    while (true) {
        let sum = 0;
        for(let i = 0; i < number.length; i++){
            sum += Number(number[i]);
        }

        let average = sum / number.length;

        if(average <= 5){
            number += '9';
        } else {
            break;
        }
    }
    console.log(number);
}