function sortArray(input) {
    input.sort((x,y) => getCriteria(x,y));

    for (let item of input) {
        console.log(item);
    }

    function getCriteria(x,y) {
        if(x.length < y.length) {
            return -1;
        } else if(x.length > y.length) {
            return 1;
        } else {
            if(x.toLowerCase() < y.toLowerCase()) {
                return -1;
            } else {
                return 1;
            }
        }
    }
}