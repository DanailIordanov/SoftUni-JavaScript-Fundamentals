function calculateDistance(input) {
    let firstPointX = input[0];
    let firstPointY = input[1];
    let firstPointZ = input[2];
    let secondPointX = input[3];
    let secondPointY = input[4];
    let secondPointZ = input[5];

    let differenceX = Math.abs(firstPointX - secondPointX);
    let differenceY = Math.abs(firstPointY - secondPointY);
    let differenceZ = Math.abs(firstPointZ - secondPointZ);

    let distance = Math.sqrt(Math.pow(differenceX, 2) + Math.pow(differenceY, 2) + Math.pow(differenceZ, 2))
    console.log(distance);
}