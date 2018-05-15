let add = (function () {
    let sum = 0;
    function addValue(num) {
        sum += num;
        return addValue;
    }
    addValue.toString = () => sum;
    return addValue;
})();

console.log(add(19312)(10)(-100).toString());