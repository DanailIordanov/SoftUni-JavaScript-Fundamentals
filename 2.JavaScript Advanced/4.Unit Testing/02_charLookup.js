let expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('lookupCharTests', function () {
    it('should return undefined with a non-string first parameter', function () {
        expect(lookupChar(10, 0)).to.equal(undefined, 'Function did not return correct result!');
    });
    it('should return undefined with a non-number second parameter', function () {
        expect(lookupChar('someString', 'someIndex')).to.equal(undefined, 'Function did not return correct result!');
    });
    it('should return undefined with a floating point number as second parameter', function () {
        expect(lookupChar('someString', 3.5)).to.equal(undefined, 'Function did not return correct result!');
    });
    it('should return Incorrect index with a negative index', function () {
        expect(lookupChar('someString', -10)).to.equal('Incorrect index', 'Function did not return correct result!');
    });
    it('should return Incorrect index with a too large index', function () {
        expect(lookupChar('someString', 50)).to.equal('Incorrect index', 'Function did not return correct result!');
    });
    it('should return Incorrect index with an index value equal to string length', function () {
        expect(lookupChar('someString', 10)).to.equal('Incorrect index', 'Function did not return correct result!');
    });
    it('should return correct value with correct parameters', function () {
        expect(lookupChar('someString', 0)).to.equal('s', 'Function did not return correct result!');
    });
    it('should return correct value with correct parameters', function () {
        expect(lookupChar('someString', 4)).to.equal('S', 'Function did not return correct result!');
    });
});