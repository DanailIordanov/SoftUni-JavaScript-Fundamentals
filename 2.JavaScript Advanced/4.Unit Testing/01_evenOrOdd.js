let expect = require('chai').expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }

    if (string.length % 2 === 0) {
        return 'even';
    }

    return 'odd';
}

describe('isOddOrEvenTests', function () {
    it('should return undefined with a number parameter', function () {
        expect(isOddOrEven(10)).to.equal(undefined, 'Function did not return the correct result!');
    });
    it('should return undefined with an object parameter', function () {
        expect(isOddOrEven({name: 'Pesho'})).to.equal(undefined, 'Function did not return the correct result!');
    });
    it('should return correct result with an even length', function () {
        expect(isOddOrEven('Love')).to.equal('even', 'Function did not return the correct result!');
    });
    it('should return correct result with an odd length', function () {
        expect(isOddOrEven('Place')).to.equal('odd', 'Function did not return the correct result!');
    });
    it('should return correct values with multiple consecutive checks', function () {
        expect(isOddOrEven('abcde')).to.equal('odd', 'Function did not return the correct result!');
        expect(isOddOrEven('abcd')).to.equal('even', 'Function did not return the correct result!');
        expect(isOddOrEven('is it a program')).to.equal('odd', 'Function did not return the correct result!');
    });
});