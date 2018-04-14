(function solution() {
    let manager = {
        add: function (firstVector, secondVector) {
            let firstVectorX = firstVector[0];
            let firstVectorY = firstVector[1];
            let secondVectorX = secondVector[0];
            let secondVectorY = secondVector[1];

            let sumX = firstVectorX + secondVectorX;
            let sumY = firstVectorY + secondVectorY;

            return [sumX, sumY];
        },
        multiply: function (vector, scalar) {
            let vectorX = vector[0];
            let vectorY = vector[1];

            let productX = vectorX * scalar;
            let productY = vectorY * scalar;

            return [productX, productY];
        },
        length: function (vector) {
            let vectorX = Number(vector[0]);
            let vectorY = Number(vector[1]);

            return Math.sqrt(Math.pow(vectorX, 2) + Math.pow(vectorY, 2));
        },
        dot: function (firstVector, secondVector) {
            let firstVectorX = firstVector[0];
            let firstVectorY = firstVector[1];
            let secondVectorX = secondVector[0];
            let secondVectorY = secondVector[1];

            return firstVectorX * secondVectorX + firstVectorY * secondVectorY;
        },
        cross: function (firstVector, secondVector) {
            let firstVectorX = firstVector[0];
            let firstVectorY = firstVector[1];
            let secondVectorX = secondVector[0];
            let secondVectorY = secondVector[1];

            return firstVectorX * secondVectorY - firstVectorY * secondVectorX;
        }
    };

    return manager;
})();