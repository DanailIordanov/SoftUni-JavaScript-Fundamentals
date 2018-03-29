function checkMatrix(matrix) {
    let rowSum = [];
    let colSum = [];

    //Find the sum of the elements in each row
    for(let i = 0; i < matrix.length; i++) {
        rowSum[i] = matrix[i].map(x => Number(x)).reduce((x,y) => x + y);
    }

    //Find the sum of the elements in each column
    for(let col = 0; col < matrix[col].length; col++) {
        let currentRowSum = 0;
        for(let row = 0; row < matrix.length; row++) {
            currentRowSum += Number(matrix[row][col]);
        }
        colSum[col] = currentRowSum;
    }

    //Check whether they have equal values and print appropriate message
    for (let kvp in rowSum) {
        if(rowSum[kvp] !== colSum[kvp]) {
            console.log('false');
            return;
        }
    }

    console.log('true');
}