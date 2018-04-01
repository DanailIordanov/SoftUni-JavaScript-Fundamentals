function calculateDistance(input) {
    let firstSpeed = input[0] * 1000 / 3600;
    let secondSpeed = input[1] * 1000 / 3600;
    let time = input[2];

    let distance = Math.abs(firstSpeed * time - secondSpeed * time);
    console.log(distance);
}